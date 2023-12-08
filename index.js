const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("input", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  const words = textareaEl.value.split(/\s+/).filter((word) => word !== '').length;
  totalCounterEl.innerText = words;
  remainingCounterEl.innerText = "Unlimited";
}
