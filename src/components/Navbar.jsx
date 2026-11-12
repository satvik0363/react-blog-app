import { NavLink } from 'react-router-dom';

const navPostIds = [1, 2, 3, 4, 5];

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end>Home</NavLink>
            {navPostIds.map((id) => (
                <NavLink key={id} to={`/posts/${id}`}>
                    Post {id}
                </NavLink>
            ))}
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}
export default Navbar;
