import { API_ENDPOINTS } from '../../../fixtures/http';

export class LoginAPI {
  constructor(page, token = '') {
    this.page = page;
    this.token = token;
  }

  async loginViaApi(payload) {
    const response = await this.page.request.post(API_ENDPOINTS['API_LOGIN'], {
      headers: { Accept: 'application/json' },
      data: payload,
    });

    const responseJson = await response.json();
    return responseJson;
  }

  //Get token
  async getToken() {
    return this.token;
  }
}
