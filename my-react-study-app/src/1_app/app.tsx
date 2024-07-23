import { Route, Routes } from 'react-router-dom';
import './app.css';
import BasicPage from '../3_pages/basicPage';
import NotFoundPage from '../3_pages/notFoundPage/notFoundPage';
import DetailedItem from '../4_widgets/detailedItem/detailedItem';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<BasicPage />}>
                <Route path="character/detail/:id" element={<DetailedItem />} />
                <Route path="episode/detail/:id" element={<DetailedItem />} />
                <Route path="location/detail/:id" element={<DetailedItem />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
