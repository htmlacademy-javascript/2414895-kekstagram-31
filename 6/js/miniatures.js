import {createPicture} from './fullpictures';

const miniatureListElement = document.querySelector('.pictures');
const createMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniatureListFragment = document.createDocumentFragment();
const createMiniature = (posts) => {
  posts.forEach(({url, description, likes, comments}) => {
    const miniatureElement = createMiniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__img').alt = description;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    miniatureElement.addEventListener('click', () => {
      createPicture({url, description, likes, comments});
    });

    miniatureListFragment.appendChild(miniatureElement);
  });

  miniatureListElement.appendChild(miniatureListFragment);
};


export {createMiniature};
