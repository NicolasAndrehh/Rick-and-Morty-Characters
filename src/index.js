import './style.scss';
import { displayLogo, displayCharacters } from './modules/pageRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  displayLogo();
  displayCharacters();
});