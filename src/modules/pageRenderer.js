import headerLogoUrl from '../img/headerImg.png';
import getCharacters from './fetchAPI.js';
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

      // Creating each character card and display it in the HTML
      charactersArray.forEach(async (character, index) => {
        const characterLikes = likes[index].likes;
        const characterCard = `
              <div class="character-card">
                <img src="${character.image}" alt="${character.name} image">
                <div class="card-info">
                  <p>${character.name}</p>
                  <i class="fa-regular fa-heart fa-lg"></i>
                  <i class="fa-solid fa-heart fa-lg hide"></i>
                </div>
                <p>${characterLikes} likes</p>
                <a href="#" class="button">Comments</a>
              </div>`;
        charactersSection.insertAdjacentHTML('beforeend', characterCard);
      });
    });
};

export { displayLogo, displayCharacters };