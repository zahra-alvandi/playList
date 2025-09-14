const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playBtn = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");

playBtns.forEach(function (playBtn) {
    playBtn.addEventListener("click", function () {
        const mainMusicSrc = event.target.dataset.src;
        music.setAttribute("src", mainMusicSrc);
        music.play();

        if (playIcon.className.includes("fa-play")) {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
        }

        playBtns.forEach(function (playBtn) {
            const playOrPauseIcon = playBtn.querySelector("i");
            playOrPauseIcon.classList.remove("fa-pause")
            playOrPauseIcon.classList.add("fa-pause");
        })
        const playOrPauseIcon = playBtn.querySelector("i");
        playOrPauseIcon.classList.remove("fa-play");
        playOrPauseIcon.classList.add("fa-pause");
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

    const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
    musicPauseIcon.classList.remove("fa-pause");
    musicPauseIcon.classList.add("fa-play");
})

volumeCard.addEventListener("click", function (event) {
    music.volume = event.offsetX / 100;
    volume.style.width = `${event.offsetX}px`;
})