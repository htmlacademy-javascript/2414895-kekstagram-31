const fullPictureElement = document.querySelector('.big-picture');

const pictureImg = fullPictureElement.querySelector('.big-picture__img img');
const pictureLike = fullPictureElement.querySelector('.likes-count');
const pictureCommentCount = fullPictureElement.querySelector('.social__comment-count');
const pictureCommentShowCount = pictureCommentCount.querySelector('.social__comment-shown-count');
const pictureCommentTotalCount = pictureCommentCount.querySelector('.social__comment-total-count');
const pictureComments = fullPictureElement.querySelector('.social__comments');
const pictureDescription = fullPictureElement.querySelector('.social__caption');
const pictireCommentLoader = fullPictureElement.querySelector('.comments-loader');

const createPicture = ({url, description, likes, comments}) => {
  pictureImg.src = url;
  pictureDescription.textContent = description;
  pictureLike.textContent = likes;
  pictureCommentShowCount.textContent = comments.length;
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

  comments.forEach(({avatar, name, message}) => {
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

  pictureCommentCount.classList.add('hidden');
  pictireCommentLoader.classList.add('hidden');
};

export {createPicture};
