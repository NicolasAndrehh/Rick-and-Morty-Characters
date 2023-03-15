export default async (comments) => {
  const commentContainer = document.querySelector('.comment-container');
  commentContainer.innerHTML = '';
  for (let i = 0; i < comments.length; i += 1) {
    commentContainer.innerHTML += `
            <p class='Title'>${comments[i].creation_date}. ${comments[i].username}: ${comments[i].comment}</p>`;
  }
};
