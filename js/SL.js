var LANGUAGE = false;
function closeSD(){
    if($(".SideMenu").css("width") === "90px" && $(window).width() > 1200) {
        $(".navWrapper").css("transform", "translateX(0px)");
        $(".Language").css("transform", "translateX(0px)");
        $(".MenuText").animate({
            opacity: 0
        }, 500,function (){
            // $(".MenuText").css("display", "none")
        })

        $(".SideMenu").animate({
            width: "300px"
        }, 600, function (){
            $(".navWrapper, .Language").animate({
                opacity: 1
            }, 250)
        })

        $(".main_po").animate({opacity: 0}, 300, function (){
            $(".main_po").css("transform", "rotate(-45deg)")
            $(".main_po").animate({opacity: 1}, 300)
            $(".main_poo").animate({opacity: 1}, 300)
        })
        $(".less_po").animate({opacity: 0},300)
        $(".less_po_last").animate({opacity: 0}, 300)


    }

    if($(".SideMenu").css("height") === "400px" && $(window).width() <= 1200){
        $(".SideMenu").animate({height: 0}, 400)
        $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
    }

    if($(".SideMenu").css("width") === "300px" && $(window).width() > 1200){
        $(".navWrapper, .Language").animate({
            opacity: 0
        }, 250, function (){
            $(".navWrapper").css("transform", "translateX(-1000px)");
            $(".Language").css("transform", "translateX(-1000px)");
            $(".SideMenu").animate({
                width: "90px"
            }, 600, function (){
                // $(".MenuText").css("display", "block")
                $(".MenuText").animate({
                    opacity: 1
                }, 500)
            })
            $(".main_poo").animate({opacity: 0}, 300)
            $(".main_po").animate({opacity: 0}, 300, function (){
                $(".main_po").css("transform", "rotate(0)")
                $(".less_po").animate({opacity: 1}, 300)
                $(".less_po_last").animate({opacity: 1}, 300)
                $(".main_po").animate({opacity: 1}, 300)
            })

        })
    }

    if($(".SideMenu").css("height") === "0px" && $(window).width() <= 1200){
        $(".SideMenu").animate({height: 400}, 400)
        $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(0px)")

    }

}

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
    closeSD();
    localStorage.setItem('lng', "cz");
    var
        $this = $(this);
    $.redrawLanguage('cz');

});

$('body').on('click', "#en", function(e){
    e.preventDefault();
    closeSD();
    localStorage.setItem('lng', "en");

    var
        $this = $(this);

    $.redrawLanguage('eng');


});
$('body').on('click', "#de", function(e){
    e.preventDefault();
    closeSD();
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