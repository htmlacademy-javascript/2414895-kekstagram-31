import {createPhotosDescription} from './data.js';
import {createMiniature} from './miniatures.js';
import { useFullPicture } from './use-full-pictures.js';

const posts = createPhotosDescription();
createMiniature(posts);
useFullPicture(posts);
