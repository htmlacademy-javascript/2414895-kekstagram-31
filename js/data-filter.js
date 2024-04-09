const filterList = {
  chrome: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'grayscale'
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'sepia'
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    FILTER: 'invert'
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'blur'
  },
  heat: {
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'brightness'
  }
};

export {filterList};
