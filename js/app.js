
// const musicsContainer = document.querySelector(".musics-contianer")

// const musics = [
//     { id: 1, title: "پژواک‌های نیمه‌شب ", cover: "./src/public/images/1.jpg", src: "./src/public/audios/1.mp3", singer: "لونا اسکای" },
//     { id: 2, title: "امواج فردا", cover: "./src/public/images/2.jpg", src: "./src/public/audios/2.mp3", singer: "افق نقره ای" },
//     { id: 3, title: "خاکسترهای فروزان", cover: "./src/public/images/3.jpg", src: "./src/public/audios/3.mp3", singer: "دره اسکارلت" },
//     { id: 4, title: "رویاهای نئونی", cover: "./src/public/images/4.jpg", src: "./src/public/audios/4.mp3", singer: "سایه الکتریکی" },
//     { id: 5, title: "زمزمه های باد", cover: "./src/public/images/5.png", src: "./src/public/audios/5.mp3", singer: "اورلیا نایت" },
//     { id: 6, title: "تعقیب غروب", cover: "./src/public/images/6.jpg", src: "./src/public/audios/6.mp3", singer: "خیال طلایی" },
// ]

// function showMusics() {
//     musics.forEach(function (musicObj) {
//         musicsContainer.insertAdjacentHTML(
//             "beforeend",
//             `<article class="music-card">
//                 <header>
//                     <img src="${musicObj.cover}" alt="کاور موزیک" />
//                     <div class="play-music">
//                         <button class="play-btn" data-src="${musicObj.src}">
//                             <i class="fa fa-play"></i>
//                         </button>
//                     </div>
//                 </header>
//                 <main>
//                     <p>${musicObj.title}</p>
//                 </main>
//             </article>`
//         )
//     })

//     const playBtns = document.querySelectorAll(".play-btn");
//     const music = document.querySelector("audio");
//     const playIcon = document.querySelector(".play-icon");
//     const playBtn = document.querySelector(".play-button");
//     const volumeCard = document.querySelector(".volume-card");
//     const volume = document.querySelector(".volume");

//     playBtns.forEach(function (playBtn) {
//         playBtn.addEventListener("click", function () {
//             const mainMusicSrc = event.target.dataset.src;
//             music.setAttribute("src", mainMusicSrc);
//             music.play();

//             if (playIcon.className.includes("fa-play")) {
//                 playIcon.classList.remove("fa-play");
//                 playIcon.classList.add("fa-pause");
//             }

//             playBtns.forEach(function (playBtn) {
//                 const playOrPauseIcon = playBtn.querySelector("i");
//                 playOrPauseIcon.classList.remove("fa-pause")
//                 playOrPauseIcon.classList.add("fa-pause");
//             })
//             const playOrPauseIcon = playBtn.querySelector("i");
//             playOrPauseIcon.classList.remove("fa-play");
//             playOrPauseIcon.classList.add("fa-pause");
//         })
//     })

//     playBtn.addEventListener("click", function () {
//         if (playIcon.className.includes("fa-play")) {
//             music.play();
//             playIcon.classList.remove("fa-play");
//             playIcon.classList.add("fa-pause");
//         } else {
//             music.pause();
//             playIcon.classList.add("fa-play");
//             playIcon.classList.remove("fa-pause");
//         }

//         const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
//         musicPauseIcon.classList.remove("fa-pause");
//         musicPauseIcon.classList.add("fa-play");
//     })

//     volumeCard.addEventListener("click", function (event) {
//         music.volume = event.offsetX / 100;
//         volume.style.width = `${event.offsetX}px`;
//     })

// }

const musics = [
    {
        id: 1,
        title: "داره میشه هوا سرد - هومان",
        src: "./src/public/audios/Dare Mishe Hava Sard (320).mp3",
        cover: "./src/public/images/1.jpg",
    },
    {
        id: 2,
        title: "امواج فردا - افق نقره‌ای",
        src: "./src/public/audios/2.mp3",
        cover: "./src/public/images/2.jpg",
    },
    {
        id: 3,
        title: "خاکسترهای فروزان - دره اسکارلت",
        src: "./src/public/audios/3.mp3",
        cover: "./src/public/images/3.jpg",
    },
    {
        id: 4,
        title: "خاکسترهای فروزان - دره اسکارلت",
        src: "./src/public/audios/4.mp3",
        cover: "./src/public/images/4.jpg",
    },
    {
        id: 5,
        title: "زمزمه‌های باد - اورلیا نایت",
        src: "./src/public/audios/5.mp3",
        cover: "./src/public/images/5.png",
    },
    {
        id: 6,
        title: "تعقیب غروب - خیال طلایی",
        src: "./src/public/audios/6.mp3",
        cover: "./src/public/images/6.jpg",
    },
];

function showMusics() {
    const musicsContainer = document.querySelector(".musics-container");

    musics.forEach(function (musicObj) {
        musicsContainer.insertAdjacentHTML(
            "beforeend",
            `
      <article class="music-card">
        <header>
          <img src="${musicObj.cover}" alt="کاور موزیک" />
          <div class="play-music">
            <button class="play-music-btn play-btn" data-src="${musicObj.src}">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </header>
        <main>
          <p>${musicObj.title}</p>
        </main>
        <footer>
          <button class="bookmark">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </footer>
      </article>
      `
        );
    });

    const playBtns = document.querySelectorAll(".play-btn");
    const music = document.querySelector("audio");
    const playIcon = document.querySelector(".play-icon");
    const playButton = document.querySelector(".play-button");
    const volumeCard = document.querySelector(".volume-card");
    const volume = document.querySelector(".volume");

    playBtns.forEach(function (playBtn) {
        playBtn.addEventListener("click", function (event) {
            const mainMusicSrc = event.target.dataset.src;
            music.setAttribute("src", mainMusicSrc);
            music.play();

            if (playIcon.className.includes("fa-play")) {
                playIcon.classList.remove("fa-play");
                playIcon.classList.add("fa-pause");
            }

            playBtns.forEach(function (playBtn) {
                const playOrPauseIcon = playBtn.querySelector("i");
                playOrPauseIcon.classList.remove("fa-pause");
                playOrPauseIcon.classList.add("fa-play");
            });

            const playOrPauseIcon = playBtn.querySelector("i");
            playOrPauseIcon.classList.remove("fa-play");
            playOrPauseIcon.classList.add("fa-pause");
        });
    });

    playButton.addEventListener("click", function () {
        if (playIcon.className.includes("fa-play")) {
            music.play();
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
        } else {
            music.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
        }

        const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
        if (musicPauseIcon) {
            musicPauseIcon.classList.remove("fa-pause");
            musicPauseIcon.classList.add("fa-play");
        }
    });

    volumeCard.addEventListener("click", function (event) {
        music.volume = event.offsetX / 100;
        volume.style.width = `${event.offsetX}px`;
    });
}
