
const LocalStorage = window.localStorage;
const STORAGE_KEY = 'Gem_Favorites';

/*
* Interface for browser Local Storage
* Used for saving favorited gem search results
* Values in Local Storage must be stored as strings
*/
const localStorageApi = {

    set: (favorites) => {
        LocalStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    },

    get:() => {
        const favorites = LocalStorage.getItem(STORAGE_KEY);
        // If there are no favorites return an empty object instead of null
        return favorites !== null ? JSON.parse(favorites) : {};
    },

};

export default localStorageApi;
