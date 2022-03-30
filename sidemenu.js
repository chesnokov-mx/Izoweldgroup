$(document).ready(function (){

    $(".hamburger").hover(function (){
        $(".hamburger").css("border","1px solid #0F80E9")
        $(".hamburger span").css("background-color","#0F80E9")
        $(".MenuText").css("color", "#0F80E9")
    },function (){
        $(".hamburger").css("border","1px solid #7c7c7c")
        $(".hamburger span").css("background-color","white")
        $(".MenuText").css("color", "white")
    })

    $(".hamburger").click(function (){
        if($(".SideMenu").css("width") === "100px") {
            $(".MenuText").animate({
                opacity: 0
            }, 500,function (){
                $(".MenuText").css("display", "none")
            })

            $(".SideMenu").animate({
                width: "420px"
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
        if($(".SideMenu").css("width") === "420px"){
            $(".navWrapper, .Language").animate({
                opacity: 0
            }, 250, function (){
                $(".SideMenu").animate({
                    width: "100px"
                }, 600, function (){
                    $(".MenuText").css("display", "block")
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
    })
})


