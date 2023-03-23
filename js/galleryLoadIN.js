$(document).ready(function (){
    let j = 1;
    while (j < 11) {
        $(".GALLERY__content-wrapper").append("" +
            "<div class=\"GALLERY__content-item\">" +
            "<img class=\"minimized\" src=\"../images/Gallery/tpallets/"+j+".JPG\" alt=\"sdfdsf\">" +
            "</div>")
        j++;
    }

    $("#glrBTN1").click(function (){

        $("#glrBTN1").addClass("activeBTN")
        $("#glrBTN2").removeClass("activeBTN")
        // $("#glrBTN3").removeClass("activeBTN")
        // $("#glrBTN4").removeClass("activeBTN")
        // $("#glrBTN5").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 11) {
                    $(".GALLERY__content-wrapper").append("" +
                        "<div class=\"GALLERY__content-item\">" +
                        "<img class=\"minimized\" src=\"../images/Gallery/tpallets/"+i+".JPG\" alt=\"sdfdsf\">" +
                        "</div>")
                    i++;
        }
    })
    $("#glrBTN2").click(function (){
        $("#glrBTN2").addClass("activeBTN")
        $("#glrBTN1").removeClass("activeBTN")
        $("#glrBTN3").removeClass("activeBTN")
        $("#glrBTN4").removeClass("activeBTN")
        $("#glrBTN5").removeClass("activeBTN")
        $(".GALLERY__content-wrapper").empty()
        let i = 1;
        while (i < 8) {
            $(".GALLERY__content-wrapper").append("" +
                "<div class=\"GALLERY__content-item\">" +
                "<img class=\"minimized\" src=\"../images/Gallery/foodIndustry/"+i+".JPG\" alt=\"sdfdsf\">" +
                "</div>")
            i++;
        }
    })
    // $("#glrBTN3").click(function (){
    //     $("#glrBTN3").addClass("activeBTN")
    //     $("#glrBTN2").removeClass("activeBTN")
    //     $("#glrBTN1").removeClass("activeBTN")
    //     $("#glrBTN4").removeClass("activeBTN")
    //     $("#glrBTN5").removeClass("activeBTN")
    //     $(".GALLERY__content-wrapper").empty()
    //     let i = 1;
    //     while (i < 12) {
    //         $(".GALLERY__content-wrapper").append("" +
    //             "<div class=\"GALLERY__content-item\">" +
    //             "<img class=\"minimized\" src=\"../images/Gallery/Biogas/"+i+".JPG\" alt=\"sdfdsf\">" +
    //             "</div>")
    //         i++;
    //     }
    // })
    // $("#glrBTN4").click(function (){
    //     $("#glrBTN4").addClass("activeBTN")
    //     $("#glrBTN3").removeClass("activeBTN")
    //     $("#glrBTN2").removeClass("activeBTN")
    //     $("#glrBTN1").removeClass("activeBTN")
    //     $("#glrBTN5").removeClass("activeBTN")
    //     $(".GALLERY__content-wrapper").empty()
    //     let i = 1;
    //     while (i < 9) {
    //         $(".GALLERY__content-wrapper").append("" +
    //             "<div class=\"GALLERY__content-item\">" +
    //             "<img class=\"minimized\" src=\"../images/Gallery/Workshop/"+i+".jpeg\" alt=\"sdfdsf\">" +
    //             "</div>")
    //         i++;
    //     }
    // })
    // $("#glrBTN5").click(function (){
    //     $("#glrBTN5").addClass("activeBTN")
    //     $("#glrBTN3").removeClass("activeBTN")
    //     $("#glrBTN4").removeClass("activeBTN")
    //     $("#glrBTN2").removeClass("activeBTN")
    //     $("#glrBTN1").removeClass("activeBTN")
    //     $(".GALLERY__content-wrapper").empty()
    //     let i = 1;
    //     while (i < 8) {
    //         $(".GALLERY__content-wrapper").append("" +
    //             "<div class=\"GALLERY__content-item\">" +
    //             "<img class=\"minimized\" src=\"../images/Gallery/tpallets/"+i+".JPG\" alt=\"sdfdsf\">" +
    //             "</div>")
    //         i++;
    //     }
    // })






    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }


    $(function() {
        $(".GALLERY__content-wrapper").on('click', ".minimized", function (event) {

            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');

            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function (event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function () {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });



    function sizes() {
        let contentWidth = [...document.body.children].reduce(
            (a, el) => Math.max(a, el.getBoundingClientRect().right), 0)
            - document.body.getBoundingClientRect().x;

        return {
            windowWidth:  document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
            pageWidth:    Math.min(document.body.scrollWidth, contentWidth),
            pageHeight:   document.body.scrollHeight,
            screenWidth:  window.screen.width,
            screenHeight: window.screen.height,
            pageX:        document.body.getBoundingClientRect().x,
            pageY:        document.body.getBoundingClientRect().y,
            screenX:     -window.screenX,
            screenY:     -window.screenY - (window.outerHeight-window.innerHeight),
        }
    }



// TEST

    function show() {
        console.log(sizes());
    }
})
