document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const successmessage = document.getElementById('successmessage');
  
    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(feedbackForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      const response = await sendDataToServer(formDataObject);

      if (response.success) {
        feedbackForm.reset();
        successmessage.classList.remove('hidden');
      }
    });
  });
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

    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (response.success) {
        feedbackForm.reset();
        successmessage.classList.remove('hidden');
        setTimeout(() => {
          successmessage.classList.add('hidden');
        }, 5000); 
      }
    });
  });

//   document.getElementById('feedbackform').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission


//     document.getElementById('successmessage').style.display = 'block';
// });

// let formData = {};

// function setFormData(name, value) {
//     formData[name] = value;
// }

// export { formData, setFormData };