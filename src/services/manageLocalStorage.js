/**
 * Checks if local storage is available in the current browser.
 * @returns {boolean} True if local storage is available, false otherwise.
 */
const isStorageAvailable = () => {
    let localStorage;
    try {
        localStorage = window.localStorage;
        if (localStorage) return true
    } catch (e) {
        return false;
    }
};
//=================================
/**
 * Gets data from local storage for a given key.
 * @param {string} key - The key to retrieve data for.
 * @returns {string|null} The data stored in local storage for the given key, or null if no data is found.
 */
export const getFromLocalStorage = (key) => {
    if (isStorageAvailable()) {
        return localStorage.getItem(key);
    } else {
        return null;
    }
};
//==============================
/**
 * Sets data to local storage for a given key.
 * @param {string} key - The key to set data for.
 * @param {any} newData - The data to store in local storage.
 */
export const setToLocalStorage = (key, newData) => {
    if (isStorageAvailable()) {
            localStorage.setItem(key, JSON.stringify(newData));
    }
};
//=========================
/**
 * Clears all data from local storage.
 */
export const clearLocalStorage = () => {
    if (!isStorageAvailable()) return;
    localStorage.clear();
};
//============================
/**
 * Removes data from local storage for a given key.
 * @param {string} key - The key to remove data for.
 */
export const removeFromLocalStorage = (key) => {
    if (!isStorageAvailable()) return;
    localStorage.removeItem(key);
};