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
    var wrapper = document.getElementsByClassName("wrapper");
    for (var i = 0; i < wrapper.length; i++)
        wrapper[i].onclick = function open() {
        var header = document.querySelector("header"),
            hungry = document.getElementById("hungry_div"),
            main = document.querySelector("main"),
            activeTile = this;
//            nonActiveTile = document.getElementById("no_"+i);
        header.classList.toggle("activate");
        hungry.classList.toggle("activate");
        main.classList.toggle("activate");
        activeTile.classList.toggle("activate");
        nonActiveTile.classList.toggle("hidden");
        nonActiveTile.classList.remove("activate");
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