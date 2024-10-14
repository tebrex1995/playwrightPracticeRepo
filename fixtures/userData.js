import { generateRandomString } from './utils.js';

const VALID_USER = {
  username: generateRandomString(6),
  password: generateRandomString(6),
  email: `${generateRandomString(6)}@email.com`,
};

const EXISTING_USER = {
  email: 'aleksatester@gmail.com',
  password: 'test123',
};

const UPDATE_BILLING = {
  cardholder: `${generateRandomString(5)} ${generateRandomString(4)}`,
  card_type: 'Visa',
  card_number: '4111111111111111',
  cvv: 123,
  card_expiration_date: '12/24',
};

export { EXISTING_USER, VALID_USER, UPDATE_BILLING };
