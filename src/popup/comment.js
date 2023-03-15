export default class InvolvementApi {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hWosAqiVeXtujgpmRoG5/comments?item_id=item1';
  }

  async getComments() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }

  async addComments(itemId) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }
}
