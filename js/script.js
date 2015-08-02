function autoHover() {
    var wrapper = document.getElementsByClassName("wrapper"),
        n = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    wrapper[n].classList.add( "hover" );
    setTimeout(function(){wrapper[n].classList.remove("hover")},2000);
}
hover = window.setInterval(autoHover, 2000);

function removeCalen() {
        var calendar = document.getElementById("calendar");
        calendar.classList.add("hidden");
}