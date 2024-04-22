/* This JavaScript controlls hover function on icon image. */
/* Author: Yifan Zhu s46703103 TUT01 Flexible */

// When an icon image is hovered, swaps it to its highlight version.
// When the mouse hovers off, swaps back to the original image.

// menu icon
function menuHoverOn(element) {
    element.setAttribute("src", "image&files/icons8-menu-24 tan.png");
}
function menuHoverOff(element) {
    element.setAttribute("src", "image&files/icons8-menu-24 white.png");
}

// instagram icon
function insHoverOn(element) {
    element.setAttribute("src", "image&files/icons8-instagram-32 tan.png");
}
function insHoverOff(element) {
    element.setAttribute("src", "image&files/icons8-instagram-32 white.png");
}