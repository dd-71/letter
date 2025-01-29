function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".hearts").appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
