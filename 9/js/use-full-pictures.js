import {isEscapeKey} from './util.js';
import { addCommentHandler } from './full-pictures.js';

const fullPictureElement = document.querySelector('.big-picture');
const pictureCloseElement = fullPictureElement.querySelector('.big-picture__cancel');

function openFullPicture () {
  fullPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeFullPicture () {
  fullPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture();
  }
}

const useFullPicture = () => {
  addCommentHandler();

  pictureCloseElement.addEventListener('click', () => {
    closeFullPicture();
  });
};

export {useFullPicture, openFullPicture, closeFullPicture};
