// 1. قلوب متطايرة
function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const emojis = ['❤️', '💖', '💘', '💝'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// 2. العداد التصاعدي من 6 مارس
const startDate = new Date("March 6, 2026 00:00:00").getTime();
setInterval(() => {
    const distance = new Date().getTime() - startDate;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// 3. حل نهائي لمشكلة امتداد الصور
document.querySelectorAll('.story-img').forEach(img => {
    const baseName = img.getAttribute('data-src');
    const extensions = ['.JPG', '.jpg', '.png', '.jpeg'];
    let index = 0;
    function tryNext() {
        if (index < extensions.length) {
            img.src = baseName + extensions[index];
            index++;
        }
    }
    img.onerror = tryNext;
    tryNext();
});

// 4. التحكم في الموسيقى والسكروول
const audio = document.getElementById('main-audio');
const btn = document.getElementById('play-pause-btn');

window.addEventListener('load', () => {
    if (localStorage.getItem('playMusic') === 'true') {
        audio.play().catch(() => console.log("تفاعل مطلوب"));
        localStorage.removeItem('playMusic');
    }
});

btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btn.innerText = "كتم الصوت 🔇";
    } else {
        audio.pause();
        btn.innerText = "تشغيل الصوت 🔊";
    }
});

const cards = document.querySelectorAll('.story-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));
