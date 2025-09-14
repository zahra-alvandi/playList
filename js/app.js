const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playBtn = document.querySelector(".play-button");

playBtns.forEach(function (playBtn) {
    playBtn.addEventListener("click", function () {
        const mainMusicSrc = event.target.dataset.src;
        music.setAttribute("src", mainMusicSrc);
        music.play();

        if (playIcon.className.includes("fa-play")) {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
        }
    })
})

playBtn.addEventListener("click", function () {
    if (playIcon.className.includes("fa-play")) {
        music.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        music.pause();
        playIcon.classList.add("fa-play");
        playIcon.classList.remove("fa-pause");
    }
})