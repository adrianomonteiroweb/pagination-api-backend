const frisby = require('frisby');

const URL = 'https://pagination-api-backend.herokuapp.com/pagination';
const APIResponseFiveCase = require('../data/APIResponseFiveCase.json');

describe('Test the api root route.', () => {
  it('Must return an array of numbers in string type.', async () => {
    await frisby
      .post(URL, {
        currentPage: 1,
        numberOfPages: 5,
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        
        expect(json).toBe(APIResponseFiveCase);
      })
  });
});
