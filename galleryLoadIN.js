$(document).ready(function (){
    let j = 1;
    while (j < 6) {
        $(".GALLERY__content-wrapper").append("<div class=\"GALLERY__content-item\"><img class=\"minimized\"src=\"../images/Gallery/Board/"+j+".JPG\" alt=\"sdfdsf\"></div>")
        j++;
    }

    $("#glrBTN1").click(function (){

        $("#glrBTN1").addClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 6) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                    "<img class=\"minimized\" src=\"../images/Gallery/Board/"+i+".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })
    $("#glrBTN2").click(function (){
        $("#glrBTN2").addClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 13) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../images/Gallery/foodIndustry/"+i+".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })
    $("#glrBTN3").click(function (){
        $("#glrBTN3").addClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 12) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../images/Gallery/Biogas/"+i+".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })










    $(function() {
        $(".GALLERY__content-wrapper").on('click', ".minimized", function (event) {

            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016

                top: ($(window).height() - $('#magnify').outerHeight()) / 2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function (event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function () {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });
})
