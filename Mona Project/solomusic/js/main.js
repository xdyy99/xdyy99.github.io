// Modules
import mypop from './modules/mypopup.js';

import fpage from './modules/fullpage.js';
import form from './modules/form.js';
import SSwiper from './modules/swiper.js';
import select2 from './modules/select2.js';
import zoom from './modules/zoom.js';
//

import popup from './modules/popup.js';
import active from './modules/active.js';

//

// Run
window.addEventListener('DOMContentLoaded', () => {
  mypop();
  fpage();
  SSwiper();
  form();
  select2();
  zoom();
  //
  active();
  popup();
});
