// import './api.js'
import getCharacters from '../modules/fetchAPI.js';

const modalContainer = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');

const url = 'https://rickandmortyapi.com/api/character';

const displayModal = (id) => {
  getCharacters(url)
    .then((request) => {
      const charactersArray = request.results;
      charactersArray.forEach((character) => {
        //  for (const character of charactersArray) {
        if (Number(id) === character.id) {
          modalContainer.style.display = 'flex';
          overlay.style.display = 'block';
          let html = '';
          html += `
        <div class= "title-modal">
            <i class="fas fa-times"></i>
        </div>
        <div class="image">
            <img src="${character.image}" alt="image">
            <div class="name"> ${character.name} </div>
        </div>
        <div class="details">
            <div class="box"> Status : ${character.status} </div>
            <div class="box"> Species : ${character.species} </div>
            <div class="box"> Type : ${character.type} </div>
            <div class="box"> Gender : ${character.gender} </div>
        </div>
    `;

          modalContainer.innerHTML = html;

          // close modal
          const ModalClose = document.querySelector('.fa-times');

          ModalClose.addEventListener('click', (e) => {
            e.preventDefault();
            modalContainer.style.display = 'none';
            overlay.style.display = 'none';
          });
        }
      });
    });
};

export { displayModal };