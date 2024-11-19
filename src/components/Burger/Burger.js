import { Link, useLocation } from 'react-router-dom';
import './Burger.scss';
import { useState, useEffect } from 'react';

const Burger = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
       setShow(false);
    }, [location.pathname])

    const handleBurgerClick = () => {
        setShow(!show);
    }

    return (
        <>
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
        </>
    )
}

export default Burger;