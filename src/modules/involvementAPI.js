export default class InvolvementAPI {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = 'hWosAqiVeXtujgpmRoG5';
  }

  async getLikes() {
    try {
      const response = await fetch(`${this.baseURL}apps/${this.appId}/likes`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }

  async addLike(itemId) {
    try {
      const response = await fetch(`${this.baseURL}apps/${this.appId}/likes`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }
}