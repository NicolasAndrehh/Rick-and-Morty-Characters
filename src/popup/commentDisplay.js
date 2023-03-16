export default async (comments) => {
  const commentContainer = document.querySelector('.comment-container');
  commentContainer.innerHTML = '';
  comments.forEach((element) => {
    commentContainer.innerHTML += `
                                <div class="comment-row">
                                  <p class="username">${element.username}</p>
                                  <p class="comment">${element.comment}</p>
                                  <p class="date">${element.creation_date}</p>
                                </div>`;
  });
};
