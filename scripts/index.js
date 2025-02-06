// index page scooters slider
const scooterTabBtns = document.querySelectorAll('.scooters-tab');
const scooterImageEl = document.querySelector('#scooter-image');
const scooterNameEl = document.querySelector('#scooter-name');
const scooterDescEl = document.querySelector('#scooter-description');
const scootersWrapperEl = document.querySelector('.scooters-wrapper');

let currentScooterIndex = 0;
const scootersList = [
  {
    image: './assets/images/scooty-electric.png',
    name: 'Scooty Electric',
    description:
      'Our most popular model around the world! Offering a smooth and quiet riding experience and recomenneded for mid to long distance. Eye-catching design with the signature Scooty yellow color.',
  },
  {
    image: './assets/images/scooty-max.png',
    name: 'Scooty Max',
    description:
      'Just like its name suggests, Scooty max is equipped with the strongest engine and provide the most speed! Best for those of you who are looking to enjoy some speed while safe driving and getting to your destination quick.',
  },
  {
    image: './assets/images/scooty-light.png',
    name: 'Scooty Light',
    description:
      'The compact and light kick scooter model with full electricity power. Best for travelling across city streets with busy crowd and narrow roads. Recommended for short to mid distance.',
  },
];

scooterTabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentScooterIndex = index;
    setActiveScooter(currentScooterIndex);
  });
});

function setActiveScooter(index) {
  const targetScooter = scootersList[index];
  scooterImageEl.src = targetScooter.image;
  scooterNameEl.textContent = targetScooter.name;
  scooterDescEl.textContent = targetScooter.description;

  scooterTabBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  scooterTabBtns[index].classList.add('active');
}

window.onload = setActiveScooter(currentScooterIndex);
