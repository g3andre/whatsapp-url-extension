const form = document.querySelector('form');
const country = document.querySelector('#country');
const code = document.querySelector('#code');
const phone = document.querySelector('#phone');
const URL = 'https://wa.me/';

function validateNumber(fullPhoneNumber) {
  const re = /\D/g;
  fullPhoneNumber = fullPhoneNumber.replace(re, '');

  if(fullPhoneNumber.length > 13 || fullPhoneNumber.length < 12) {
    return null
  }

  return fullPhoneNumber;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const num = validateNumber(`${country.value}${code.value}${phone.value}`);

  if(!num) {
    window.alert('Wrong link generate: check country code, area code or phone number...');
    return;
  }

  const fullURL = `${URL}${num}`;
  chrome.tabs.create({
    url: fullURL,
  });
});