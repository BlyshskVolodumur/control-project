export function calculator() {
  const inputA = document.getElementById("numA");
  const inputB = document.getElementById("numB");
  const opButtons = document.querySelectorAll("[data-op]");
  const equalBtn = document.getElementById("equal");
  const resultEl = document.getElementById("main_fourth--result");

  if (!inputA || !inputB || !equalBtn || !resultEl) return;

  let op = "+";

  opButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      op = btn.dataset.op
    })
  })

  function calc() {
    const a = parseFloat(String(inputA.value).replace(",", "."));
    const b = parseFloat(String(inputB.value).replace(",", "."));

    if (isNaN(a) || isNaN(b)) {
      resultEl.textContent = "Введіть два числа";
      return;
    }


    let res
    switch (op) {
      case "+": res = a + b; break
      case "-": res = a - b; break
      case "*": res = a * b; break
      case "/": res = b === 0 ? "Ділення на 0" : a / b; break
    }

    const label = {
      "+": "Сума",
      "-": "Віднімання",
      "*": "Множення",
      "/": "Ділення",
    }[op]
    resultEl.textContent = `${label} чисел a і b = ${res}`
  }
  
  equalBtn.addEventListener("click", calc)
//  [inputA, inputB].forEach(i => {
//   if (i) {
//     i.addEventListener("keydown", event => {
//       if (event.key === "Enter") calc();
//     });
//   }
// });
}
