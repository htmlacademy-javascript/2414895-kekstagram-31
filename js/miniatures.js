import {createPicture} from './full-pictures';

const miniatureListElement = document.querySelector('.pictures');
const createMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniatureListFragment = document.createDocumentFragment();
const createMiniature = (posts) => {
  posts.forEach(({url, description, likes, comments}) => {
    const miniatureElement = createMiniatureTemplate.cloneNode(true);
    const pictureImg = miniatureElement.querySelector('.picture__img');
    const pictureLike = miniatureElement.querySelector('.picture__likes');
    const pictureComment = miniatureElement.querySelector('.picture__comments');
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureLike.textContent = likes;
    pictureComment.textContent = comments.length;

    miniatureElement.addEventListener('click', () => {
      createPicture({url, description, likes, comments});
    });

    miniatureListFragment.appendChild(miniatureElement);
  });

  miniatureListElement.appendChild(miniatureListFragment);
};


export {createMiniature};
