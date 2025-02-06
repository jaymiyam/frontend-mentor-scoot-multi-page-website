// mobile nav event handler

const navToggle = document.querySelector('#mobile-nav-toggle');
const mobileNav = document.querySelector('#primary-navigation');
const mobileOverlay = document.querySelector('.mobile-overlay');

navToggle.addEventListener('click', () => {
  const currentVisibility = mobileNav.getAttribute('data-visible');
  if (currentVisibility === 'false') {
    mobileNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('visible');
  } else {
    mobileNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('visible');
  }
});

// header hide show on scroll
const headerEl = document.querySelector('.primary-header');
let isScrolled = false;
let lastScrollTop = 0;
let delta = 20;

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  let st = window.scrollY;
  if (st === 0) {
    headerEl.classList.remove('hide');
    return;
  }

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop) {
    headerEl.classList.add('hide');
  } else {
    headerEl.classList.remove('hide');
  }

  lastScrollTop = st;
}
