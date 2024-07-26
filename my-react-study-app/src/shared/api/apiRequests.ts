import { ApiRequest, BasicApiRequest, ElementRequest } from '../types';

const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const getRequestFropApi = (headers: string) => {
    return fetch(`https://rickandmortyapi.com/api/${headers}`, {
        method: 'GET',
    })
        .then((response) => {
            return checkResponse<BasicApiRequest | ApiRequest | ElementRequest>(response);
        })
        .then((result) => {
            if (result) {
                return result;
            }
            return Promise.reject(result);
        });
};

export default getRequestFropApi;
