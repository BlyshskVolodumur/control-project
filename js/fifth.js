export function timeCalculator() {
  const input = document.getElementById("time-input");
  const output = document.getElementById("time-result");

  function formatFromSeconsds(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds));
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    const pad = (n) => String(n).padStart(2, "0");
    return `${days} дн. ${pad(hours)}: ${pad(minutes)}: ${pad(seconds)}`;
  }

  function handleInput() {
    const value = input.value.trim().replace(",", ".");
    const totalSeconds = Number(value);
    output.textContent = formatFromSeconsds(totalSeconds)
  }

  input.addEventListener("input", handleInput)
}
