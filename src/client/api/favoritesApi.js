import localStorageApi from './localStorageApi';

const favorites = localStorageApi.get();

const favoritesApi = {

    set: (gem) => {
        gem.favorite = true;
        favorites[gem.sha] = gem;
        localStorageApi.set(favorites);
    },

    remove: (gem) => {
        delete favorites[gem.sha];
        localStorageApi.set(favorites);
    },

    get: () => {
        // Returns favorites as object for o(1) lookup when checking against search results
        return favorites;
    },

    getArray: () => {
        // Returns favorites converted to array for iteration in UI
        // Object.values would work here but there's no IE support
        return Object.keys(favorites).map(key => favorites[key]);
    }

};

export default favoritesApi;
