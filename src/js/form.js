'use strict';
import { closeModal } from './modalForm';
import { sendMail } from './sendMail';
let formData = {
  name: '',
  email: '',
  message: '',
};

const localStorageKey = 'contact-form-state';

const form = document.querySelector('.contact-form');
const userName = document.querySelector('input[name="username"]');
const userMail = document.querySelector('input[name="user-email"]');
const texArea = document.querySelector('textarea[name="user-comment"]');
const checkPrivacy = document.querySelector('input[name="user-privacy"]');

form.addEventListener('submit', toSubmit);
form.addEventListener('input', onInput);
isText();
function isText() {
  const inputMessage = localStorage.getItem(localStorageKey);
  const inputMessageArr = JSON.parse(inputMessage);
  formData = inputMessageArr || { name: '', email: '', message: '' };
  const { name, email, message } = formData;
  if (name) {
    userName.value = name;
  }
  if (email) {
    userMail.value = email;
  }
  if (message) {
    texArea.value = message;
  }
}

function onInput(evt) {
  const { name, value } = evt.target;
  if (name === 'username') {
    formData.name = value.trim();
  } else if (name === 'user-email') {
    formData.email = value.trim();
  } else if (name === 'user-comment') {
    formData.message = value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function toSubmit(evt) {
  evt.preventDefault();

  const errorMsg = document.querySelector('.errorMsg');
  if (errorMsg) {
    errorMsg.remove();
  }
  if (!formData.name) {
    const errorMessage = `<p class="errorMsg">Wpisz imie</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    userName.style.border = '2px solid red';
  } else if (!formData.email) {
    const errorMessage = `<p class="errorMsg">wpisz email !!!</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    userMail.style.border = '2px solid red';
  } else if (!formData.message) {
    const errorMessage = `<p class="errorMsg">Fill please all fields !!!</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    texArea.style.border = '2px solid red';
  } else if (!checkPrivacy.checked) {
    const errorMessage = `<p class="errorMsg">Zaznacz zgodę na przetwarzanie danych</p>`;

    form.insertAdjacentHTML('beforeend', errorMessage);
    checkPrivacy.focus();
    document.querySelector('.custom-checkbox').style.border = '1px solid red';
  } else {
    sendMail(formData);
    console.log(formData);
    document.querySelector('.custom-checkbox').style.border = '1px solid black';
    localStorage.removeItem('contact-form-state');

    userName.style.border = '2px solid black';
    userMail.style.border = '2px solid black';
    texArea.style.border = '2px solid black';
    closeModal();
    this.reset();
    formData.name = '';
    formData.email = '';
    formData.message = '';
  }
}
