const galleryImages = document.querySelectorAll('.Gallery_images');
const modal = document.querySelector(".modal"); 

const modalImage = modal.querySelector('img');
const leftButton = modal.querySelector('.left');
const rightButton = modal.querySelector('.right');
const closeButton = modal.querySelector('.close');

let currentIndex = -1;

// Open modal
function openModal(index) {
    currentIndex = index;
    modalImage.src = galleryImages[currentIndex].src;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflowX = 'hidden'; // Enable scroll
}

// Navigate left
function navigateLeft() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
}

// Navigate right
function navigateRight() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
}

// Add event listeners
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

closeButton.addEventListener('click', closeModal);
leftButton.addEventListener('click', navigateLeft);
rightButton.addEventListener('click', navigateRight);

// Close modal on outside click
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowLeft') navigateLeft();
        if (event.key === 'ArrowRight') navigateRight();
        if (event.key === 'Escape') closeModal();
    }
});


