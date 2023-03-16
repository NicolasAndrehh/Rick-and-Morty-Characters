
import refresh from './commentDisplay'

export default class InvolvementApi {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = 'hWosAqiVeXtujgpmRoG5';
  }
  async getComments(id) {
    const response = await fetch(`${this.baseURL}apps/${this.appId}/comments?item_id=${id}`);
     if (!response.ok) {
      console.log(response)
      throw new Error(`Error: ${response.statusText}`);
    }
    const comments = await response.json();
    refresh(comments)
    return comments;
  }
  async addComments(id, user, usercomment) {
    try {
      const response = await fetch(`${this.baseURL}apps/${this.appId}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: user,
          comment: usercomment,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      console.log(response.ok)
      return response.ok;
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }
}