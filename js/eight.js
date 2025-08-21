export function greatestNumber() {
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const num3 = document.getElementById("num3")
    const result = document.getElementById("main_eight--result")

    function findMax() {
        const values = [Number(num1.value), Number(num2.value), Number(num3.value)]

        const filtered = values.filter(v => !isNaN(v))
        if (filtered.length === 0) {
            result.textContent = "Введіть хочаб одне число"
            return
        }
        const maxValue = Math.max(...filtered)
        result.textContent = `Найбільше число яке ви ввели - ${maxValue}`
    }


    num1.addEventListener("input", findMax)
    num2.addEventListener("input", findMax)
    num3.addEventListener("input", findMax)

}