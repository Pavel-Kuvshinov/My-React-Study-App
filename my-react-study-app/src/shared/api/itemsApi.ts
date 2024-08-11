import { API_BASE_URL } from '../constants';

import { ApiRequest, ElementRequest } from '../types';

export const fetchDataItems = async (
    section: string = '',
    page: number = 1,
    name: string = ''
): Promise<ApiRequest> => {
    let baseUrl = `${API_BASE_URL}`;

    section === '' ? (baseUrl += `/${section}`) : (baseUrl += `/${section}/?page=${page}&name=${name}`);
    try {
        const response = await fetch(baseUrl, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Network response was not ok boom');
        }
        const data: ApiRequest = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error - ${error}`);
    }
};

export const fetchDataItem = async (section: string, id: number = 1): Promise<ElementRequest> => {
    const baseUrl = `${API_BASE_URL}/${section}/${id}`;

    try {
        const response = await fetch(baseUrl, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: ElementRequest = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error - ${error}`);
    }
};
