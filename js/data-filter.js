const filterList = {
  none: {
    min: 0,
    max: 0,
    start: 0,
    step: 0,
    filter: 'none',
    dimension: ''
  },
  chrome: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    filter: 'grayscale',
    dimension: ''
  },
  sepia: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    filter: 'sepia',
    dimension: ''
  },
  marvin: {
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    filter: 'invert',
    dimension: '%'
  },
  phobos: {
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    filter: 'blur',
    dimension: 'px'
  },
  heat: {
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    filter: 'brightness',
    dimension: ''
  }
};

export {filterList};
