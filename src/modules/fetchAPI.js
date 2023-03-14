const getCharacters = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const characters = await response.json();
    return characters;
  } catch (error) {
    return error;
  }
};

export default getCharacters;