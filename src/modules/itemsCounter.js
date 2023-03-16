const itemsCounter = () => {
  const numberItemsElement = document.querySelector('.number-items');
  const results = document.querySelectorAll('.character-card');
  let cont = 0;

  results.forEach(() => {
    cont += 1;
  });

  numberItemsElement.textContent = ` (${cont})`;
};

export default itemsCounter;