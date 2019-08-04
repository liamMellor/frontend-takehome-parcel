import localStorageApi from './localStorageApi';

const favorites = localStorageApi.get();

const favoritesApi = {

    set: (gem) => {
        gem.favorite = true;
        favorites[gem.sha] = gem;
        localStorageApi.set(favorites);
        return favorites;
    },

    remove: (gem) => {
        delete favorites[gem.sha];
        localStorageApi.set(favorites);
        return favorites;
    },

    get: () => {
        return favorites;
    },

    getArray: () => {
        // Object.values would work here but there's no IE support
        return Object.keys(favorites).map(key => favorites[key]);
    }

};

export default favoritesApi;
