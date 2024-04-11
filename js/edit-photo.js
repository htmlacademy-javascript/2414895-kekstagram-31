import { filterList } from './data-filter';

const formUpload = document.querySelector('.img-upload__form');
const buttonSizeSmaller = formUpload.querySelector('.scale__control--smaller');
const buttonSizeBigger = formUpload.querySelector('.scale__control--bigger');
const inputPhotoSize = formUpload.querySelector('.scale__control--value');
const currentPhoto = formUpload.querySelector('.img-upload__preview img');
const sliderElement = formUpload.querySelector('.effect-level__slider');
const levelFilter = formUpload.querySelector('.effect-level__value');
const effectList = formUpload.querySelector('.effects__list');
sliderElement.classList.add('hidden');
levelFilter.classList.add('hidden');
const photoSize = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};
let newSize = 0;

function doSmaller (currentSize) {
  newSize = parseInt(currentSize.value, 10);
  newSize = newSize - photoSize.STEP;
  if(newSize < photoSize.MIN) {
    newSize = photoSize.MIN;
  }
}
function doBigger (currentSize) {
  newSize = parseInt(currentSize.value, 10);
  newSize = newSize + photoSize.STEP;
  if (newSize > photoSize.MAX) {
    newSize = photoSize.MAX;
  }
}

const editPhotoParametr = () => {
  inputPhotoSize.value = `${newSize}%`;
  currentPhoto.style.transform = `scale(${newSize / 100})`;
};

const editSizePhoto = () => {
  buttonSizeSmaller.addEventListener('click', () => {
    doSmaller(inputPhotoSize);
    editPhotoParametr();
  });

  buttonSizeBigger.addEventListener('click', () => {
    doBigger(inputPhotoSize);
    editPhotoParametr();
  });
};

const useFilter = (filter) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: filter.MIN,
      max: filter.MAX,
    },
    start: filter.START,
    step: filter.STEP,
    connect: 'lower'
  });
};

const fixValue = (filter) => {
  sliderElement.noUiSlider.on('update', () => {
    levelFilter.value = sliderElement.noUiSlider.get();
    currentPhoto.style.filter = `${filter.FILTER}(${sliderElement.noUiSlider.get()}${filter.DIMENSION})`;
  });
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  step: 0,
  connect: 'lower'
});

const editFilter = () => {
  effectList.addEventListener('change', (evt) => {
    if (evt.target.value !== 'none') {
      sliderElement.classList.remove('hidden');
      levelFilter.classList.remove('hidden');
    } else {
      sliderElement.classList.add('hidden');
      levelFilter.classList.add('hidden');
    }
    useFilter(filterList[evt.target.value]);
    fixValue(filterList[evt.target.value]);
  });
};

export {editSizePhoto, editFilter};
