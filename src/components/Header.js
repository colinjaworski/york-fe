import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className = "header">
            <nav>
                <ul className = "links">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/login">Log In</Link>
                    </li>
                    <li>
                        <Link to ="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;