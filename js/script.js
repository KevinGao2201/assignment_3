function autoHover() {
    var wrapper = document.getElementsByClassName("wrapper"),
        n = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    wrapper[n].classList.add( "hover" );
    setTimeout(function(){wrapper[n].classList.remove("hover")},2000);
}
window.setInterval(autoHover, 2000);

function removeCalen() {
        var calendar = document.getElementById("calendar");
        calendar.classList.add("hidden");
}

window.onload = function() {
    var body = document.querySelector("body"),
        wrapper = document.getElementsByClassName("wrapper"),
        i;
    for ( i = 0; i < wrapper.length; i++)
    wrapper[i].onclick = function open() {
        var header = document.querySelector("header"),
            hungry = document.getElementById("hungry_div"),
            main = document.querySelector("main"),
            nonActiveTile = document.getElementsByClassName("wrapper"),
            activeTile = this;
        header.classList.toggle("activate");
        hungry.classList.toggle("activate");
        main.classList.toggle("activate");
        nonActiveTile.classList.add("hidden");
        nonActiveTile.classList.remove("activate");
        activeTile.classList.remove("hidden");
        activeTile.classList.toggle("activate");
    }
    body.onclick = function close() {
        var header = document.querySelector("header"),
            hungry = document.getElementById("hungry_div"),
            main = document.querySelector("main"),
            nonActiveTile = document.getElementsByClassName("wrapper"),
            activeTile = document.getElementsByClassName("wrapper");
        header.classList.remove("activate");
        hungry.classList.remove("activate");
        main.classList.remove("activate");
        nonActiveTile.classList.remove("hidden");
        nonActiveTile.classList.remove("activate");
        activeTile.classList.remove("hidden");
        activeTile.classList.remove("activate");
    }
}

//window.onload = function() {
//    document.getElementById("no_2").onclick = function fun() {
//        var header = document.querySelector("header"),
//            hungry = document.getElementById("hungry_div"),
//            main = document.querySelector("main"),
//            activeTile = document.getElementById("no_2"),
//            nonActiveTile = document.getElementById("no_1");
////        alert("hello");
//        header.classList.add("activate");
//        hungry.classList.add("activate");
//        main.classList.add("activate");
//        activeTile.classList.add("activate");
//        nonActiveTile.classList.add("hidden");
//    }
//}