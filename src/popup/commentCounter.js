export const countComments = async () => {
  const commentCounter = document.querySelector('.counter');
  const comments = document.querySelectorAll('.comment-row');
  let count;

  if (comments.length === 0) {
    count = 0;
  } else {
    count = 0;
    comments.forEach(() => {
      count += 1;
    });
  }

  commentCounter.innerHTML = `(${count})`;
};
