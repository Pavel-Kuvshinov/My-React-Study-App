import { Link } from 'react-router-dom';
import './notFoundPage.css';

export default function NotFoundPage(): JSX.Element {
    return (
        <main className="notfound">
            <div className="notFound__wrapper">
                <h1 className="notFound-title">Sorry, we can’t find this page</h1>
                <p className="notFound-text">But we have many more things for you to explore.</p>
                <Link className="notFound-button" to="/">
                    back to homepage
                </Link>
            </div>
        </main>
    );
}
