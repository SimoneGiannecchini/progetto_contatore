document.addEventListener('DOMContentLoaded', function () {
  
  const app = document.createElement('div');
  app.className = 'app';

  
  const title = document.createElement('h1');
  title.textContent = 'Hello Counter App';

  
  const counter = document.createElement('div');
  counter.id = 'counter';
  counter.textContent = '0';

  
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  
  const decreaseBtn = document.createElement('button');
  decreaseBtn.id = 'decrease';
  decreaseBtn.textContent = '-';

  const increaseBtn = document.createElement('button');
  increaseBtn.id = 'increase';
  increaseBtn.textContent = '+';

  
  buttonContainer.appendChild(decreaseBtn);
  buttonContainer.appendChild(increaseBtn);

  
  app.appendChild(title);
  app.appendChild(counter);
  app.appendChild(buttonContainer);

  
  document.body.appendChild(app);

  
  decreaseBtn.addEventListener('click', function () {
      counter.textContent = parseInt(counter.textContent) - 1;
  });

  increaseBtn.addEventListener('click', function () {
      counter.textContent = parseInt(counter.textContent) + 1;
  });
});


