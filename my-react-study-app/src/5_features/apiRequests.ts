const getRequestFropApi = (headers: string) => {
    return fetch(`https://www.anapioficeandfire.com/api/${headers}`, {
        method: 'GET',
    }).then((response) => response.json());
};

export default getRequestFropApi;
