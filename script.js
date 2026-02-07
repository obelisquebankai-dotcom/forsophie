document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {
    oso: [
      { tipo: "video", src: "media/videos//* ===== MEDIA ===== */
const fondoVideo = "media/fondo.mp4";
const audioFondo = "media/audio.mp3";

const popupVideos = [
  "media/popup1.mp4",
  "media/popup2.mp4"
];

/* ===== ELEMENTOS ===== */
const selector = document.getElementById("selector");
const main = document.getElementById("main");
const selectBtn = document.getElementById("selectBtn");
const openBtn = document.getElementById("openBtn");

const bgVideo = document.getElementById("bgVideo");
const bgAudio = document.getElementById("bgAudio");
const bgWrap = document.getElementById("videoBackground");
const popupZone = document.getElementById("popupZone");

let mediaUnlocked = false;
let zIndex = 10;

/* 🔓 PRIMER CLICK — desbloquea media (REGLA iOS/Android) */
selectBtn.addEventListener("click", () => {

  if (!mediaUnlocked) {

    // VIDEO FONDO
    bgVideo.src = fondoVideo;
    bgVideo.muted = true;
    bgVideo.play().catch(() => {});

    // AUDIO
    bgAudio.src = audioFondo;
    bgAudio.muted = true;
    bgAudio.play().catch(() => {});

    mediaUnlocked = true;
  }

  selector.style.display = "none";
  main.style.display = "flex";
});

/* 🎲 POPUPS + ACTIVAR SONIDO */
openBtn.addEventListener("click", () => {

  // FONDO
  bgWrap.style.opacity = "1";
  bgVideo.muted = false;
  bgVideo.volume = 1;
  bgVideo.play();

  // AUDIO
  bgAudio.muted = false;
  bgAudio.volume = 1;
  bgAudio.play();

  // POPUP
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.zIndex = ++zIndex;

  popup.style.left = Math.random() * (innerWidth - 340) + "px";
  popup.style.top = Math.random() * (innerHeight - 360) + "px";

  const video = document.createElement("video");
  video.src = popupVideos[Math.floor(Math.random() * popupVideos.length)];
  video.autoplay = true;
  video.loop = true;sw
  video.muted = false;
  video.playsInline = true;
  video.volume = 1;

  video.play().catch(err => {
    console.warn("Autoplay bloqueado:", err);
  });

  popup.appendChild(video);
  popupZone.appendChild(popup);
});
mp4" },
      { tipo: "video", src: "media/videos/oso2.mp4" },
      { tipo: "video", src: "media/videos/oso3.mp4" },
      { tipo: "video", src: "media/videos/oso4.mp4" },
      { tipo: "video", src: "media/videos/oso5.mp4" },
      { tipo: "video", src: "media/videos/oso6.mp4" },
      { tipo: "video", src: "media/videos/oso7.mp4" },
      { tipo: "video", src: "media/videos/oso8.mp4" },
      { tipo: "video", src: "media/videos/oso9.mp4" },      
      { tipo: "video", src: "media/videos/oso10.mp4" },
      { tipo: "video", src: "media/videos/oso11.mp4" },
      { tipo: "video", src: "media/videos/oso12.mp4" },
      { tipo: "video", src: "media/videos/oso13.mp4" },
      { tipo: "video", src: "media/videos/oso15.mp4" },
      { tipo: "video", src: "media/videos/oso16.mp4" },
      { tipo: "video", src: "media/videos/oso17.mp4" },
      { tipo: "video", src: "media/videos/oso18.mp4" },
      { tipo: "video", src: "media/videos/oso19.mp4" }


    ]
  };

  /* ===== ESTADO ===== */
  let categoriaActual = null;
  let primeraVez = true;
  let zIndex = 10;

  /* ===== ELEMENTOS ===== */
  const selector = document.getElementById("selector");
  const main = document.getElementById("main");
  const btn = document.getElementById("openBtn");
  const popupZone = document.getElementById("popupZone");
  const bgVideo = document.getElementById("bgVideo");
  const bgWrap = document.getElementById("videoBackground");
  const bgAudio = document.getElementById("bgAudio");

  /* ===== SELECCIÓN ===== */
document.querySelectorAll(".selector-btn").forEach(b => {
  b.addEventListener("click", () => {

    categoriaActual = b.dataset.cat;

    /* 🔓 DESBLOQUEO GLOBAL DE MEDIA (MÓVIL) */
    bgVideo.src = "media/videos/fondo.mp4"; // LOCAL
    bgVideo.muted = true;
    bgVideo.play().catch(()=>{});

    bgAudio.src = "media/audio/fondo.mp3";
    bgAudio.muted = true;
    bgAudio.play().catch(()=>{});

    /* UI */
    selector.style.display = "none";
    main.style.display = "flex";
  });
});

  /* ===== POPUPS ===== */
  btn.addEventListener("click", () => {

    if (!categoriaActual || !libreria[categoriaActual]) return;

if (primeraVez) {

  // 🎬 fondo visible + sonido
  bgWrap.style.opacity = "1";
  bgVideo.muted = false;
  bgVideo.volume = 1;
  bgVideo.play();

  // 🔊 audio fondo
  bgAudio.muted = false;
  bgAudio.volume = 1;
  bgAudio.play();

  primeraVez = false;
}



    const lista = libreria[categoriaActual];
    const elegido = lista[Math.floor(Math.random() * lista.length)];

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.zIndex = ++zIndex;

    let x, y, r;
    do {
      r = btn.getBoundingClientRect();
      x = Math.random() * (innerWidth - 360);
      y = Math.random() * (innerHeight - 420);
    } while (
      x < r.right &&
      x + 340 > r.left &&
      y < r.bottom &&
      y + 380 > r.top
    );

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.innerHTML = `<span class="close">&times;</span>`;

    const video = document.createElement("video");
video.src = elegido.src;
video.autoplay = true;
video.loop = true;
video.muted = false;
video.playsInline = true;
video.preload = "auto";
video.volume = 1;

video.play().catch(err => {
  console.warn("Mobile bloqueó este popup:", err);
});

popup.appendChild(video);

  });

});


