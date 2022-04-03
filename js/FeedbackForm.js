$(function (){
    $(".RootFeedBackForm").append("" +
        "<section class=\"InviteToSendRequest\">\n" +
        "        <div class=\"InviteToSendRequest-divGrid\">\n" +
        "            <div class=\"InviteToSendRequest-divGrid-left\">\n" +
        "                <p>\n" +
        "                If you are interested in a price list for welding work, please contact us by phone or via the feedback form and indicate what work needs to be done. Our manager will inform you the most up-to-date information on the cost and timing of the order.\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"InviteToSendRequest-divGrid-right\">\n" +
        "                <button class=\"FeedBackForm-OpenBTN\">\n" +
        "                    <span>Send request</span>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </section>\n" +
        "    <section class=\"FeedBackForm\">\n" +
        "        <div class=\"FeedBackForm-wrapper\">\n" +
        "            <h1>SEND A REQUEST FOR A PROJECT</h1>\n" +
        "            <form>\n" +
        "                <input class=\"FeedBackForm-input\" name=\"ip\" placeholder=\"YOUR NAME\">\n" +
        "                <input class=\"FeedBackForm-input\"name=\"ip\" placeholder=\"YOUR E-MAIL\">\n" +
        "                <input class=\"FeedBackForm-input\" name=\"ip\" placeholder=\"YOUR PHONE NUMBER\">\n" +
        "                <textarea class=\"FeedBackForm-input message\" name=\"ip\" placeholder=\"MESSAGE\"></textarea>\n" +
        "                <button class=\"FeedBackForm-btn\">Send Request</button>\n" +
        "            </form>\n" +
        "            <button class=\"FeedBackForm-closeBTN\">close</button>\n" +
        "        </div>\n" +
        "        <button class=\"underX\">X</button>\n" +
        "    </section>")
})


$(document).ready(function (){
    $(".FeedBackForm-closeBTN, .underX").click(function (){
        $(".FeedBackForm").css("transform", "translateX(-1000px)")
    })
    $(".FeedBackForm-OpenBTN").click(function (){
        $(".FeedBackForm").css("transform", "translateX(0px)")
    })
})