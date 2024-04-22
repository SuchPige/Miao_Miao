/* This JavaScript controls the navigation system. */
/* Author: Yifan Zhu s46703103 TUT01 Flexible */

// When the menu is called out, hides main content of the page.
// When the menu is called off, shows main content of the page.
// When the reference is called out, closes menu and hides the page header.
// When the reference is called off, opens menu and shows the page header.

function menuOpen() {
    // The function is called everytime the navigation system is opened.
    if (document.body.clientWidth > 960) {
        // If resolution width is greater than 960, shows both menu.
        document.getElementById("menu_left").style.width = "50%";
        document.getElementById("menu_right").style.width = "50%";
        // Shows right menu content.
        document.getElementById("menu_image").style.display = "flex";
    }
    else {
        // Otherwise shows only left menu.
        document.getElementById("menu_left").style.width = "100%";
    }
    // Shows left menu content.
    document.getElementById("menu_container").style.display = "flex";
    // Hides main.
    document.getElementById("mian").className = "display_false";
}


function menuClose() {
    // The function is called everytime the navigation system is closed.
    // Hides everything of navigation screen.
    document.getElementById("menu_left").style.width = "0%";
    document.getElementById("menu_right").style.width = "0%";
    document.getElementById("menu_container").style.display = "none";
    document.getElementById("menu_image").style.display = "none";
    // Shows main.
    document.getElementById("mian").className = "display_true";
}


function refOpen() {
    // The function is called everytime the reference is opened.
    // Uses menuClose function to close menu, while keeping main hiding.
    menuClose();
    document.getElementById("mian").className = "display_false";
    // Shows reference.
    document.getElementById("reference").style.height = "100%";
    document.getElementById("reference_container").style.display = "flex";
    document.getElementById("header").style.display = "none";
}

function refClose() {
    // The function is called everytime the reference is closed.
    // Uses menuOpen function to open menu.
    menuOpen();
    // Closes reference.
    document.getElementById("reference").style.height = "0%";
    document.getElementById("reference_container").style.display = "none";
    document.getElementById("header").style.display = "flex";
}