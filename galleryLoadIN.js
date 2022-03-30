$(document).ready(function (){

    // for(let i = 2; i < 3; i ++){
    //     $(".GALLERY__content-wrapper").append("<div class=\"GALLERY__content-item\"><img src=\"images/Gallery/2.JPG\" alt=\"sdfdsf\"></div>")
    // }
    let i = 2;
    while (i < 22) { // выводит 0, затем 1, затем 2
        // alert( i );
        $(".GALLERY__content-wrapper").append("<div class=\"GALLERY__content-item\"><img src=\"images/Gallery/"+i+".JPG\" alt=\"sdfdsf\"></div>")
        i++;
    }
    // $(".GALLERY__content-wrapper").append("<div class=\"GALLERY__content-item\"><img src=\"images/Gallery/2.JPG\" alt=\"sdfdsf\"></div>")
})