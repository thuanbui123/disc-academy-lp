export function MusicPlayer() {
    return `
        <button id="musicBtn" class="music-btn" aria-label="Music">
            <i class="fas fa-music"></i>
        </button>

        <audio id="bgMusic"></audio>
    `;
}

export function initMusicPlayer() {

    const playlist = [
        "/music/song1.mp3",
        "/music/song2.mp3",
        "/music/song3.mp3",
        "/music/song4.mp3",
        "/music/song5.mp3",
        "/music/song6.mp3",
    ];

    const audio = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    let currentSong = 0;

    let isPlaying = localStorage.getItem("music") !== "off";

    audio.src = playlist[currentSong];

    function playMusic() {

        audio.play()
            .then(() => {

                button.classList.add("playing");

                isPlaying = true;

                localStorage.setItem("music", "on");

            })
            .catch(() => {

                console.log("Autoplay bị trình duyệt chặn.");

            });

    }

    function pauseMusic() {

        audio.pause();

        button.classList.remove("playing");

        isPlaying = false;

        localStorage.setItem("music", "off");

    }

    // Phát sau lần click đầu tiên trên website
    function firstInteraction() {

        if (isPlaying) {

            playMusic();

        }

        document.removeEventListener("click", firstInteraction);

    }

    document.addEventListener("click", firstInteraction);

    // Click nút nhạc
    button.addEventListener("click", (e) => {

        e.stopPropagation();

        if (isPlaying) {

            pauseMusic();

        } else {

            playMusic();

        }

    });

    // Hết bài -> sang bài tiếp theo
    audio.addEventListener("ended", () => {

        currentSong++;

        if (currentSong >= playlist.length) {

            currentSong = 0;

        }

        audio.src = playlist[currentSong];

        if (isPlaying) {

            audio.play();

        }

    });

}