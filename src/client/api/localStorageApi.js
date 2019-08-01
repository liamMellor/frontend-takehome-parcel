
const LocalStorage = window.localStorage;
const STORAGE_KEY = 'Gem_Favorites';

const localStorageApi = {

    set: (favorites) => {
        LocalStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    },

    get:() => {
        const favorites = LocalStorage.getItem(STORAGE_KEY);
        return favorites !== null ? JSON.parse(favorites) : {};
    },

};

export default localStorageApi;
