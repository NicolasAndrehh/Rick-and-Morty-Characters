export default async (comments) => {
  const commentContainer = document.querySelector('.comment-container');
  commentContainer.innerHTML = '';
  comments.forEach(element => {
    commentContainer.innerHTML += `
            <p class='Title'>${element.creation_date}. ${element.username}: ${element.comment}</p>`;
  })
  
};
