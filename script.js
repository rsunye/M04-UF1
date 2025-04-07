var swiper = new Swiper(".mySwiper", {
    effect: "coverflow" ,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto" ,
    coverflowEffect: {
        rotate:15,
        stretch:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop: true,

});

// Reproducir audio al hacer clic en el botón
document.querySelectorAll('.audio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = btn.querySelector('audio');
        if (audio) {
            audio.play();
        }
    });
});
