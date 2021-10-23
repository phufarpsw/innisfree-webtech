window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0.5;
        if (revealtop < windowheight - revealpoint) {
            console.log("Hello");
            // $(reveals[i]).fadeIn(300);
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');

        }
    }
}
