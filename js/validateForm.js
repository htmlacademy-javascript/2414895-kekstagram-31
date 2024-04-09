const formUpload = document.querySelector('.img-upload__form');
const inputHashtag = formUpload.querySelector('.text__hashtags');
const inputText = formUpload.querySelector('.text__description');


const pristine = new Pristine(formUpload, { //то вообще необходимая часть. у меня же нет таких классов и в разметке не заложены классы для ошибок
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function hashtagRegValid (elements, regText) {
  const testElements = [];
  elements.forEach((element) => {
    const testElement = element.trim();
    testElements.push(regText.test(testElement));
  });
  return testElements.includes(false);
}

function noUniqItem (elements) {
  const testElements = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      testElements.push(i!=j && elements[i].toLowerCase().trim() === elements[j].toLowerCase().trim());
    }
  }
  return testElements.includes(true);
}

function validateHashtags (hashtagContent) {
  const hashtags = hashtagContent.value.split(' ');
  const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
  if (hashtagContent.value === '') {
    return true;
  } else if (hashtags.length > 5) {
    return false;
  } else if (hashtagRegValid(hashtags, hashtagReg)) {
    return false;
  } else if (noUniqItem(hashtags)) {
    return false;
  } else {
    return true;
  }
};

function getHashtagErrorMessage (hashtagContent) {
  const hashtags = hashtagContent.value.split(' ');
  const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
  if (hashtagContent.value === '') {
    return true;
  } else if (hashtags.length > 5) {
    return 'Количество хешТегов должно быть не более 5';
  } else if (hashtagRegValid(hashtags, hashtagReg)) {
    return 'ХешТеги могут быть не длиннее 19 символов и содержать только буквы и цифры';
  } else if (noUniqItem(hashtags)) {
    return 'Есть повторяющиеся хешТеги';
  } else {
    return true;
  }
};

function validateText (textContent) {
  const text =textContent.value.split('');
  if (textContent.value === '') {
    return true;
  } else if (text.length > 140) {
    return false;
  } else {
    return true;
  }
}

function getTextErrorMessage (textContent) {
  const text = textContent.value.split('');
  if (textContent.value === '') {
    return true;
  } else if (text.length > 140) {
    return `Длинна комментария в ${text.length} превышает максимальное количество 140 символов`;
  } else {
    return true;
  }
}

pristine.addValidator(inputHashtag, validateHashtags(inputHashtag), getHashtagErrorMessage(inputHashtag));
pristine.addValidator(inputText, validateText(inputText), getTextErrorMessage(inputText));

const valid = () => { formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
})};

export {valid};
