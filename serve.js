var doc;
var datosTeste = {"id": 1, "ad": 1, "ed": 1, "ud": 1,};

refreshFromServer();
function refreshFromServer(){
    var svgJson = new XMLHttpRequest();

    svgJson.open('GET', 'svg.php', false);
    svgJson.send(null);

    var domparser = new DOMParser()
    doc = domparser.parseFromString(svgJson.responseText, "text/html")

    var symbols = $(doc).find(".icon");
    var icon = $('#default');
   


    var contador = 0 ;

    $.each(symbols, function (key, val) {
        var cln = $(icon).clone().prop("id", val.id);
        $(cln).removeClass('d-none');
        $(cln).removeClass('default');
        $(cln).addClass('code-svg');

        $(cln).find('use').attr("href", `icon-library.svg#${val.id}`);
        $(cln).find('.icon-name').text(val.id);
        $(cln).appendTo($(icon).parent());
        contador++
    });
    
    $(document).ready().on('click', '.code-svg', function () {
        var position = $(`#${this.id}`).index()-1;
        var selectIndex = symbols[position];
        var symbolCode = $(selectIndex).prop("outerHTML");
        $('.show').text(symbolCode);

    });


   
    
    $("#add-svg").ready().on('click', '.btn-save-svg', function () {
        console.log($("#add-svg").find("textarea").val());
        
    });
};


    var testeSVG = '<button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>'
    var elementos = $(window.doc).find(".def").append(testeSVG)
    var svgs = $(window.doc).find("body").html()

    console.log(elementos);
    console.log(svgs)
     
    
    
    updateToServer()

      function updateToServer() {
          var docSend = new XMLHttpRequest();
          docSend.open('POST', 'svg.php', false);
          docSend.send(JSON.stringify(svgs));
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

