import {createPhotosDescription} from './data.js';

const miniatureListElement = document.querySelector('.pictures');
const createMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createMiniature = createPhotosDescription();
const miniatureListFragment = document.createDocumentFragment();

createMiniature.forEach(({url, description, likes, comments}) => {
  const miniatureElement = createMiniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__img').alt = description;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;
  miniatureListFragment.appendChild(miniatureElement);
});

miniatureListElement.appendChild(miniatureListFragment);
