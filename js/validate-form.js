const formUpload = document.querySelector('.img-upload__form');
const inputHashtag = formUpload.querySelector('.text__hashtags');
const inputText = formUpload.querySelector('.text__description');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
}, false);

function hashtagRegValid (elements, regText) {
  return elements.every((hashtag) => regText.test(hashtag));
}

function uniqItem (elements) {
  return (new Set(elements)).size === elements.length;
}

function validateLengthHashtags (value) {
  const hashtags = value.split(' ').filter((hashtag) => hashtag !== ' ');
  return hashtags.length <= 5;
}

function validHashtag (value) {
  const hashtags = value.split(' ').filter((hashtag) => hashtag !== ' ');
  const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
  return value === '' || hashtagRegValid(hashtags, hashtagReg);
}

function uniqHashtags (value) {
  const hashtags = value.split(' ').filter((hashtag) => hashtag !== ' ');
  return uniqItem(hashtags.map((hashtag) => hashtag.toLowerCase()));
}

function validateText (textContent) {
  const text = textContent.split('');
  return text.length <= 140;
}

pristine.addValidator(inputHashtag, validateLengthHashtags, 'Количество хэштегов превышает 5');
pristine.addValidator(inputHashtag, validHashtag, 'Введён невалидный хэштег');
pristine.addValidator(inputHashtag, uniqHashtags, 'Хэштеги повторяются');
pristine.addValidator(inputText, validateText, 'Длина комментария больше 140 символов');

const valid = () => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {valid};
