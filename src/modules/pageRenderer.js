import headerLogoUrl from '../img/headerImg.png';
import getCharacters from './fetchAPI.js';

// Funtion to display the header logo
const displayLogo = () => {
  const navbar = document.querySelector('.navbar');
  const headerLogo = document.createElement('img');
  headerLogo.src = headerLogoUrl;
  headerLogo.className = 'header-logo';

  navbar.insertAdjacentElement('afterbegin', headerLogo);
};

// Funtion to display the fetched characters from the API
const url = 'https://rickandmortyapi.com/api/character';
const displayCharacters = () => {
  getCharacters(url)
    .then((request) => {
      const charactersArray = request.results;
      const charactersSection = document.querySelector('.characters-section');

      charactersArray.forEach((character) => {
        const characterCard = `
        <div class="character-card">
          <img src="${character.image}" alt="${character.name} image">
          <div class="card-info">
              <p>${character.name}</p>
              <i class="fa-regular fa-heart fa-lg"></i>
              <i class="fa-solid fa-heart fa-lg hide"></i>
          </div>
          <p>X likes</p>
          <a href="#" class="button">Comments</a>
        </div>`;

        charactersSection.insertAdjacentHTML('beforeend', characterCard);
      });
    });
};

export { displayLogo, displayCharacters };