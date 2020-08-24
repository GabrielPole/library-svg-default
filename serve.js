var myData = {};
var datosTeste = {"id": 1, "ad": 1, "ed": 1, "ud": 1,};

refreshFromServer()
function refreshFromServer() {
<<<<<<< HEAD
    var svgJson = new XMLHttpRequest();

    svgJson.open('GET', 'svg.php', false);
    svgJson.send(null);

    var domparser = new DOMParser()
    var doc = domparser.parseFromString(svgJson.responseText, "text/html")

    var symbols = $(doc).find(".icon");
    var icon = $('#default');
   


    var contador = 0 ;
    $.each(symbols, function (key, val) {
        var cln = $(icon).clone().prop("id", val.id);
        $(cln).removeClass('d-none');
        $(cln).removeClass('default');
        $(cln).addClass('code-svg');
        $(cln).addClass('svg-'+contador);


        $(cln).find('use').attr("href", `icon-library.svg#${val.id}`);
        $(cln).find('.icon-name').text(val.id);
        $(cln).appendTo($(icon).parent());
        contador++
    });
    
    $(document).ready(document).on('click', '.code-svg', function () {
        console.log($(`#${this.id}`).index()-1);
        var position = $(`#${this.id}`).index()-1;
        var selectIndex = symbols[position]
        var symbolCode = $(selectIndex).prop("outerHTML");
        $(itm).find('.modal-body').val('');

=======
    
    var svgJson = new XMLHttpRequest();
    svgJson.open('GET', 'svg.php', false);
    svgJson.send(null);
    var domparser = new DOMParser()
    var doc = domparser.parseFromString(svgJson.responseText, "text/html")

    var testeId = $(doc).find("#icon-joins").attr("#icon-joins", "11111");
    console.log(doc);


    var icon = $('#default');
    $.each(myData.icons, function (key, val) {
        console.log($(doc).find(`#icon-${val.id}`).attr("viewBox"));
        var cln = $(icon).clone().prop("id", val.id);
        $(cln).removeClass('d-none');
        $(cln).find('use').attr("href", `icon-library.svg#icon-${val.id}`);
        $(cln).find('.icon-name').val(val.id);
        $(cln).appendTo($(icon).parent());
>>>>>>> ebdb5aa3bb8c26cbc3dd57e792669b9ba91e4c86
    });
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

// function updateToServer() {
//     var myJson = new XMLHttpRequest();
//     myJson.open('POST', 'data.php', false);
//     myJson.send(JSON.stringify(window.myData));
// };
