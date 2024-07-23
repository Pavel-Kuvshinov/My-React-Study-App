import { Route, Routes } from 'react-router-dom';
import './app.css';
import BasicPage from '../pages/basicPage';
import NotFoundPage from '../pages/notFoundPage/notFoundPage';
import DetailedItem from '../widgets/detailedItem/detailedItem';

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
