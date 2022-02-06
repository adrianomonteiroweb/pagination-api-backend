const frisby = require('frisby');

const URL = 'https://pagination-api-backend.herokuapp.com/';

describe('Test the api root route.', () => {
  it.skip('Must return documentation.', async () => {
    await frisby
      .get(URL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        
        expect(data).toContainEqual(JSON.parse(body));
      })
  });
});
