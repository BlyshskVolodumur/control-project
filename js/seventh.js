export function football() {
  const ball = document.getElementById("ball");
  const goal = document.getElementById("goal");
  const field = document.getElementById("main_seventh--field");
  const scoreElement = document.getElementById("score");

  const startX = 300;
  const startY = 140;

  let x = startX;
  let y = startY;
  let score = 0;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  document.addEventListener("keydown", (event) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      event.preventDefault();
    }
    if (event.key === "ArrowUp" && y > 0) y -= 10;
    if (event.key === "ArrowDown" && y < field.offsetHeight - ball.offsetHeight)
      y += 10;
    if (event.key === "ArrowLeft" && x > 0) x -= 10;
    if (event.key === "ArrowRight" && x < field.offsetWidth - ball.offsetWidth)
      x += 10;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    checkGoal()
  });

  function checkGoal() {
    const centerY = y + ball.offsetHeight / 2;

    const goalTop = goal.offsetTop;
    const goalBottom = goalTop + goal.offsetHeight;

    if (x <= goal.offsetWidth) {
      if (centerY >= goalTop && centerY <= goalBottom) {
        score++ 
        scoreElement.textContent = `Score: ${score}`
        alert("Goall!")
        resetBall()
      }
    }
  }

  function resetBall(){
    x = startX;
    y = startY;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  }
}
