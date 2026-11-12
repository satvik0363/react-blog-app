import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className="logo">
                    <Link to="/">My Blog</Link>
                </h1>
                <Navbar />
            </div>
        </header>
    );
}
