const commentListFragment = document.createDocumentFragment();

const addComment = (container, comments) => {
  const fullPictureElement = document.querySelector('.big-picture');
  const pictureComments = fullPictureElement.querySelector('.social__comments');
  const pictureCommentLoader = fullPictureElement.querySelector('.comments-loader');

  const commentForm = document.createElement('li');
  const commentImg = document.createElement('img');
  const commentMessage = document.createElement('p');

  commentForm.classList.add('social__comment');
  commentImg.classList.add('social__picture');
  commentMessage.classList.add('social__text');

  commentForm.appendChild(commentImg);
  commentForm.appendChild(commentMessage);

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

  if (container.length === comments.length) {
    pictureCommentLoader.classList.add('hidden');
  } else {
    pictureCommentLoader.classList.remove('hidden');
  }
};

export {addComment};
