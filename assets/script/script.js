const select = document.getElementById('select').value;
const inputNumberId = document.querySelector('input-number').value;

const form = document.querySelector('.form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault(); 

  const loadingDiv = document.querySelector('.loading');
  const resultDiv = document.querySelector('.result');
  const errorDiv = document.querySelector('.error');
  // Сбрасываем предыдущие сообщения
  resultDiv.textContent = '';
  errorDiv.textContent = '';
  // индикатор загрузки
  loadingDiv.style.display = 'block'; 

  fetch(`https://swapi.py4e.com/${select}/${inputNumberId}/`)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.status);
        }
        return response.json();
      })
        
      .then(data => {
        loadingDiv.style.display = 'none';

        resultDiv.textContent = JSON.stringify(); 
      })
      .catch(error => {
        loadingDiv.style.display = 'none'; 

        errorDiv.innerHTML = `Ошибка: ${error === 405 ? 'Страница недоступна' : ''}`;
      })
      .finally(() => {

      });
});
