import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [isActive, setIsActive] = useState('');

    const currentPath = window.location.pathname;
    useEffect(() => {
        setIsActive(currentPath);
    }, [currentPath]);

    return (
        <header>
            <h1>
                <NavLink className={currentPath === '/' ? 'home active' : 'home notActive'} to="/">
                    GamesPlay
                </NavLink>
                {user.email && <span style={{ 
                 fontSize: '20px',
                 marginLeft: '100px',
                 fontFamily: 'Lato, sans-serif'
                 }}>
                 Welcome, {user.email}!
                 </span>}
            </h1>
            <nav>
                {user.email
                    ?
                    < div id="user">
                        <NavLink to="/catalog" className={currentPath === '/catalog' ? '.active' : 'notActive'}>All games</NavLink>
                        <NavLink to="/create" className={isActive === '/create' ? '.active' : 'notActive'}>Create Game</NavLink>
                        <NavLink to="/logout" className={currentPath === '/logout' ? '.active' : 'notActive'}>Logout</NavLink>
                    </div>
                    :
                    <div id="guest">
                        <NavLink to="/catalog" className={currentPath === '/catalog' ? '.active' : 'notActive'}>All games</NavLink>
                        <NavLink to="/login" className={currentPath === '/login' ? '.active' : 'notActive'}>Login</NavLink>
                        <NavLink to="/register" className={currentPath === '/register' ? '.active' : 'notActive'}>Register</NavLink>
                    </div>}

            </nav>
        </header >
    )
}

export default Header;