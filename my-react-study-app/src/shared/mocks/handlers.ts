import { http, HttpResponse } from 'msw';
import { mockCharactersData } from './mockedData/cards';
import { API_BASE_URL } from '../constants';

export const handlers = [
    http.get(`${API_BASE_URL}/character`, () => {
        return HttpResponse.json(mockCharactersData);
    }),
    http.get(`${API_BASE_URL}/character/:id`, () => {
        return HttpResponse.json(mockCharactersData.results[0]);
    }),
];
