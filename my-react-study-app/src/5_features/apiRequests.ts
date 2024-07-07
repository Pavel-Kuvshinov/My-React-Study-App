import { BasicRequest, BookRequest, CharecterRequest, HouseRequest } from '../7_shared/types';

const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const getRequestFropApi = (headers: string) => {
    return fetch(`https://www.anapioficeandfire.com/api/${headers}`, {
        method: 'GET',
    })
        .then((response) => checkResponse<BasicRequest | BookRequest[] | CharecterRequest[] | HouseRequest[]>(response))
        .then((result) => {
            if (result) return { header: headers, result };
            return Promise.reject(result);
        });
};

export default getRequestFropApi;
