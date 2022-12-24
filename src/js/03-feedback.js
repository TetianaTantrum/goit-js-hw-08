import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

saveMessage();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({
    email: evt.currentTarget.elements.email.value,
    message: evt.currentTarget.elements.message.value,
  });
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const formData = JSON.parse(savedFormData) || {};
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveMessage() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    form.elements.email.value = parsedFormData.email || '';
    form.elements.message.value = parsedFormData.message || '';
  }
}
