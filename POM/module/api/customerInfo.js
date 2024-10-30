import { API_ENDPOINTS } from '../../../fixtures/http';

export class CustomerInfo {
  constructor(page, token = '') {
    this.page = page;
    this.token = token;
  }

  async updateBilling(id, payload) {
    const response = await this.page.request.put(
      `${API_ENDPOINTS['API_CUSTOMER']}/${id}/billing-info`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${await this.getToken()}`,
        },
        data: payload,
      }
    );
    const responseJson = await response.json();
    return responseJson;
  }

  async getToken() {
    return this.token;
  }
}
