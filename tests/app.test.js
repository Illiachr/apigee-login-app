const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  let response = null;

  beforeAll(async () => {
    response = await request(app).post('/api/v1/signin');
  });

  it('should 200 Hello World!', () => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ msg: 'Hello from signin route' });
  });
});
