import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app/App';
import { Provider } from 'react-redux';
import '../src/shared/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './shared/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
