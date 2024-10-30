import { test, expect } from '@playwright/test';
import { LoginAPI } from '../POM/module/api/loginAPI';
import { EXISTING_USER, UPDATE_BILLING } from '../fixtures/userData';
import { CustomerInfo } from '../POM/module/api/customerInfo';
import { API_MESSAGES } from '../fixtures/pageText';

let loginAPI, customerInfo, userId, authToken;
test.describe('Change billing info with API', () => {
  test.beforeEach('Login with api and store token', async ({ page }) => {
    loginAPI = new LoginAPI(page);
    //Extract data
    const loginResp = await loginAPI.loginViaApi(EXISTING_USER);
    userId = await loginResp.user.id;
    authToken = await loginResp.auth.token;
    customerInfo = new CustomerInfo(page, authToken);
  });

  test('User billing info should be updated successfully', async ({ page }) => {
    const response = await customerInfo.updateBilling(userId, UPDATE_BILLING);
    expect(response.status).toBe(API_MESSAGES['STATUS_SUCCESS']);
    expect(response.message).toBe(API_MESSAGES['BILLING_INFO_SUCCESS']);
    expect(response.billing_info.cardholder).toBe(UPDATE_BILLING['cardholder']);
  });
});
