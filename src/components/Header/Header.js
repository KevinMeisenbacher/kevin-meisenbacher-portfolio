import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return <header>
        <div className='header-title'>
            <h1>Kevin Meisenbacher</h1>
        </div>
        <div className='site-links'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </header>
}

export default Header;