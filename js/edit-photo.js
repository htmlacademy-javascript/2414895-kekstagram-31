import { filterList } from './data-filter';

const formUpload = document.querySelector('.img-upload__form');
const buttonSizeSmaller = formUpload.querySelector('.scale__control--smaller');
const buttonSizeBigger = formUpload.querySelector('.scale__control--bigger');
const inputPhotoSize = formUpload.querySelector('.scale__control--value');
const currentPhoto = formUpload.querySelector('.img-upload__preview img');
const slider = formUpload.querySelector('.img-upload__effect-level');
const sliderLevel = formUpload.querySelector('.effect-level__slider');
const levelFilter = formUpload.querySelector('.effect-level__value');
const effectList = formUpload.querySelector('.effects__list');
const photoSize = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};
let newSize = 0;

slider.classList.add('hidden');

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
  sliderLevel.noUiSlider.updateOptions({
    range: {
      min: filter.min,
      max: filter.max,
    },
    start: filter.start,
    step: filter.step,
    connect: 'lower'
  });
};

const fixValue = (filter) => {
  sliderLevel.noUiSlider.on('update', () => {
    levelFilter.value = sliderLevel.noUiSlider.get();
    currentPhoto.style.filter = `${filter.filter}(${sliderLevel.noUiSlider.get()}${filter.dimension})`;
  });
};

noUiSlider.create(sliderLevel, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  step: 0,
  connect: 'lower',
  format: {
    to: (value) => value,
    from: (value) => parseFloat(value)
  }
});

const editFilter = () => {
  effectList.addEventListener('change', (evt) => {
    if (evt.target.value !== 'none') {
      slider.classList.remove('hidden');
    } else {
      slider.classList.add('hidden');
    }
    useFilter(filterList[evt.target.value]);
    fixValue(filterList[evt.target.value]);
  });
};

export {editSizePhoto, editFilter};
