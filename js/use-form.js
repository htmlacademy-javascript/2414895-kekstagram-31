import { isEscapeKey } from './util';
import { closeFullPicture } from './use-full-pictures';

const formUpload = document.querySelector('.img-upload__form')
const inputUpload = formUpload.querySelector('.img-upload__input');
const formEdit = formUpload.querySelector('.img-upload__overlay');
const buttonCloseForm = formEdit.querySelector('.img-upload__cancel');

function openEditForm () {
  closeFullPicture();
  formEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');

  formUpload.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentKeydown);
  });

  formUpload.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentKeydown);
  })

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeEditForm () {
  inputUpload.value = '';
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
