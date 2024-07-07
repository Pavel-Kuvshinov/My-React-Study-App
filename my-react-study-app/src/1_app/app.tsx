import { Component } from 'react';

import './app.css';
import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';

class App extends Component {
    state = {
        currentRequest: `${typeof localStorage.getItem('request') === 'string' ? localStorage.getItem('request') : ''}`,
    };

    handleCurrentRequest = (newRequest: string) => {
        this.setState({
            currentRequest: newRequest,
        });
        localStorage.setItem('request', newRequest);
    };

    render() {
        return (
            <>
                <Header handleRequest={this.handleCurrentRequest} />
                <MainSection currentRequest={this.state.currentRequest} />
            </>
        );
    }
}

export default App;
