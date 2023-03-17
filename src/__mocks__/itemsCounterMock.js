const itemsCounter = (items) => {
  let cont = 0;

  items.forEach(() => {
    cont += 1;
  });

  return cont;
};

export default itemsCounter;