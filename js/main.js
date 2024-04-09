import {createPhotosDescription} from './data-photo.js';
import {createMiniature} from './miniatures.js';
import { useFullPicture } from './use-full-pictures.js';
import { useFormEdit } from './use-form.js';
import { valid } from './validate-form.js';
import { editSizePhoto } from './edit-photo.js';

const posts = createPhotosDescription();
createMiniature(posts);
useFullPicture();
useFormEdit();
valid();
editSizePhoto();
