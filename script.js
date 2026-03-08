function createHeart() {
    const heartContainer = document.getElementById('hearts-container');
    if (!heartContainer) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const heartEmojis = ['❤️', '💖', '💘', '💝', '💕'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heartContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeart, 400);

// العداد التصاعدي من يوم 6 مارس
const startDate = new Date("March 6, 2026 00:00:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// السكروول وزرار الصوت
const cards = document.querySelectorAll('.story-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));

const audio = document.getElementById('main-audio');
const btn = document.getElementById('play-pause-btn');
btn.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        btn.innerText = "كتم الصوت 🔇";
    } else {
        audio.muted = true;
        btn.innerText = "تشغيل الصوت 🔊";
    }
});
