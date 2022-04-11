function resizing(){
    $(".SideMenu").css("background-color", "black")
    $(".SideMenu").css("width", "100%")
    $(".SideMenu").css("height", "0px")
    $(".MenuText").css("opacity", "0")
    $(".hamburger").css("margin-top", "30px")


    $(".navWrapper, .Language").css("transform", "translateX(0px)");

    $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
    $(".navWrapper, .Language").css("opacity", "1");
}

$(document).ready(function (){
    $(".RootSideMenu").append("<div class=\"SideMenu\">\n" +
        "         <button class=\"hamburger\">\n" +
        "                <span class=\"less_po\"></span>\n" +
        "                <span class=\"main_po\"></span>\n" +
        "                <span class=\"main_poo\"></span>\n" +
        "                <span class=\"less_po_last\"></span>\n" +
        "         </button>\n" +
        "         <p class=\"MenuText\" lng='menu'>\n" +
        "             menu\n" +
        "         </p>\n" +
        "         <nav class=\"NavNav\">\n" +
        "             <div class=\"navWrapper\">\n" +
        "                 <a class=\"navText\" href=\"/\">IZOWELD GROUP</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/AboutUs\" lng='about_us'>ABOUT US</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/Gallery\" lng='gallery'>GALLERY</a>\n" +
        "                 <span></span>\n" +
        "                 <a class=\"navText\" href=\"/Contacts\" lng='contacts'>CONTACTS</a>\n" +
        "             </div>\n" +
        "         </nav>\n" +
        "         <div class=\"Language\">\n" +
        "             <button id='en'>EN</button>\n" +
        "             <button id='cz'>CZ</button>\n" +
        "             <button id='de'>DE</button>\n" +
        "         </div>\n" +
        "     </div>")

    if (window.matchMedia('(max-width: 1200px)').matches){
        resizing()
    }
    $(window).resize(function() {
        if (window.matchMedia('(max-width: 1200px)').matches) {

            $(".SideMenu").css("background-color", "black")
            $(".SideMenu").css("width", "100%")
            $(".SideMenu").css("height", "0px")
            $(".MenuText").css("opacity", "0")
            $(".hamburger").css("margin-top", "30px")


            $(".navWrapper, .Language").css("transform", "translateX(0px)");

            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(-1000px)")
            $(".navWrapper, .Language").css("opacity", "1");

        }
        if (window.matchMedia('(min-width: 1201px)').matches){
            $(".SideMenu").css("width", "90px")
            $(".SideMenu").css("height", "100vh")
            $(".MenuText").css("opacity", "1")
            $(".hamburger").css("margin-top", "50px")

            $(".navWrapper, .Language, .NavNav, .MenuText").css("transform", "translateY(0px)")
            $(".navWrapper, .Language").css("transform", "translateX(-1000px)");
            $(".navWrapper, .Language").css("opacity", "0");

        }
    });



    $(".hamburger").hover(function (){
        $(".hamburger").css("border","1px solid #00e8fe")
        $(".hamburger span").css("background-color","#00e8fe")
        $(".MenuText").css("color", "#00e8fe")
    },function (){
        $(".hamburger").css("border","1px solid #7c7c7c")
        $(".hamburger span").css("background-color","white")
        $(".MenuText").css("color", "white")
    })

    $(".hamburger").click(function (){
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
    })
})


