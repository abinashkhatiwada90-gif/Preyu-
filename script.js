const message =
"Before you continue... I just want to say that meeting you has made my days brighter. Every smile, every chat, every moment with you is special to me. ❤️";

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

setTimeout(typeWriter, 2500);

document.getElementById("startBtn").onclick = function () {
    document.getElementById("hero").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

document.getElementById("yesBtn").onclick = function () {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("celebration").classList.remove("hidden");

    for (let j = 0; j < 120; j++) {
        createHeart();
    }
};

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🌸";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 400);
