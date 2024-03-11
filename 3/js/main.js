const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Глаша','Клуня','Клава','Матвей','Иосиф','Эдельвейс','Эсмеральда','Клин'];

const DESCRIPTIONS = ['описание 1','описание 2','описание 3','описание 4','описание 5','описание 6','описание 7','описание 8'];

const PhotoId = {
  MIN: 1,
  MAX: 25
};

const PhotoUrl = {
  MIN: 1,
  MAX: 25
};

const LikeCount = {
  MIN: 15,
  MAX: 200
};

const CommentId = {
  MIN: 1,
  MAX: 500
};

const CommentCount = {
  MIN: 0,
  MAX: 30
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const MessageCount = {
  MIN: 1,
  MAX: 2
};

const COUNT_PHOTOS = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = () => {
  const previousValues = [];

  return function (element) {
    let currentValue = getRandomInteger(element.MIN, element.MAX);
    if (previousValues.length >= (element.MAX - element.MIN + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(element.MIN, element.MAX);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createCommentId = createRandomIdFromRangeGenerator();
const createPhotoId = createRandomIdFromRangeGenerator();
const createUrlNumber = createRandomIdFromRangeGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getMessage = () => {
  const message1 = getRandomArrayElement(MESSAGES);
  let message2 = getRandomArrayElement(MESSAGES);
  if (getRandomInteger(MessageCount.MIN, MessageCount.MAX) === 1) {
    return message1;
  }
  while (message1 === message2) {
    message2 = getRandomArrayElement(MESSAGES);
  }
  return message1 + message2;
};

const createCommentDescription = () => ({
  id: createPhotoId(CommentId),
  avatar: `img/avatar-${getRandomInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
  message: getMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: createCommentId(PhotoId),
  url: `photos/${createUrlNumber(PhotoUrl)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomInteger(CommentCount.MIN, CommentCount.MAX)}, createCommentDescription)
});

Array.from({length: COUNT_PHOTOS}, createPhotoDescription);


