document.addEventListener("DOMContentLoaded", function () {
    addYear();
    setGreeting();
    setActiveNav();
    setupReadMore();
    setupPurchaseForm();
    setupCheckoutForm();
    initMap();
});

function addYear() {
    const yearElement = document.getElementById("copyYear");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} MonoMuse. All rights reserved.`;
    }
}

function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) return;

    const hour = new Date().getHours();

    if (hour < 5 || hour >= 20) {
        greetingElement.textContent = "Good evening! Welcome to the MonoMuse Museum";
    } else if (hour < 12) {
        greetingElement.textContent = "Good morning! Welcome to the MonoMuse Museum";
    } else if (hour < 18) {
        greetingElement.textContent = "Good afternoon! Welcome to the MonoMuse Museum";
    } else {
        greetingElement.textContent = "Good evening! Welcome to the MonoMuse Museum";
    }
}

function setActiveNav() {
    const navLinks = document.querySelectorAll(".nav_bar a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

function setupReadMore() {
    const readMoreBtn = document.getElementById("readMore");
    const readLessBtn = document.getElementById("readLess");
    const longIntro = document.getElementById("longIntro");

    if (!readMoreBtn || !readLessBtn || !longIntro) return;

    readMoreBtn.addEventListener("click", function () {
        longIntro.style.display = "block";
        readMoreBtn.style.display = "none";
        readLessBtn.style.display = "inline-block";
    });

    readLessBtn.addEventListener("click", function () {
        longIntro.style.display = "none";
        readMoreBtn.style.display = "inline-block";
        readLessBtn.style.display = "none";
    });
}

function setupPurchaseForm() {
    const purchaseForm = document.getElementById("purchaseForm");
    if (!purchaseForm) return;

    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const buyerName = document.getElementById("buyerName").value.trim();
        const buyerEmail = document.getElementById("buyerEmail").value.trim();
        const ticketCount = document.getElementById("ticketCount").value.trim();
        const selectedDate = document.getElementById("selectedDate").value.trim();

        if (!buyerName || !buyerEmail || !ticketCount || !selectedDate) {
            alert("Please complete all fields before submitting.");
            return;
        }

        alert(`Thank you, ${buyerName}! Your ticket request for ${selectedDate} has been submitted.`);
        purchaseForm.reset();
        purchaseForm.style.display = "none";
    });
}

function showPurchaseForm(date) {
    const form = document.getElementById("purchaseForm");
    const dateInput = document.getElementById("selectedDate");

    if (form) {
        form.style.display = "block";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (dateInput) {
        dateInput.value = date;
    }
}

function setupCheckoutForm() {
    const checkoutForm = document.querySelector("main form");
    const quantityInput = document.getElementById("quantity");

    if (!checkoutForm || !quantityInput) return;

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const quantity = quantityInput.value.trim();

        if (!name || !email || !quantity) {
            alert("Please fill out all required fields.");
            return;
        }

        alert(`Thank you, ${name}! Your checkout for ${quantity} ticket(s) has been received.`);
        checkoutForm.reset();
    });
}

function toggleNav() {
    const nav = document.getElementById("myNav");
    if (!nav) return;

    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
}

function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement || typeof L === "undefined") return;

    const museumCoords = [40.4433, -79.9436];

    const map = L.map("map").setView(museumCoords, 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker(museumCoords)
        .addTo(map)
        .bindPopup("<b>MonoMuse Museum</b><br>Visit us in Pittsburgh.")
        .openPopup();

    setTimeout(function () {
        map.invalidateSize();
    }, 200);

    window.addEventListener("resize", function () {
        map.invalidateSize();
    });
}


$(document).ready(function () {
    $("#readMore").click(function () {
        $("#longIntro").slideDown();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function () {
        $("#longIntro").slideUp();
        $("#readLess").hide();
        $("#readMore").show();
    });
});