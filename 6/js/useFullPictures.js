import {isEscapeKey, isEnterKey} from './util.js';

const fullPictureElement = document.querySelector('.big-picture');
const pictureOpenElement = document.querySelector('.pictures');
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
  pictureOpenElement.addEventListener('click', () => {
    openFullPicture();
  });

  pictureOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openFullPicture();
    }
  });

  pictureCloseElement.addEventListener('click', () => {
    closeFullPicture();
  });
};

export {useFullPicture};
