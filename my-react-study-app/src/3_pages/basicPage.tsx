import { useCallback, useEffect, useState } from 'react';

import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';
import ErrorSection from '../4_widgets/errorSection/errorSection';
import getRequestFropApi from '../5_features/apiRequests';
import ErrorBoundary from '../4_widgets/errorBoundary/errorBoundary';
import Loader from '../4_widgets/loader/loader';
import { BasicApiRequest, CharecterRequest, EpisodeRequest, LocationRequest, ApiRequest } from '../7_shared/types';

export default function BasicPage() {
    const [currentRequest, setCurrentRequest] = useState(
        `${typeof localStorage.getItem('request') === 'string' ? localStorage.getItem('request') : ''}`
    );
    const [header, setHeader] = useState('');
    const [items, setItems] = useState(
        [] as [string, string][] | CharecterRequest[] | LocationRequest[] | EpisodeRequest[]
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [dataRequest, setDataRequest] = useState({} as BasicApiRequest | ApiRequest);

    const handleCurrentRequest = useCallback(async (request: string) => {
        localStorage.setItem('request', request);
        let newRequest = request;
        if (request === '') {
            newRequest = '';
            localStorage.setItem('header', '');
        }
        if (
            (localStorage.getItem('header') === 'location' && !request.includes('?')) ||
            (localStorage.getItem('header') === 'character' && !request.includes('?')) ||
            (localStorage.getItem('header') === 'episode' && !request.includes('?'))
        ) {
            newRequest = `${localStorage.getItem('header')}/?name=${request}`;
        }
        setLoading(true);
        try {
            const newDataRequest = await getRequestFropApi(newRequest);
            setCurrentRequest(newRequest);
            setDataRequest(newDataRequest);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        handleCurrentRequest(currentRequest);
    }, [handleCurrentRequest, currentRequest]);

    useEffect(() => {
        setLoading(false);
        setError(false);
        if (currentRequest !== '') {
            const data = dataRequest as ApiRequest;
            const dataItems = data.results as CharecterRequest[] | LocationRequest[] | EpisodeRequest[];
            let headerNew = currentRequest;
            if (currentRequest.indexOf('/') !== -1) {
                headerNew = currentRequest.slice(0, currentRequest.indexOf('/'));
            }
            localStorage.setItem('header', headerNew);
            setHeader(headerNew);
            setItems(dataItems);
        } else {
            const data = dataRequest as BasicApiRequest;
            setHeader(currentRequest);
            setItems(Object.entries(data));
        }
    }, [dataRequest]);

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <ErrorBoundary handleRequest={handleCurrentRequest}>
                    <Header handleRequest={handleCurrentRequest} />
                    {error === true ? <ErrorSection /> : <MainSection header={header} items={items} />}
                </ErrorBoundary>
            )}
        </>
    );
}
