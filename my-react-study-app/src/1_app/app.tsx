import { Component } from 'react';

import './app.css';
import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';
import ErrorSection from '../4_widgets/errorSection/errorSection';
import getRequestFropApi from '../5_features/apiRequests';
import ErrorBoundary from '../4_widgets/errorBoundary/errorBoundary';
import Loader from '../4_widgets/loader/loader';
import { BasicRequest, BookRequest, CharecterRequest, HouseRequest } from '../7_shared/types';

class App extends Component {
    state = {
        currentRequest: `${typeof localStorage.getItem('request') === 'string' ? localStorage.getItem('request') : ''}`,
        header: '',
        items: [],
        loading: true,
        error: false,
    };

    dataRequest: {
        header: string;
        result: BasicRequest | BookRequest[] | CharecterRequest[] | HouseRequest[];
    } | null = null;

    componentDidMount() {
        this.handleCurrentRequest(this.state.currentRequest);
        window.addEventListener('storage', () => {
            if (this.dataRequest?.header.includes('/')) {
                const res = new Array(this.dataRequest!.result);
                this.setState({
                    currentRequest: this.dataRequest!.header,
                    header: this.dataRequest!.header,
                    items: res,
                    loading: false,
                    error: false,
                });
            } else {
                this.setState({
                    currentRequest: this.dataRequest!.header,
                    header: this.dataRequest!.header,
                    items: this.dataRequest!.result,
                    loading: false,
                    error: false,
                });
            }
        });
    }

    checkRequest = (request: string) => {
        let newRequest = request;
        if (this.state.header && this.state.header !== '') {
            if (this.state.items.find((item: BookRequest | CharecterRequest | HouseRequest) => item.name === request)) {
                const elem: BookRequest | CharecterRequest | HouseRequest | undefined = this.state.items.find(
                    (item: BookRequest | CharecterRequest | HouseRequest) => item.name === request
                );
                newRequest = this.state.header + elem!.url.slice(elem!.url.lastIndexOf('/'));
            }
        }
        return newRequest;
    };

    handleCurrentRequest = async (request: string) => {
        const newRequest = this.checkRequest(request);
        localStorage.setItem('request', newRequest);
        this.setState({
            loading: true,
        });
        try {
            this.dataRequest = await getRequestFropApi(newRequest);
            await window.dispatchEvent(new Event('storage'));
        } catch (error) {
            this.setState({
                loading: false,
                error: true,
            });
        }
    };

    render() {
        if (this.state.loading) {
            return <Loader />;
        }
        return (
            <ErrorBoundary handleRequest={this.handleCurrentRequest}>
                <Header handleRequest={this.handleCurrentRequest} />
                {this.state.error === true ? (
                    <ErrorSection />
                ) : (
                    <MainSection header={this.state.header} items={this.state.items} />
                )}
            </ErrorBoundary>
        );
    }
}

export default App;
