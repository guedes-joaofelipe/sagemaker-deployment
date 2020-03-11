"use strict";
function submitForm(oFormElement) {
    return true;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var result = parseFloat(xhr.responseText);
        var resultElement = document.getElementById('result');
        if (result == 0) {
            resultElement.className = 'bg-danger';
            resultElement.innerHTML = 'Your review was NEGATIVE!';
        } else {
            resultElement.className = 'bg-success';
            resultElement.innerHTML = 'Your review was POSITIVE!';
        }
    }
    xhr.open (oFormElement.method, oFormElement.action, true);
    var review = document.getElementById('review');
    xhr.send (review.value);
    return false;
}