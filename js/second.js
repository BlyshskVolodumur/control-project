export function guessSystemNumber() {
  const input = document.getElementById("second-guess");
  const result = document.getElementById("second-result");

  input.addEventListener("blur", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const userGuess = +input.value;

    if (!userGuess || userGuess < 1 || userGuess > 10) {
      result.textContent = "Введіть число від 1 до 10";
      result.style.color = "gray";
      return;
    }

    if (userGuess === randomNumber) {
      result.textContent = "Вітаю ви вгадали число!";
      result.style.color = "limegreen";
    } else {
      result.textContent = `Ви не вгадали! Комп'ютер загадав ${randomNumber}`;
      result.style.color = "red";
    }

    input.addEventListener("focus", () => {
      result.textContent = "";
      result.style.color = "";
      input.value = "";
    });
  });
}
