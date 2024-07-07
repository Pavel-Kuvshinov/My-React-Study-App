import { Component } from 'react';

import './app.css';
import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';
import getRequestFropApi from '../5_features/apiRequests';
import ErrorBoundary from '../6_entities/errorBoundary';
import Loader from '../4_widgets/loader/loader';

class App extends Component {
    state = {
        currentRequest: `${typeof localStorage.getItem('request') === 'string' ? localStorage.getItem('request') : ''}`,
        header: '',
        items: [],
        loading: true,
    };

    async componentDidMount() {
        const memResult = await getRequestFropApi(this.state.currentRequest);
        if (memResult.header.includes('/')) {
            const res = new Array(memResult.result);
            this.setState({
                header: memResult.header,
                items: res,
                loading: false,
            });
        } else {
            this.setState({
                header: memResult.header,
                items: memResult.result,
                loading: false,
            });
        }
    }

    handleCurrentRequest = (newRequest: string) => {
        this.setState({
            currentRequest: newRequest,
        });
        localStorage.setItem('request', newRequest);
    };

    render() {
        if (this.state.loading) {
            return <Loader />;
        }
        return (
            <ErrorBoundary handleRequest={this.handleCurrentRequest}>
                <Header handleRequest={this.handleCurrentRequest} />
                <MainSection header={this.state.header} items={this.state.items} />
            </ErrorBoundary>
        );
    }
}

export default App;
