document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {
    oso: [
      { tipo: "video", src: "media/videos/oso1.mp4" },
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

    bgAudio.src = "media/audio/audio.mp3";
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
        bgWrap.style.opacity = "1";
        bgVideo.muted = false;
        bgAudio.muted = false;
        // En móviles, play() debe llamarse inmediatamente en el click
        bgVideo.play().catch(e => console.log("Error video:", e));
        bgAudio.play().catch(e => console.log("Error audio:", e));
        primeraVez = false;
    }

    const lista = libreria[categoriaActual];
    const elegido = lista[Math.floor(Math.random() * lista.length)];

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.zIndex = ++zIndex;

    // --- CÁLCULO DE POSICIÓN RESPONSIVO ---
    const popupWidth = window.innerWidth > 500 ? 350 : window.innerWidth * 0.8;
    const popupHeight = window.innerWidth > 500 ? 500 : window.innerHeight * 0.6;

    let x = Math.random() * (window.innerWidth - popupWidth);
    let y = Math.random() * (window.innerHeight - popupHeight);

    // Evitar que aparezca fuera de los bordes
    x = Math.max(10, Math.min(x, window.innerWidth - popupWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - popupHeight - 10));

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.innerHTML = `<span class="close">&times;</span>`;

    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // Los popups suelen requerir estar muteados para autoplay infinito
    video.playsInline = true; // OBLIGATORIO PARA IOS
    video.setAttribute("webkit-playsinline", "true"); // Extra para versiones viejas de Safari

    video.src = elegido.src; 
    
    popup.appendChild(video);

    popup.querySelector(".close").onclick = e => {
        e.stopPropagation();
        popup.remove();
    };

    popupZone.appendChild(popup);
});

});


