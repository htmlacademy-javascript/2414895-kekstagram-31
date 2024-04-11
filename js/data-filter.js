const filterList = {
  none: {
    MIN: 0,
    MAX: 0,
    START: 0,
    STEP: 0,
    FILTER: 'none',
    DIMENSION: ''
  },
  chrome: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'grayscale',
    DIMENSION: ''
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'sepia',
    DIMENSION: ''
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    FILTER: 'invert',
    DIMENSION: '%'
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'blur',
    DIMENSION: 'px'
  },
  heat: {
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'brightness',
    DIMENSION: ''
  }
};

export {filterList};
