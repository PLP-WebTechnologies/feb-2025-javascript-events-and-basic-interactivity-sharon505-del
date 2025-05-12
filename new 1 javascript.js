const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
const button = document.querySelector('#hoverButton');
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'blue';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'initial';
});
document.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
const button = document.querySelector('#longPressButton');
let pressTimer;

button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press detected!');
  }, 1000); // 1 second long press
});

button.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});
const button = document.querySelector('#changeTextButton');
button.addEventListener('click', () => {
  button.textContent = 'You clicked me!';
  button.style.backgroundColor = 'green';
});
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImageIndex = 0;

const imgElement = document.querySelector('#imageGallery');
const nextButton = document.querySelector('#nextImageButton');

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imgElement.src = images[currentImageIndex];
});
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const content = document.querySelector(`#${tab.dataset.content}`);
    content.classList.toggle('visible');
  });
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  const name = document.querySelector('#name').value;
  if (!name) {
    alert('Name is required!');
    event.preventDefault();
  }
});
const email = document.querySelector('#email').value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) {
  alert('Please enter a valid email!');
  event.preventDefault();
}
const email = document.querySelector('#email').value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) {
  alert('Please enter a valid email!');
  event.preventDefault();
const email = document.querySelector('#email').value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) {
  alert('Please enter a valid email!');
  event.preventDefault();
}
const password = document.querySelector('#password').value;
if (password.length < 8) {
  alert('Password must be at least 8 characters long!');
  event.preventDefault();
}
const emailField = document.querySelector('#email');
emailField.addEventListener('input', () => {
  const feedback = document.querySelector('#emailFeedback');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailPattern.test(emailField.value)) {
    feedback.textContent = 'Valid email!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Invalid email!';
    feedback.style.color = 'red';
  }
});

