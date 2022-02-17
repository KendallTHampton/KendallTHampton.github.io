
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

if (navToggle)
{
    navToggle.addEventListener('click', () =>
    {
        navMenu.classList.add('show__menu')

    })
}

if (navClose)
{
    navClose.addEventListener("click", () =>
    {

        navMenu.classList.remove("show__menu")


    })
}


// When CLicked the Menu Closes

const navLink = document.querySelectorAll(".nav__link")

function link()
{
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove("show__menu")
}

navLink.forEach(n => n.addEventListener("click", link))




// SCROLL HEADER

function scrollHeader()
{
    const header = document.getElementById("header")
    // When the scroll is greater than 50 View Height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll__header');
    else header.classList.remove('scroll__header')

}

window.addEventListener('scroll', scrollHeader)



