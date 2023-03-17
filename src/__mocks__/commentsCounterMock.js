const countComments = (comments) => {
  let count = 0;
  comments.forEach(() => {
    count += 1;
    // return comments.length;
  });
  return count;
};
export default countComments;