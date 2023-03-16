/* export default class InvolvementApi {
  constructor(id) {
    this.id = id;
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hWosAqiVeXtujgpmRoG5/comments';
  }

  async getComments() {
    try {
      const response = await fetch('${this.url}${itemId}');
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
      const response = await fetch('${this.url}${itemId}', {
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

*/
import refresh from './commentDisplay'

export default class InvolvementApi {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = 'hWosAqiVeXtujgpmRoG5';
  }

  async getComments(id) {
    try {
      console.log(id)
      const response = await fetch(`${this.baseURL}apps/${this.appId}/comments?item_id=${id}`);
      console.log(response.json())
       if (!response.ok) {
        console.log(response)
        throw new Error(`Error: ${response.statusText}`);
      }
      const comments = await response.json();
      refresh(comments)
      console.log(comments)
      return comments;
    } catch (error) {
      throw new Error(`Error:${error}`);
    }  
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
