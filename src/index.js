import './style.scss';
import './popup/modal.js';
import { displayLogo, displayCharacters } from './modules/pageRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  displayLogo();
  displayCharacters();
});
