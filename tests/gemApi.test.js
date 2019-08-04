import { search } from '../src/client/api/gemApi';
// const { search } = require(`../src/client/api/gemApi`);

test(`Performs a search for query 'Liam' and returns results`, () => {
    return search('Liam').then(data => {
        expect(data.length).toBeGreaterThan(0);
    });
});

test(`Performs a search with empty string query and returns no results`, () => {
    return search('').then(data => {
        expect(data.length).toEqual(0);
    });
});
