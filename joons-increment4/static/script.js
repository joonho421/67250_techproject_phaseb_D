var x = 5;
var y = 7;

var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

console.log(C);





function sumPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumPrint(x, y);
sumPrint(A, B);







if (C.length > z) {
    console.log(C);
}
else if (C.length < z) {
    console.log(z);
}
else {
    console.log("good job!");
}




var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);





function findTheBanana2(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBanana2(L1);
findTheBanana2(L2);




var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night! Welcome to the MonoMuse Museum";
        }
        else if (x < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
        }
        else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
        }
        else {
            greetingElement.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
        }
    }
}

greeting(hour); 





function addYear() {
    var yearElement = document.getElementById("copyYear");

    if (yearElement) {
        var currentYear = new Date().getFullYear();
        yearElement.innerHTML = "© " + currentYear + " MonoMuse. All rights reserved";
    }
}


/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();





$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});





function showPurchaseForm(date) {
    const form = document.getElementById("purchaseForm");
    const dateInput = document.getElementById("selectedDate");

    if (form) {
        form.style.display = "block";
    }

    if (dateInput) {
        dateInput.value = date;
    }
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}