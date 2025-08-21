export function initLeapYearChecker() {
  const input = document.getElementById("first_input");
  const result = document.getElementById("answer_txt");

  input.addEventListener("input", () => {
    const year = Number(input.value);

    if (!input.value || isNaN(year)) {
      result.textContent = "";
      result.style.color = "";
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      result.textContent = "Ви народилися в високосний рік!";
      result.style.color = "limegreen";
    } else {
      result.textContent = "Ваш рік народження не високосний!";
      result.style.color = "red";
    }
  });
}
