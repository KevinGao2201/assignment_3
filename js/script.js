function autoHover() {
    var wrapper = document.getElementsByClassName("wrapper"),
        n = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    wrapper[n].classList.toggle( "hover" );
}
window.setInterval(autoHover, 2000);