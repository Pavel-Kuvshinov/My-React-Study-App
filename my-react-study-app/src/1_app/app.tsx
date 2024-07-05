import { Component } from 'react';

import './app.css';
import Header from '../4_widgets/header/header';
import MainSection from '../4_widgets/mainSection/mainSection';

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
