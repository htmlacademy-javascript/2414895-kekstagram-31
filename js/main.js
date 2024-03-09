const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Глаша','Клуня','Клава','Матвей','Иосиф','Эдельвейс','Эсмеральда','Клин'];

const descriptions = ['описание 1','описание 2','описание 3','описание 4','описание 5','описание 6','описание 7','описание 8'];

const Ids = {
  MIN: 1,
  MAX: 25
};

const Urls = {
  MIN: 1,
  MAX: 25
};

const Likes = {
  MIN: 15,
  MAX: 200
};

const CommentIds = {
  MIN: 1,
  MAX: 500
};

const CountComments = {
  MIN: 0,
  MAX: 30
};

const Avatars = {
  MIN: 1,
  MAX: 6
};

const CountMessages = {
  MIN: 1,
  MAX: 2
};

const countPhotos = 25;

const getRandomInteger = (element) => {
  const lower = element.hasOwnProperty('MIN') ? Math.ceil(Math.min(element.MIN, element.MAX)) : Math.ceil(Math.min(0, element.length - 1));
  const upper = element.hasOwnProperty('MAX') ? Math.floor(Math.max(element.MIN, element.MAX)) : Math.floor(Math.max(0, element.length - 1));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = () => {
  const previousValues = [];

  return function (element) {
    let currentValue = getRandomInteger(element);
    if (previousValues.length >= (element.MAX - element.MIN + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(element);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createCommentId = createRandomIdFromRangeGenerator();
const createPhotoId = createRandomIdFromRangeGenerator();
const createUrlNumber = createRandomIdFromRangeGenerator();

const getRandomArrayElement = (element) => element[getRandomInteger(element)];

const getMessage = () => {
  const message1 = getRandomArrayElement(messages);
  let message2 = getRandomArrayElement(messages);
  if (getRandomInteger(CountMessages) === 1) {
    return message1;
  }
  while (message1 === message2) {
    message2 = getRandomArrayElement(messages);
  }
  return message1 + message2;
};

const createCommentDescription = () => ({
  id: createPhotoId(CommentIds),
  avatar: `img/avatar-${getRandomInteger(Avatars)}.svg`,
  message: getMessage(),
  name: getRandomArrayElement(names)
});

const createPhotoDescription = () => ({
  id: createCommentId(Ids),
  url: `photos/${createUrlNumber(Urls)}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(Likes),
  comments: Array.from({length: getRandomInteger(CountComments)}, createCommentDescription)
});

const createPhotosDescription = Array.from({length: countPhotos}, createPhotoDescription);

console.log(createPhotosDescription);

