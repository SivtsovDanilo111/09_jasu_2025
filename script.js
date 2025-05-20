// Виконуємо запит до сайту
fetch('https://jasu2025.eu/innovation-complete-list.php')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); // Якщо дані у форматі HTML або тексту
  })
  .then(data => {
    console.log(data); // Виводимо отримані дані в консоль
    // Тут можна обробити дані, наприклад, додати їх на сторінку
  })
  .catch(error => {
    console.error('Помилка при отриманні даних:', error);
  });