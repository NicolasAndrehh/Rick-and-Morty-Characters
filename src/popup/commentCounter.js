export const countComments = async(comments) => {
    const commentCounter = document.querySelector('.counter');
    const displayCount = await comments.length
    comments.forEach(() => {
        commentCounter.innerHTML = `(${displayCount})`;
    });
};
