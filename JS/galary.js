const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryList = document.querySelector('.gallery-list');
const items = document.querySelectorAll('.gallery-item');

let index = 1; // Початковий індекс - другий елемент

function updateGallery() {
  const itemWidth = items[0].clientWidth;
  const galleryWidth = galleryList.clientWidth;
  const offset = (galleryWidth - itemWidth) / 2;

  galleryList.style.transition = 'transform 0.5s ease';
  galleryList.style.transform = `translateX(-${index * itemWidth - offset}px)`;

  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateGallery();
  } else {
    index = 0;
    galleryList.style.transition = 'none';
    galleryList.style.transform = `translateX(0)`;
    setTimeout(() => {
      galleryList.style.transition = 'transform 0.5s ease';
      updateGallery();
    }, 50);
  }
});

nextButton.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
    updateGallery();
  }
});

updateGallery();




