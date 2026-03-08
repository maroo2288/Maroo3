// تشغيل القلوب عشوائياً
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 300);

// حل مشكلة التشغيل التلقائي (المتصفح بيجبر المستخدم يضغط أولاً)
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('main-audio');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "توقف مؤقت ⏸️";
        // إضافة تأثيرات دمار عند التشغيل
        document.body.style.animation = "pulse 2s infinite";
    } else {
        audio.pause();
        playBtn.innerText = "استكمال اللحن ❤️";
    }
});
