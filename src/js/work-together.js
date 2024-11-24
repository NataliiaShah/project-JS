const form = document.querySelector('.form');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const API_URL = 'https://portfolio-js.b.goit.study/api';

// Відправка форми
form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  if (!form.checkValidity()) {
    alert('Please fill in all fields correctly.');
    return;
  }

  // Збирання даних форми
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    // Відправка POST-запиту
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Обробка відповіді сервера
    if (response.ok) {
      // Успіх: відкриваємо модальне вікно та очищуємо форму
      openModal();
      form.reset();
    } else {
      // Помилка: показуємо повідомлення
      alert('An error occurred while submitting the form. Please try again.');
    }
  } catch (error) {
    // Випадок мережевої помилки
    alert('Failed to connect to the server. Please check your internet connection.');
  }
});

// Відкриття модального вікна
function openModal() {
  modalOverlay.classList.add('is-open');
}

// Закриття модального вікна
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Закриття при натисканні Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
    closeModal();
  }
});

function closeModal() {
  modalOverlay.classList.remove('is-open');
}