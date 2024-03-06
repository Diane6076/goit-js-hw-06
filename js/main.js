document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');
  
    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Отримання даних з форми
      const formData = new FormData(feedbackForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Відправка даних на сервер (модуль, який буде створений)
      const response = await sendDataToServer(formDataObject);
  
      // Показ повідомлення про успіх
      if (response.success) {
        feedbackForm.reset();
        successMessage.classList.remove('hidden');
      }
    });
  });
  
  // Модуль, який буде створений для зберігання даних та відправки на сервер
  async function sendDataToServer(data) {
    try {
      const response = await fetch('/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      return await response.json();
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  }



  document.addEventListener('DOMContentLoaded', () => {
    // ...
    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      // ...
  
      // Показ повідомлення про успіх
      if (response.success) {
        feedbackForm.reset();
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000); // Приховати повідомлення через 5 секунд
      }
    });
  });