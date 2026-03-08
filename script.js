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

// --- العداد التنازلي (الوقت المتبقي) ---
const countdownDate = new Date("March 6, 2026 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض العداد في HTML
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    // لو الوقت خلص
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerText = "وعدنا تحقق اليوم! ❤️";
    }
}, 1000);

// --- تأثير السكروول الناعم للكروت (ظهور تدريجي) ---
const cards = document.querySelectorAll('.story-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور الأول
        }
    });
}, {
    threshold: 0.1 // يظهر الكارت لما 10% منه يدخل الشاشة
});

cards.forEach(card => {
    observer.observe(card);
});

// --- التحكم في زرار كتم/تشغيل الصوت ---
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');

if (playPauseBtn && audio) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play(); // محاولة التشغيل لو كان واقف
            playPauseBtn.innerText = "كتم الصوت 🔇";
            playPauseBtn.style.background = "rgba(255, 65, 108, 0.1)";
        } else {
            audio.muted = true;
            playPauseBtn.innerText = "تشغيل الصوت 🔊";
            playPauseBtn.style.background = "rgba(255, 75, 110, 0.3)";
        }
    });
}
