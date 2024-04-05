import { counter } from './util';

const fullPictureElement = document.querySelector('.big-picture');

const pictureImg = fullPictureElement.querySelector('.big-picture__img img');
const pictureLike = fullPictureElement.querySelector('.likes-count');
const pictureCommentCount = fullPictureElement.querySelector('.social__comment-count');
const pictureCommentShowCount = pictureCommentCount.querySelector('.social__comment-shown-count');
const pictureCommentTotalCount = pictureCommentCount.querySelector('.social__comment-total-count');
const pictureComments = fullPictureElement.querySelector('.social__comments');
const pictureDescription = fullPictureElement.querySelector('.social__caption');
const pictureCommentLoader = fullPictureElement.querySelector('.comments-loader');

const createPicture = ({url, description, likes, comments}) => {
  pictureImg.src = url;
  pictureDescription.textContent = description;
  pictureLike.textContent = likes;
  pictureCommentShowCount.textContent = Math.min(5, comments.length);
  pictureCommentTotalCount.textContent = comments.length;

  const commentForm = document.createElement('li');
  const commentImg = document.createElement('img');
  const commentMessage = document.createElement('p');

  commentForm.classList.add('social__comment');
  commentImg.classList.add('social__picture');
  commentMessage.classList.add('social__text');

  commentForm.appendChild(commentImg);
  commentForm.appendChild(commentMessage);

  const commentListFragment = document.createDocumentFragment();

  const addComment = (container) => {
    container.forEach(({avatar, name, message}) => {
      const commentElement = commentForm.cloneNode(true);
      const socialPicture = commentElement.querySelector('.social__picture');
      const socialText = commentElement.querySelector('.social__text');
      socialPicture.src = avatar;
      socialPicture.alt = name;
      socialText.textContent = message;

      commentListFragment.append(commentElement);
    });

    pictureComments.innerHTML = '';
    pictureComments.append(commentListFragment);
  };

  const commentContainer = comments.slice(0, 5);
  addComment(commentContainer);

  const click = counter(2);
  pictureCommentLoader.addEventListener('click', () => {
    const addCommentContainer = comments.slice(0, 5 * click());
    pictureCommentShowCount.textContent = addCommentContainer.length;
    addComment(addCommentContainer);

    const pictureCommentNew = pictureComments.querySelectorAll('.social__comment');

    if (pictureCommentNew.length === comments.length) {
      pictureCommentLoader.classList.add('hidden');
    }
  });
};

export {createPicture};
