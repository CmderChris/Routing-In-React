import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav className='nav justify-content-center p-2 mb-5'>
            <Link to="/" className='btn btn-outline-primary mx-2'>Home</Link>
            <Link to="/films" className='btn btn-outline-primary mx-2'>Films</Link>
            <Link to="/people" className='btn btn-outline-primary mx-2'>People</Link>
        </nav>
    )
}

export default NavBar;