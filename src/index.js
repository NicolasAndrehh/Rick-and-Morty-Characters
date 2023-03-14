import './style.scss';
import headerLogoUrl from './img/headerImg.png';

const navbar = document.querySelector('.navbar');
const headerLogo = document.createElement('img');
headerLogo.src = headerLogoUrl;
headerLogo.className = 'header-logo';

navbar.insertAdjacentElement('afterbegin', headerLogo);