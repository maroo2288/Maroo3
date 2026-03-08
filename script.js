// دالة لإنشاء القلوب المتطايرة بشكل عشوائي
function createHeart() {
    const heartContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // مجموعة من إيموجي القلوب لتنويع الشكل
    const heartEmojis = ['❤️', '💖', '💘', '💝', '💕'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // توزيع القلوب عشوائياً على عرض الشاشة
    heart.style.left = Math.random() * 100 + 'vw';
    
    // تغيير حجم القلوب عشوائياً
    const size = Math.random() * 15 + 10 + 'px';
    heart.style.fontSize = size;
    
    // تغيير سرعة القلوب عشوائياً (بين 4 و 7 ثواني)
    const duration = Math.random() * 3 + 4 + 's';
    heart.style.animationDuration = duration;
    
    heartContainer.appendChild(heart);
    
    // حذف القلوب بعد انتهاء الحركة لتوفير موارد المتصفح
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// البدء في إنتاج القلوب كل 400 مللي ثانية
setInterval(createHeart, 400);

// التحكم في زرار كتم/تشغيل الصوت
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            playPauseBtn.innerText = "كتم الصوت 🔇";
            playPauseBtn.style.background = "rgba(255, 65, 108, 0.1)";
        } else {
            audio.muted = true;
            playPauseBtn.innerText = "تشغيل الصوت 🔊";
            playPauseBtn.style.background = "rgba(255, 75, 110, 0.3)";
        }
    });
}

// محاولة تشغيل الصوت تلقائياً عند أول تفاعل للمستخدم مع الصفحة
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("خطأ في التشغيل التلقائي:", error));
    }
}, { once: true });
