//import {createPhotosDescription} from './data-photo.js';
import { createMiniature } from './miniatures.js';
import { useFullPicture } from './use-full-pictures.js';
import { useFormEdit, closeEditForm } from './use-form.js';
import { valid } from './validate-form.js';
import { editSizePhoto, editFilter } from './edit-photo.js';
import { getData} from './api.js';
import { showAlert, showErrorMessage } from './util.js';

try {
  getData()
    .then((post) => {
      createMiniature(post);
    })
    .catch((err) => {
        showAlert(err.message);
    });
} catch(error) {
  showErrorMessage(error.message);
}

useFullPicture();
useFormEdit();
valid(closeEditForm);
editSizePhoto();
editFilter();
