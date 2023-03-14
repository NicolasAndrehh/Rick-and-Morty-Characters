
const modalContainer = document.querySelector('.popup-window')

const displayModal = (id) => {
    const displayIdOf = result.findIndex((card) => card.id === +id);
    modalContainer.style.display = 'flex';
    overlay.style.display = 'block';
    let html = '';
    html += `
        <div class= "title-modal">
            <i class="fas fa-times"></i>
        </div>
        <div class="image">
            <img src="${result[displayIdOf].image}" alt="image">
            <div class="name"> ${result[displayIdOf].name} </div>
        </div>
        <div class="details">
            <div class="box"> Status : ${result[displayIdOf].status} </div>
            <div class="box"> Species : ${result[displayIdOf].species} </div>
            <div class="box"> Type : ${result[displayIdOf].type} </div>
            <div class="box"> Gender : ${result[displayIdOf].gender} </div>
        </div>
    `;

modalContainer.innerHTML = html;
}; 

const commentBtn = document.querySelectorAll('.button');
console.log(commentBtn)
commentBtn.forEach((btn) => btn.addEventListener('click', (e) => {
  console.log('clicked')
  const { id } = e.target;
  displayModal(id);
}));
