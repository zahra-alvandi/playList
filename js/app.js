const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playBtn = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");

const musics = [
    { id: 1, title: "پژواک‌های نیمه‌شب ", cover: "./src/public/images/1.jpg", src: "./src/public/audios/1.mp3", singer: "لونا اسکای" },
    { id: 2, title: "امواج فردا", cover: "./src/public/images/2.jpg", src: "./src/public/audios/2.mp3", singer: "افق نقره ای" },
    { id: 3, title: "خاکسترهای فروزان", cover: "./src/public/images/3.jpg", src: "./src/public/audios/3.mp3", singer: "دره اسکارلت" },
    { id: 4, title: "رویاهای نئونی", cover: "./src/public/images/4.jpg", src: "./src/public/audios/4.mp3", singer: "سایه الکتریکی" },
    { id: 5, title: "زمزمه های باد", cover: "./src/public/images/5.png", src: "./src/public/audios/5.mp3", singer: "اورلیا نایت" },
    { id: 6, title: "تعقیب غروب", cover: "./src/public/images/6.jpg", src: "./src/public/audios/6.mp3", singer: "خیال طلایی" },
]

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