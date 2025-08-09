document.getElementById('app').innerHTML = `
    <div class="banner">
        <h1>🇵🇰 Happy Independence Day, Pakistan! 🇵🇰</h1>
        <div class="crescent-star">
            <div class="crescent"></div>
            <div class="star"></div>
        </div>
        <h2>14th August</h2>
        <p>Let's celebrate the spirit of freedom, unity, and pride!<br>
        <strong>پاکستان زندہ باد</strong></p>
        <button class="celebrate-btn" id="celebrateBtn">Celebrate!</button>
    </div>
    <canvas class="confetti" id="confetti"></canvas>
`;

document.getElementById('celebrateBtn').addEventListener('click', () => {
    startConfetti();
});

// Simple confetti animation
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];
    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 8 + 4,
            d: Math.random() * 50 + 10,
            color: Math.random() > 0.5 ? '#01411C' : '#fff',
            tilt: Math.random() * 10 - 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of pieces) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        update();
    }

    function update() {
        for (let p of pieces) {
            p.y += Math.cos(p.d) + 2 + p.r / 2;
            p.x += Math.sin(p.d) * 2;
            if (p.y > canvas.height) {
                p.x = Math.random() * canvas.width;
                p.y = -10;
            }
        }
    }

    let confettiInterval = setInterval(draw, 16);
    setTimeout(() => {
        clearInterval(confettiInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 4000);
}