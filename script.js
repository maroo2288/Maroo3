// --- دالة القلوب المتطايرة ---
function createHeart() {
    const heartContainer = document.getElementById('hearts-container');
    if (!heartContainer) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const heartEmojis = ['❤️', '💖', '💘', '💝', '💕'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 15 + 10 + 'px';
    heart.style.fontSize = size;
    const duration = Math.random() * 3 + 4 + 's';
    heart.style.animationDuration = duration;
    heartContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}
setInterval(createHeart, 400);

// --- عداد عمر الحكاية (تصاعدي من 6 مارس 2026) ---
const startDate = new Date("March 6, 2026 00:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate; // بنطرح دلوقتي من البداية عشان يعد لـ قدام

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض العداد في HTML
    if(document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    }
}, 1000);

// --- تأثير السكروول الناعم للكروت (ظهور تدريجي) ---
const cards = document.querySelectorAll('.story-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => { observer.observe(card); });

// --- التحكم في الصوت ---
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');

if (playPauseBtn && audio) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            playPauseBtn.innerText = "كتم الصوت 🔇";
        } else {
            audio.muted = true;
            playPauseBtn.innerText = "تشغيل الصوت 🔊";
        }
    });
}
