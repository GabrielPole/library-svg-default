var doc;
var datosTeste = {};

var iconGet = new XMLHttpRequest();
    iconGet.open('get', 'data.php', false);
    iconGet.send(null);
    myData = JSON.parse(iconGet.responseText);

refreshFromServer();
function refreshFromServer(){

    var svgJson = new XMLHttpRequest();
    svgJson.open('GET', 'svg.php', false);
    svgJson.send(null);

    var domparser = new DOMParser()
    doc = domparser.parseFromString(svgJson.responseText, "text/html")

    var symbols = $(doc).find(".icon");

 
    var i=0;

    console.log(myData.icons[0]);

    $.each(symbols, function (key, val) {

        var viewBoxValue = $(symbols[i]).attr("viewBox")
        var pathValue = $(symbols).html()
        myData.icons[i] = {id: val.id , viewBox:viewBoxValue, path:pathValue }

        i++
    });
    console.log(myData);
    
    $(document).ready().on('click', '.code-svg', function () {
        var position = $(`#${this.id}`).index()-1;
        var selectIndex = symbols[position];
        var symbolCode = $(selectIndex).prop("outerHTML");
        $('.show').text(symbolCode);

    });

        
};

   
updateToServer()
    function updateToServer() {
        var myJson = new XMLHttpRequest();
        myJson.open('POST', 'data.php', false);
        myJson.send(JSON.stringify(window.myData));
    };
    



// function refreshFromServer() {
//     var myJson = new XMLHttpRequest();
//     myJson.open('GET', 'data.php', false);
//     myJson.send(null);
//     myData = JSON.parse(myJson.responseText);
//     iProject = 0;
//     var itm = $('#project-new');
//     $(itm).siblings().remove();
//     $.each(myData.projects, function (key, val) {
//         var cln = $(itm).clone().prop("id", "project-new-" + iProject);
//         $(cln).removeClass('cna-project-new');
//         $(cln).addClass('cna-project-editable');
//         $(cln).find('.cna-project-client-input').val(val.client);
//         $(cln).find('.cna-project-title').val(val.title);
//         $(cln).find('.cna-project-description').val(val.description);
//         $(cln).find('.cna-project-details').wrap('<a href="http://localhost/analysis/panels.html?project='.concat(iProject).concat('"></a>'));
//         $(cln).appendTo($(itm).parent());
//         iProject++;
//     });
// };

