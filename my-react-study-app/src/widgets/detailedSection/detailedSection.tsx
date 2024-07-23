import { Outlet } from 'react-router-dom';
import './detailedSetion.css';

export default function DetailedSection() {
    return (
        <div className="main__detailed_section">
            <p>detailed section will be here</p>
            <Outlet />
        </div>
    );
}
