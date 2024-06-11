const faqInitiator = () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    item.querySelector('.question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
};

export default faqInitiator;
