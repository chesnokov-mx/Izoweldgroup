var LANGUAGE = false;
$.redrawLanguage = function (lang) {

    $.ajax({
        url : 'languages/' + lang + '.json',
        dataType : 'json',
        method: 'GET',
        success : function (response) {
            LANGUAGE = response;
            $('body').find("[lng]").each(function () {
                var lng = LANGUAGE[ $(this).attr('lng') ];
                var tag = $(this)[0].tagName.toLowerCase();

                switch (tag) {
                    case "input":
                        $(this).attr("placeholder", lng);
                        // $(this).placeholder(lng);
                        break;
                    case "textarea":
                        $(this).attr("placeholder", lng);
                        break;
                    default:
                        $(this).html(lng);
                        break;
                }
            });


        }
    });
}

$.getLanguage = function (key) {
    if (typeof(LANGUAGE[key]) != 'undefined') {
        return LANGUAGE[key];
    }
    return key;
}


$('body').on('click', '#cz', function(e){

    e.preventDefault();
    localStorage.setItem('lng', "cz");
    var
        $this = $(this);

    $.redrawLanguage('cz');

});

$('body').on('click', "#en", function(e){
    e.preventDefault();
    localStorage.setItem('lng', "en");

    var
        $this = $(this);

    $.redrawLanguage('eng');


});
$('body').on('click', "#de", function(e){
    e.preventDefault();
    localStorage.setItem('lng', "de");
    var
        $this = $(this);

    $.redrawLanguage('de');


});
$(document).ready(function (){
    if (localStorage.getItem("lng") === "de"){
        $.redrawLanguage('de');
    }else if (localStorage.getItem("lng") === "cz"){
        $.redrawLanguage('cz');
    } else if(localStorage.getItem("lng") === "en"){
        $.redrawLanguage('en');
    }
})