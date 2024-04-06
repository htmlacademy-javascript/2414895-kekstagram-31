import { counter } from './util';
import { addComment } from './show-more-comments';

const fullPictureElement = document.querySelector('.big-picture');

const pictureImg = fullPictureElement.querySelector('.big-picture__img img');
const pictureLike = fullPictureElement.querySelector('.likes-count');
const pictureCommentCount = fullPictureElement.querySelector('.social__comment-count');
const pictureCommentShowCount = pictureCommentCount.querySelector('.social__comment-shown-count');
const pictureCommentTotalCount = pictureCommentCount.querySelector('.social__comment-total-count');
const pictureDescription = fullPictureElement.querySelector('.social__caption');
const pictureCommentLoader = fullPictureElement.querySelector('.comments-loader');

const createPicture = ({url, description, likes, comments}) => {
  pictureImg.src = url;
  pictureDescription.textContent = description;
  pictureLike.textContent = likes;
  pictureCommentShowCount.textContent = Math.min(5, comments.length);
  pictureCommentTotalCount.textContent = comments.length;

  const commentContainer = comments.slice(0, 5);
  addComment(commentContainer, comments);

  const click = counter(2);
  pictureCommentLoader.addEventListener('click', () => {
    const addCommentContainer = comments.slice(0, 5 * click());
    pictureCommentShowCount.textContent = addCommentContainer.length;
    addComment(addCommentContainer, comments);
  });
};

export {createPicture};
