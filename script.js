window.onscroll = function() {fixedNavbar()};

var navbar = document.getElementById("nav-bar");
console.log(navbar)

var sticky = navbar.offsetTop;

function fixedNavbar()
{
    if ( window.pageXOffset >= sticky)
    {
        navbar.classList.add("sticky")
    }
    else
    {
        navbar.classList.remove("sticky")
    }
}