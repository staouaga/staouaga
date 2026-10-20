
function checkEmail() {
    // Get the email addresses
    var email = document.getElementById("email").value.trim();
    var confirm = document.getElementById("confirm").value.trim();

    // Check if the first email is empty
    if (email === "") {
        document.getElementById("email-error").innerHTML =
            "Please fill in this field";
    } else {
        document.getElementById("email-error").innerHTML = "";
    }

    // Check if the confirmation email is empty
    if (confirm === "") {
        document.getElementById("confirm-error").innerHTML =
            "Please fill in this field";
    } else {
        document.getElementById("confirm-error").innerHTML = "";
    }

    // Check if the email addresses match
    if (email !== "" && confirm !== "" && email !== confirm) {
        document.getElementById("email-error").innerHTML =
            "Both emails must be the same";
        document.getElementById("confirm-error").innerHTML =
            "Both emails must be the same";
    } else if (email !== "" && confirm !== "" && email === confirm) {
        document.getElementById("email-error").innerHTML =
            "Emails match!";
        document.getElementById("confirm-error").innerHTML = "";
    }
}

function pizzaOrder() {
    var output = "<h3>Pizza Order:</h3>";

    // Check the pizza size
    if (document.getElementById("small").checked === true) {
        output += "Small ";
    } else if (document.getElementById("medium").checked === true) {
        output += "Medium ";
    } else {
        output += "Large ";
    }

    // Check the selected toppings
    if (document.getElementById("pepperoni").checked === true) {
        output += "Pepperoni ";
    }

    if (document.getElementById("sausage").checked === true) {
        output += "Sausage ";
    }

    if (document.getElementById("mushrooms").checked === true) {
        output += "Mushrooms ";
    }

    // Display the order
    document.getElementById("output").innerHTML =
        output + "</h3>";

    // Display or hide the topping images
    if (document.getElementById("pepperoni").checked === true) {
        document.getElementById("pepperoni-topping").style.display = "block";
    } else {
        document.getElementById("pepperoni-topping").style.display = "none";
    }

    if (document.getElementById("sausage").checked === true) {
        document.getElementById("sausage-topping").style.display = "block";
    } else {
        document.getElementById("sausage-topping").style.display = "none";
    }

    if (document.getElementById("mushrooms").checked === true) {
        document.getElementById("mushrooms-topping").style.display = "block";
    } else {
        document.getElementById("mushrooms-topping").style.display = "none";
    }
}