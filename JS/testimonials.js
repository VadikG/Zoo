document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.testimonials-prev');
  const nextButton = document.querySelector('.testimonials-next');
  const testimonialsItems = document.querySelectorAll('.testimonials-item');
  const currentNumberElement = document.getElementById('current-number').firstChild;
  const totalNumberElement = document.getElementById('total-number');

  let currentIndex = 0; // Початковий індекс першого елементу
  const totalItems = testimonialsItems.length;

  totalNumberElement.textContent = totalItems.toString().padStart(2, '0'); // Встановлюємо загальну кількість

  function updateActiveItem(index) {
    testimonialsItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    // Оновлюємо номер відгуку
    currentNumberElement.textContent = (index + 1).toString().padStart(2, '0') + "/";
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateActiveItem(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateActiveItem(currentIndex);
  });

  // Ініціалізація: оновлюємо номер першого елементу
  currentNumberElement.textContent = (currentIndex + 1).toString().padStart(2, '0') + "/";
});













