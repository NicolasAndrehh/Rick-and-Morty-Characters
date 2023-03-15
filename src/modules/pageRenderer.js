import headerLogoUrl from '../img/headerImg.png';
import getCharacters from './fetchAPI.js';
import { displayModal } from '../popup/modal.js';
import InvolvementAPI from './involvementAPI.js';

// Function to display the header logo
const displayLogo = () => {
  const navbar = document.querySelector('.navbar');
  const headerLogo = document.createElement('img');
  headerLogo.src = headerLogoUrl;
  headerLogo.className = 'header-logo';

  navbar.insertAdjacentElement('afterbegin', headerLogo);
};

// Function to get an array of the character's likes
const involvementAPI = new InvolvementAPI();
async function getCharacterLikes() {
  let array = [];
  await involvementAPI.getLikes()
    .then((result) => {
      array = result;
    });
  return array;
}

function createEventListeners() {
  // Add like buttons event listener
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const characterId = button.dataset.id;
      const currentLikesElement = button.parentElement.parentElement.querySelector('.character-likes span');
      const currentLikes = parseInt(currentLikesElement.textContent, 10);

      // Add like to the API and refresh likes
      button.classList.add('disabled', 'fa-solid');
      button.classList.remove('fa-regular');
      await involvementAPI.addLike(characterId);
      currentLikesElement.textContent = currentLikes + 1;
      button.classList.remove('disabled', 'fa-solid');
      button.classList.add('fa-regular');
    });
  });

  // Add comment buttons event listener to show the respective modal
  const commentBtn = document.querySelectorAll('.button');
  commentBtn.forEach((item, index) => item.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal(index + 1);
  }));
}

// Function to display the fetched characters from the API
const url = 'https://rickandmortyapi.com/api/character';
const displayCharacters = async () => {
  // Get array of characters likes from the involvement API
  const likes = await getCharacterLikes();

  // Display characters from the API
  await getCharacters(url)
    .then((request) => {
      const charactersArray = request.results;
      const charactersSection = document.querySelector('.characters-section');
      charactersSection.innerHTML = '';

      // Creating each character card and display it in the HTML
      charactersArray.forEach(async (character, index) => {
        const characterLikes = likes[index].likes;
        const characterCard = `
              <div class="character-card">
                <img src="${character.image}" alt="${character.name} image">
                <div class="card-info">
                  <p>${character.name}</p>
                  <i class="fa-regular fa-heart fa-lg like-button" data-id="${character.id}"></i>
                  <i class="fa-solid fa-heart fa-lg hide"></i>
                </div>
                <p class="character-likes"><span>${characterLikes}</span> likes</p>
                <a href="#" class="button">Comments</a>
              </div>`;
        charactersSection.insertAdjacentHTML('beforeend', characterCard);
      });

      createEventListeners();
    });
};

export { displayLogo, displayCharacters };