document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');
  document.getElementById('decrease').addEventListener('click', function () {
      counter.textContent = parseInt(counter.textContent) - 1;
  });
  document.getElementById('increase').addEventListener('click', function () {
      counter.textContent = parseInt(counter.textContent) + 1;
  });
});

