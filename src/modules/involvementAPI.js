import refresh from '../popup/commentDisplay.js';
import { countComments } from '../popup/commentCounter.js';

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

  async getComments(id) {
    const response = await fetch(`${this.baseURL}apps/${this.appId}/comments?item_id=${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const comments = await response.json();
    refresh(comments);
    countComments(comments);
    return comments;
  }

  async addLike(itemId) {
    try {
      const response = await fetch(`${this.baseURL}apps/${this.appId}/likes`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: Number(itemId),
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.ok;
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
      return response.ok;
    } catch (error) {
      throw new Error(`Error:${error}`);
    }
  }
}