import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';
import resume from '../../assets/Kevin_Meisenbacher.pdf';

const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
       setShow(false);
    }, [location.pathname])

    const handleBurgerClick = () => {
        setShow(!show);
    }

    return <header>
        <div className='header-title'>
            <h1>Kevin Meisenbacher</h1>
        </div>
        <div className='site-links'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <a href={resume} target='_blank'>Resume</a>
        </div>
        <div className='burger__bun' onClick={() => handleBurgerClick()}>
            <span className='burger__garnish'></span>
            <span className='burger__garnish'></span>
            <span className='burger__garnish'></span>
        </div>
        {show && <div className='burger__contents'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>}
    </header>
}

export default Header;