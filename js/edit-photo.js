import { filterList } from './data-filter';

const formUpload = document.querySelector('.img-upload__form');
const buttonSizeSmaller = formUpload.querySelector('.scale__control--smaller');
const buttonSizeBigger = formUpload.querySelector('.scale__control--bigger');
const inputPhotoSize = formUpload.querySelector('.scale__control--value');
const currentPhoto = formUpload.querySelector('.img-upload__preview img');
const sliderElement = formUpload.querySelector('.effect-level__slider');
const levelFilter = formUpload.querySelector('.effect-level__value');


let newPhotoSize = 0;

function doSmaller (photoSize) {
  newPhotoSize = parseInt(photoSize.value);
  newPhotoSize = newPhotoSize - 25;
  return newPhotoSize >=25 ? newPhotoSize : newPhotoSize = 25;
}
function doBigger (photoSize) {
  newPhotoSize = parseInt(photoSize.value);
  newPhotoSize = newPhotoSize + 25;
  return newPhotoSize <=100 ? newPhotoSize : newPhotoSize = 100;
}

const editSizePhoto = () => {
  buttonSizeSmaller.addEventListener('click', () => {
     doSmaller(inputPhotoSize);
     inputPhotoSize.value = `${newPhotoSize}%`;
     currentPhoto.style.transform = `scale(${newPhotoSize / 100})`;
  });

  buttonSizeBigger.addEventListener('click', () => {
    doBigger(inputPhotoSize);
    inputPhotoSize.value = `${newPhotoSize}%`;
    currentPhoto.style.transform = `scale(${newPhotoSize / 100})`;
 });
};

/*const useFilter = (filter) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: filter.MIN,
      max: filter.MAX,
    },
    start: filter.START,
    step: filter.STEP,
    connect: 'lower'
  });
};*/

export {editSizePhoto};
