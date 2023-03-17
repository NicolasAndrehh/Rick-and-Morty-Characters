const itemsCounter = () => {
  const numberItemsElement = document.querySelector('.number-items');
  const results = document.querySelectorAll('.character-card');
  let cont;

  if (results.length === 0) {
    cont = 0;
  } else {
    cont = 0;
    results.forEach(() => {
      cont += 1;
    });
  }

  numberItemsElement.textContent = ` (${cont})`;
};

export default itemsCounter;