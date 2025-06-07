'use strict';
import { closeModal } from './modalForm';
import { sendMail } from './sendMail';
let formData = {
  name: '',
  company: '',
  email: '',
  telephone: '',
  message: '',
};

const localStorageKey = 'contact-form-state';

const form = document.querySelector('.contact-form');
const userName = document.querySelector('input[name="username"]');
const userCompany = document.querySelector('input[name="usercompany"]');
const userMail = document.querySelector('input[name="user-email"]');
const userPhone = document.querySelector('input[name="telephone"]');
const texArea = document.querySelector('textarea[name="user-comment"]');
const checkPrivacy = document.querySelector('input[name="user-privacy"]');

form.addEventListener('submit', toSubmit);
form.addEventListener('input', onInput);
userName.addEventListener('blur', toCheckBorderColor);
userCompany.addEventListener('blur', toCheckBorderColor);
userMail.addEventListener('blur', toCheckBorderColor);
userPhone.addEventListener('blur', toCheckBorderColor);
texArea.addEventListener('blur', toCheckBorderColor);

function toCheckBorderColor(evt) {
  const input = evt.target;
  const value = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Видаляємо попередню помилку саме біля цього input'а
  const next = input.nextElementSibling;
  if (next && next.classList.contains('errorMsg')) {
    next.remove();
  }

  let errorMessage = '';

  if (input.name === 'username' && (!value || /\d/.test(value))) {
    errorMessage = 'Wpisz poprawnie imię';
  }

  if (input.name === 'user-email' && (!value || !emailRegex.test(value))) {
    errorMessage = 'Wpisz poprawny email';
  }

  if (input.name === 'user-comment' && !value) {
    errorMessage = 'Dodaj krótki opis *';
  }

  if (errorMessage) {
    input.insertAdjacentHTML('afterend', `<p class="errorMsg">${errorMessage}</p>`);
    input.style.border = '1px solid red';
  } else {
    input.style.border = '1px solid #7DE2D1';
  }
}


function isText() {
  const inputMessage = localStorage.getItem(localStorageKey);
  const inputMessageArr = JSON.parse(inputMessage);
  formData = inputMessageArr || {
    name: '',
    company: '',
    email: '',
    telephone: '',
    message: '',
  };
  const { name, company, email, telephone, message } = formData;
  if (name) {
    userName.value = name;
  }
  if (company) {
    userCompany.value = company;
  }
  if (email) {
    userMail.value = email;
  }
  if (telephone) {
    userPhone.value = telephone;
  }
  if (message) {
    texArea.value = message;
  }
}
isText();

function onInput(evt) {
  const { name, value } = evt.target;
  if (name === 'username') {
    formData.name = value.trim();
    userName.style.border = '1px solid black';
  } else if (name === 'user-email') {
    formData.email = value.trim();
    userMail.style.border = '1px solid black';
  } else if (name === 'user-comment') {
    formData.message = value.trim();
    texArea.style.border = '1px solid black';
  } else if (name === 'usercompany') {
    formData.company = value.trim();
    userCompany.style.border = '1px solid black';
  } else if (name === 'telephone') {
    formData.telephone = value.trim();
    userPhone.style.border = '1px solid black';
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function toSubmit(evt) {
  evt.preventDefault();

  const errorMsg = document.querySelector('.errorMsg');
  if (errorMsg) {
    errorMsg.remove();
  }
  if (!formData.name.trim() || /\d/.test(formData.name)) {
    const errorMessage = `<p class="errorMsg">Wpisz imie</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    userName.style.border = '2px solid red';
  } else if (!formData.email.length) {
    const errorMessage = `<p class="errorMsg">wpisz email !!!</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    userMail.style.border = '2px solid red';
  } else if (!formData.message) {
    const errorMessage = `<p class="errorMsg">Dodaj krotki opis !!!</p>`;
    form.insertAdjacentHTML('beforeend', errorMessage);
    texArea.style.border = '2px solid red';
  } else if (!checkPrivacy.checked) {
    const errorMessage = `<p class="errorMsg">Zaznacz zgodę na przetwarzanie danych</p>`;

    form.insertAdjacentHTML('beforeend', errorMessage);
  } else {
    console.log(formData);

    sendMail(formData);
    document.querySelector('.custom-checkbox').style.border = '1px solid black';
    localStorage.removeItem('contact-form-state');

    userName.style.border = '1px solid #ddd';
    userMail.style.border = '1px solid #ddd';
    texArea.style.border = '1px solid #ddd';
    closeModal();
    this.reset();
    formData.name = '';
    formData.company = '';
    formData.email = '';
    formData.telephone = '';
    formData.message = '';
  }
}
