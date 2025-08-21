export function initRockPaperScissors() {
  const choices = ["Камінь", "Ножиці", "Папір", "Колодязь"];
  const results = {
    Камінь: { Ножиці: "win", Папір: "lose", Колодязь: "lose", Камінь: "draw" },
    Ножиці: { Папір: "win", Камінь: "lose", Колодязь: "lose", Ножиці: "draw" },
    Папір: { Камінь: "win", Ножиці: "lose", Колодязь: "lose", Папір: "draw" },
    Колодязь: { Камінь: "win", Ножиці: "win", Папір: "win", Колодязь: "draw" },
  };

const userChoises = [...document.querySelectorAll(".main_third--section--top--list--choice")].filter(li => choices.includes(li.textContent.trim()))
  const compChoise = document.querySelector("#compchoice");
  const resultText = document.querySelector(".main_third--section--bottom--text");
  const scoreSpans = document.querySelectorAll(".main_third--section--top--list--choice--score span");
  const compScoreSpan = scoreSpans[0];
  const userScoreSpan = scoreSpans[1];

  let compScore = 0;
  let userScore = 0;

  userChoises.forEach(choice => {
    choice.addEventListener("click",() => {
        const userPick = choice.getAttribute("data-choice")
        const compPick = choices[Math.floor(Math.random() * choices.length)]

        compChoise.textContent = compPick;
        const outCome = results[userPick][compPick];

        if (outCome === "win") {
            resultText.textContent = `Вітаю ви виграли! (Комп'ютер обрав ${compPick})`;
            resultText.style.color = "limegreen";
            userScore++;
            userScoreSpan.textContent = userScore;
          } else if (outCome === "lose") {
            resultText.textContent = `Ви програли, комп'ютер загадав ${compPick}`;
            resultText.style.color = "red";
            compScore++;
            compScoreSpan.textContent = compScore;
          } else {
            resultText.textContent = `Нічия! Обидва обрали ${compPick}`;
            resultText.style.color = "gray";
          }    
    })
  })
}
