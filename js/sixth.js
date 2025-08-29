export function dino(){
  const game = document.getElementById("dino_game");
  const dino = document.getElementById("dino");
  const scoreEl = document.getElementById("dino_score");
  const startText = document.getElementById("dino_start--text");

  let vy = 0, y = 0;
  const GRAVITY = -0.6;
  const JUMP_VY = 11;
  let speed = 6, nextSpawn = 0;
  let score = 0;
  let running = false;

  const cacti = [];

  function setDinoBottom(v) { dino.style.bottom = v + "px"; }

  function collide(a, b) {
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();
    return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
  }

  function spawnCactus() {
    const c = document.createElement("div");
    c.className = "cactus";
    c.style.right = "-30px";
    game.appendChild(c);
    cacti.push(c);
  }

  function jump() { if (y === 0) vy = JUMP_VY; }

  let last = 0;
  function loop(t) {
    if (!running) return;
    if (!last) last = t;
    const dt = Math.min(32, t - last); last = t;

    for (let i = cacti.length - 1; i >= 0; i--) {
      const el = cacti[i];
      el.style.right = (parseFloat(el.style.right) + speed) + "px";
      if (parseFloat(el.style.right) > game.clientWidth + 40) {
        el.remove(); cacti.splice(i, 1);
      } else if (collide(dino, el)) {
        running = false;
        scoreEl.textContent += " — Проиграл! Кликни, чтобы начать заново";
        startText.style.display = "block";
        return;
      }
    }

    nextSpawn -= dt;
    if (nextSpawn <= 0) {
      spawnCactus();
      nextSpawn = 1000 + Math.random() * 1000;
      speed += 0.05;
    }

    y += vy;
    vy += GRAVITY;
    if (y < 0) { y = 0; vy = 0; }
    setDinoBottom(y);

    score += speed * dt * 0.02;
    scoreEl.textContent = "Счёт: " + Math.floor(score);

    requestAnimationFrame(loop);
  }

  function startGame() {
    cacti.splice(0).forEach(el => el.remove());
    vy = 0; y = 0; setDinoBottom(y);
    speed = 6; nextSpawn = 0; score = 0;
    scoreEl.textContent = "Счёт: 0";
    running = true; last = 0;
    startText.style.display = "none";
    requestAnimationFrame(loop);
  }

  game.addEventListener("click", () => {
    if (!running) startGame(); else jump();
  });

}