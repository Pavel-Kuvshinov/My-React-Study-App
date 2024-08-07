import { Route, Routes } from 'react-router-dom';
import './app.css';
import BasicPage from '../pages/basicPage';
import NotFoundPage from '../pages/notFoundPage/notFoundPage';
import ItemsSection from '../widgets/itemsSection/itemsSection';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<BasicPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
