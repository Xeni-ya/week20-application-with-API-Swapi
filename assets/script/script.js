document.querySelector('.form').addEventListener('submit', function(evt) {
  evt.preventDefault(); 

  const select = document.getElementById('select').value;
  const id = document.querySelector('input-number').value;
  const loadingDiv = document.querySelector('.loading');
  const resultDiv = document.querySelector('.result');
  const errorDiv = document.querySelector('.error');

  // Сбрасываем предыдущие сообщения
  resultDiv.textContent = '';
  errorDiv.textContent = '';

  loadingDiv.style.display = 'block';

  fetch(`https://swapi.py4e.com/${select}/${id}/`)
      .then(response => {
        loadingDiv.style.display = 'none'; 
          if //...
      })
      .then(data => {
          resultDiv.textContent = JSON.stringify(); 
      })
      .catch(error => {
        loadingDiv.style.display = 'none'; 
          if (error === 404) {
              errorDiv.textContent = '';
          } else {
              errorDiv.textContent = '';
          }
      });
});
