// FAQ accordion event handler

const faqItems = document.querySelectorAll('.question-header');

faqItems.forEach((item) =>
  item.addEventListener('click', () => {
    const currentState = item.getAttribute('aria-expanded');
    for (i = 0; i < faqItems.length; i++) {
      faqItems[i].setAttribute('aria-expanded', 'false');
    }
    if (currentState === 'false') {
      item.setAttribute('aria-expanded', 'true');
    }
  })
);
