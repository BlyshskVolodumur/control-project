export function initLeapYearChecker() {
  const input = document.getElementById("year-input");
  const result = document.getElementById("main_first--result");

  input.addEventListener("input", () => {
    const year = input.value;

    if (!year) {
      result.textContent = "";
      result.style.color = "";
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;

    if (isLeap) {
      result.textContent = "Ви народилися в високосний рік!";
      result.style.color = "limegreen";
    } else {
      result.textContent = "Ваш рік народження не високосний!";
      result.style.color = "red";
    }
  });
}
