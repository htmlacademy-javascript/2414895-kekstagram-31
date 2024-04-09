import {createPhotosDescription} from './data.js';
import {createMiniature} from './miniatures.js';
import { useFullPicture } from './use-full-pictures.js';
import { useFormEdit } from './use-form.js';
import { valid } from './validate-form.js';

const posts = createPhotosDescription();
createMiniature(posts);
useFullPicture();
useFormEdit();
valid();
