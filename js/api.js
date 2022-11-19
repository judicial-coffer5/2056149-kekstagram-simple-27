import { errorAlert, successAlert } from './form-submit-message.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(successAlert);
      } else {
        onFail(errorAlert);
      }
    })
    .catch(() => {
      onFail(errorAlert);
    });
};

export { getData, sendData };
