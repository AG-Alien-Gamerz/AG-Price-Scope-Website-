const modal = document.getElementById('downloadModal');
const closeButtons = document.querySelectorAll('[data-close], .close-button');
const downloadButton = document.querySelector('[data-download]');
const downloadUrl = 'https://github.com/AG-Pixel-creater/AG-Price-Scope-Website-/releases/download/v0.0.1/AG_Price_ScopeSetup.exe';

if (downloadButton) {
  downloadButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  });
}

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}
