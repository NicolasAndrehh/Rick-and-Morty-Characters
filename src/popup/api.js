class Api{
    constructor() {
      this.url = 'https://rickandmortyapi.com/api/character';
    }
  
      getCharacter = async () => {
        const { result } = await fetch(this.url).then((response) => response.json())
          .catch((err) => new Error(err));
        return result;
    }
  
}