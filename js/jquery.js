var main = function() {
    var wrapper = $(".wrapper");
    var opened = $(".current");
    var closed = $(".wrapper").not(".current");
    var toggleTitle = function() {
            $("header").toggleClass("activate");
            $("hungry").toggleClass("activate");
            $("main").toggleClass("activate");
        };
    var openClose = function() {
            $(".wrapper").not(this).removeClass("current");
            $(".wrapper").not(this).toggleClass("hidden");
            $(this).removeClass("hidden");
            $(this).removeClass("hover");
            $(this).toggleClass("current");
        };
//    var close = function() {
//            $(".wrapper").not(this).removeClass("hidden");
//            $(this).removeClass("current");
//        };
    $(wrapper).click(toggleTitle);
    $(wrapper).click(openClose);
//    $(closed).click(open);
    
    var next = function() {
        var currentSlide = $(".current");
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0) {
            nextSlide = $(".wrapper").first();
        };
        currentSlide.removeClass("current");
        $(wrapper).not(currentSlide).removeClass("hidden");
        nextSlide.addClass("current");
        $(wrapper).not(nextSlide).addClass("hidden");
    };
    $("#next").click(next);
};
                       

$(document).ready(main);