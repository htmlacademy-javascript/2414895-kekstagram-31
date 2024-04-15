const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = () => {
  const previousValues = [];

  return function (element) {
    let currentValue = getRandomInteger(element.MIN, element.MAX);
    if (previousValues.length >= (element.MAX - element.MIN + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(element.MIN, element.MAX);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const counter = (start) => {
  let i = start;
  return () => i++;
};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const errorTemplate = document.querySelector('#data-error').content;
const REMOVE_MESSAGE_TIMEOUT = 5000;

const showErrorMessage = (message) => {
  const errorElement = errorTemplate.cloneNode(true);
  if (message) {
    errorElement.querySelector('.data-error__title').textContent = message;
  }
  document.body.append(errorElement);

  const errorLoad = document.body.querySelector('.data-error');

  setTimeout(() => {
    errorLoad.remove();
  }, REMOVE_MESSAGE_TIMEOUT)
};

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement, isEscapeKey, isEnterKey, counter, showAlert, showErrorMessage};
