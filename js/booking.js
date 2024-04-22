/* This JavaScript controls the booking system. */
/* Author: Yifan Zhu s46703103 TUT01 Flexible */

// Submits each value of the booking form to console.
// Pops up alert indicating a successful submission.

// Sets booking form element from DOM.
const booking_form = document.querySelector("#booking_form");

// Adds event listener to the bookinig form
// in case that user's input does not meet requirement defined in HTML.
booking_form.addEventListener("submit", function(event) {
    // Sets a header for each submission.
    console.log("Booking received:");
    // Sets a loop logging every element within the form.
    var i;
    for (i = 0; i < booking_form.length -1; i++) {
        // 'length -1' is used to remove the last element which is a button.
        let element = booking_form[i];
        console.log(`${element.name}:${element.value}`);
    }
    // Action will not be taken if the event goes against restriction.
    event.preventDefault();
});

// Shows submission alert when submission is received.
function showAlert() {
    alert("Booking successful. A confirm email has been sent to your email.");
}