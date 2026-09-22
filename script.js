const modal = document.getElementById('downloadModal');
const closeButtons = document.querySelectorAll('[data-close], .close-button');
const downloadButton = document.querySelector('[data-download]');

if (downloadButton) {
  downloadButton.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
}

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
