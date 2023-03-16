import getCharacters from '../modules/fetchAPI.js';
import InvolvementAPI from '../modules/involvementAPI.js';
import refresh from './commentDisplay.js';

const modalContainer = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');

const url = 'https://rickandmortyapi.com/api/character';

const displayModal = (id) => {
  getCharacters(url)
    .then((request) => {
      const charactersArray = request.results;
      charactersArray.forEach((character) => {
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
        <div class="comment-box">
          <h2 class="title"> Comments <span class="counter"> </span> </h2>
          <div class="comment-container">
          </div>
        </div>
        <form action="#" class="inputComments" id="inputComments">
          <h2>Add a comment</h2>
          <div class="inputBox">
            <input class="nameInput" type="text" placeholder="Your name" required>
            <textarea class="text" id="message" name="message" rows="8" cols="37" placeholder="Your insights" required></textarea>
            <div class="submit-btn">
              <button class="submit">Comment</button>
            </div>
          </div>
        </form>      
    `;
          modalContainer.innerHTML = html;

          // close modal
          const ModalClose = document.querySelector('.fa-times');

          ModalClose.addEventListener('click', (e) => {
            e.preventDefault();
            modalContainer.style.display = 'none';
            overlay.style.display = 'none';
          });

          //Dispaly comment of the selected popup
          const request = new InvolvementAPI();
          const displayData = async () => {
            const data = await request.getComments(id);
            refresh(data);
          };
          displayData();

          document.getElementById('inputComments').addEventListener('submit', async (e) => {
            e.preventDefault();
            const userName = document.querySelector('.nameInput');
            const userComment = document.querySelector('.text');
            const form = document.getElementById('inputComments');
            await request.addComments(id, userName.value, userComment.value);
            form.reset();
            displayData(id);
          });
        }
      });
    });
};

export { displayModal };