function autoHover() {
    var wrapper = document.getElementsByClassName("wrapper"),
        n = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    wrapper[n].classList.add( "hover" );
    setTimeout(function(){wrapper[n].classList.remove( "hover")},2000);
}
window.setInterval(autoHover, 2000);