
/*
* Generic and lightweight wrapper for native "fetch". Would be separated to own module as api grows
*
* @param baseUrl (string) the url to call
* @param queryParams (object) query parameters to append to request
* @return response (promise) the fetched response converted to json
*/
const fetchWrapped = (baseUrl, queryParams) => {
    const url = new URL(baseUrl);
    Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
    return fetch(url).then(response => {
        return response.json();
    });
};

/*
* Interface for the Ruby Gem search API
*
* @param searchQuery (string) value to query Ruby Gem API with
* @return response (promise) Ruby Gem API list of gems matching passed query
*/
export const search = (searchQuery) => {
    const rubyGemSearchUrl = 'http://localhost:3000/api/v1/search.json';
    const queryParams = { query: searchQuery, };
    return fetchWrapped(rubyGemSearchUrl, queryParams);
};
