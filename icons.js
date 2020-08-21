var icon = $('.default');
var icones = $(document).find("symbol");

$.each(icones, function (key, val) {
    var cln = $(icon).clone();
    $(cln).find('use').attr("href", `icons/icon-library.svg#${val.id}`)
    $(cln).addClass(`${val.id}`)
    $(cln).find('span').text(val.id)

    $(cln).appendTo($(icon).parent());
    
});

$(document).ready(function () {
    var name = $('span')
    $("#filter").on("input", function(){
    var expressao = new RegExp(this.value, "i")
    if (this.value.length > 0) {
        $.each(name, (key, val) => {
            if ( expressao.test($(val).text()) ) {
                 $('.row').find(`.${$(val).text()}`).css("display", "");
            } else{
                $('.row').find(`.${$(val).text()}`).css("display", "none");
            }
        });
    } else {
        $.each(name, (key, val) => {
            $(name).parent('.default').css("display", "");
        })
    }
 })  
});


var myJson = new XMLHttpRequest();
    myJson.open('GET', 'icons.json');
    myJson.onreadystatechange=function(){
        if (myJson.status === 200 && myJson.readyState === 4) {
             var db = JSON.parse(myJson.responseText);
             var icons = db.icons
             
             db.push({A:"dddd", A:"dddd", A:"dddd", A:"dddd", })
                console.log(icons);
        } 
    };
    myJson.send(null);