const frisby = require('frisby');

const URL = 'https://pagination-api-backend.herokuapp.com/';
const data = require('../data/dataAPI.json');

describe('Test the api root route.', () => {
  it('Must return documentation.', async () => {
    await frisby
      .get(URL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        
        expect(data).toEqual(JSON.parse(body));
      })
  });
});
