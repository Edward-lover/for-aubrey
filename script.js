const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const message = document.getElementById("message");

const letter = document.getElementById("letter");
const closeButton = document.getElementById("closeButton");


// ================================
// YES BUTTON 💗
// ================================

yesButton.addEventListener("click", function () {

    letter.classList.add("show");

    createHeartExplosion();

});


// ================================
// CLOSE LETTER
// ================================

closeButton.addEventListener("click", function () {

    letter.classList.remove("show");

});


// Close when clicking outside
letter.addEventListener("click", function (event) {

    if (event.target === letter) {

        letter.classList.remove("show");

    }

});


// ================================
// NO BUTTON 😂
// ================================

const funnyMessages = [
    "Hehehe, nice try! 😂",
    "Catch me if you can! 🏃💨",
    "Nope! 💕",
    "Almost! Try again! 😂",
    "I'm too fast! 😎",
    "The NO button is shy 👉👈",
    "Why are you chasing me?! 😂",
    "Just press YES already! 💗"
];


function moveNoButton() {

    // Get the size of the button
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Space from screen edges
    const padding = 20;

    // Maximum possible position
    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;

    // Random position
    const randomX =
        padding +
        Math.random() * (maxX - padding);

    const randomY =
        padding +
        Math.random() * (maxY - padding);


    // Make it move around the SCREEN
    noButton.style.position = "fixed";

    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";


    // Funny message
    const randomMessage =
        funnyMessages[
            Math.floor(
                Math.random() *
                funnyMessages.length
            )
        ];

    message.textContent =
        randomMessage;
}


// ================================
// PC VERSION 🖥️
// ================================

// When the mouse gets close,
// NO runs away.

document.addEventListener(
    "mousemove",
    function (event) {

        const rect =
            noButton.getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;

        const distanceX =
            event.clientX -
            centerX;

        const distanceY =
            event.clientY -
            centerY;

        const distance =
            Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );


        // 120px danger zone 😂

        if (distance < 120) {

            moveNoButton();

        }

    }
);


// ================================
// PHONE VERSION 📱
// ================================

// When she touches NO,
// it teleports somewhere else.

noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


// Backup if she somehow clicks it
noButton.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


// ================================
// HEART EXPLOSION 💕
// ================================

function createHeartExplosion() {

    const hearts = [
        "💗",
        "💖",
        "💕",
        "💞",
        "💘",
        "🌸"
    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            "100vh";

        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        heart.style.zIndex =
            "300";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 3s ease, opacity 3s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.transform =
                `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 3100);

    }

}
