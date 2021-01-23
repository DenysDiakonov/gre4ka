export const sendRequest = (url, method) => {
    return fetch(url, { method: method }).then((response) => response.json());
};
