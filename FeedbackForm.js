$(document).ready(function (){
    $(".FeedBackForm-closeBTN").click(function (){
        $(".FeedBackForm").css("transform", "translateX(-1000px)")
    })
    $(".FeedBackForm-OpenBTN").click(function (){
        $(".FeedBackForm").css("transform", "translateX(0px)")
    })
    
})