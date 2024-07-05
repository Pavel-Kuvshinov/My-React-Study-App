import { Component } from 'react';

import './app.css';
import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
    render() {
        return (
            <>
                <Header />
                <MainSection />
            </>
        );
    }
}

export default App;
