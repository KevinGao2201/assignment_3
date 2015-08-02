$(document).ready(function() {
    var wrapper = document.getElementsByClassName("wrapper");
    $(wrapper).click(function open() {
        $("header").toggleClass("activate");
        $("hungry").toggleClass("activate");
        $("main").toggleClass("activate");
        $(".wrapper").not(this).removeClass("activate");
        $(".wrapper").not(this).toggleClass("hidden");
        $(this).removeClass("hidden");
        $(this).removeClass("hover");
        $(this).toggleClass("activate");
    });
});
