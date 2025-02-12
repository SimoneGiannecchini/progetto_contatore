const counter = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
let count = 0;
function updateCounter() {
  counter.textContent = count;
}
decreaseButton.addEventListener('click', () => {
  count--;
  updateCounter();
});
increaseButton.addEventListener('click', () => {
  count++;
  updateCounter();
});
