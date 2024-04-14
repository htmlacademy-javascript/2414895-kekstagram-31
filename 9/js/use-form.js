import { isEscapeKey } from './util';
import { closeFullPicture } from './use-full-pictures';

const formUpload = document.querySelector('.img-upload__form');
const inputUpload = formUpload.querySelector('.img-upload__input');
const formEdit = formUpload.querySelector('.img-upload__overlay');
const buttonCloseForm = formEdit.querySelector('.img-upload__cancel');
const inputHashtag = formUpload.querySelector('.text__hashtags');
const inputText = formUpload.querySelector('.text__description');

function openEditForm () {
  closeFullPicture();
  formEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');

  inputHashtag.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  inputText.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeEditForm () {
  inputUpload.value = '';
  inputHashtag.value = '';
  inputText.value = '';
  formEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditForm();
  }
}

const useFormEdit = () => {
  inputUpload.addEventListener('change', () => {
    openEditForm();
  });

  buttonCloseForm.addEventListener('click', () => {
    closeEditForm();
  });
};

export {useFormEdit};
