import './style.scss';
import './popup/modal';
import './popup/api';
import { displayLogo, displayCharacters } from './modules/pageRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  displayLogo();
  displayCharacters();
});

