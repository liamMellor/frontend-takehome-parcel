import localStorageApi from './localStorageApi';

const favorites = localStorageApi.get();

const favoritesApi = {

    set: (gem) => {
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
    }

};

export default favoritesApi;
