import {createPhotosDescription} from './data.js';
import {createMiniature} from './miniatures.js';
import { useFullPicture } from './use-full-pictures.js';
import { useFormEdit } from './use-form.js';
import { valid } from './validateForm.js';



const posts = createPhotosDescription();
console.log(posts);
createMiniature(posts);
useFullPicture(posts);
/*posts.forEach((post) => { useFullPicture(post);
  });*/
useFormEdit();
valid();
