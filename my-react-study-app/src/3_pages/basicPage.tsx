import { useEffect, useState } from 'react';

import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';
import ErrorSection from '../4_widgets/errorSection/errorSection';
import getRequestFropApi from '../5_features/apiRequests';
import ErrorBoundary from '../4_widgets/errorBoundary/errorBoundary';
import Loader from '../4_widgets/loader/loader';
import {
    BasicApiRequest,
    CharecterRequest,
    EpisodeRequest,
    LocationRequest,
    ApiRequest,
    RequestInfo,
} from '../7_shared/types';

export default function BasicPage() {
    const [currentRequest, setCurrentRequest] = useState(localStorage.getItem('request') ?? '');
    const [header, setHeader] = useState('');
    const [items, setItems] = useState(
        [] as [string, string][] | CharecterRequest[] | LocationRequest[] | EpisodeRequest[]
    );
    const [info, setInfo] = useState({} as RequestInfo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const newRequest = (request: string) => {
        if (request === '') {
            return '';
        }
        if (
            (header === 'location' && !request.includes('page')) ||
            (header === 'character' && !request.includes('page')) ||
            (header === 'episode' && !request.includes('page'))
        ) {
            return `${header}/?name=${currentRequest}`;
        }
        return request;
    };

    const handleCurrentRequest = async () => {
        localStorage.setItem('request', currentRequest);
        setLoading(true);
        try {
            const newRequestData = newRequest(currentRequest);
            const newDataRequest = await getRequestFropApi(newRequestData);
            if (newDataRequest && currentRequest === '') {
                const dataItems = newDataRequest as BasicApiRequest;
                setHeader(currentRequest);
                setItems(Object.entries(dataItems));
                setInfo({} as RequestInfo);
                setError(false);
                setLoading(false);
            }
            if (newDataRequest && currentRequest !== '') {
                let headerNew = currentRequest;
                if (currentRequest.indexOf('/') !== -1) {
                    headerNew = currentRequest.slice(0, currentRequest.indexOf('/'));
                }
                localStorage.setItem('header', headerNew);
                const data = newDataRequest as ApiRequest;
                const dataItems = data.results as CharecterRequest[] | LocationRequest[] | EpisodeRequest[];
                const dataInfo = data.info;
                setHeader(headerNew);
                setItems(dataItems);
                setInfo(dataInfo);
                setError(false);
                setLoading(false);
            }
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleCurrentRequest();
    }, [currentRequest]);

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <ErrorBoundary handleRequest={setCurrentRequest}>
                    <Header handleRequest={setCurrentRequest} />
                    {error === true ? (
                        <ErrorSection />
                    ) : (
                        <MainSection header={header} items={items} info={info} handleRequest={setCurrentRequest} />
                    )}
                </ErrorBoundary>
            )}
        </>
    );
}
