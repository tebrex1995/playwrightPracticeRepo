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

export { EXISTING_USER, VALID_USER };
