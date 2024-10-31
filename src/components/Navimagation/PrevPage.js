import { Link, useLocation } from "react-router-dom";
import './navimagation.scss';
import symbol from '../../assets/img/prev.png';

const PrevPage = () => {
    const location = useLocation();
    return (<Link to={
            location.pathname === '/' && '/contact' ||
            location.pathname === '/profile' && '/' ||
            location.pathname === '/projects' && '/profile' ||
            location.pathname === '/contact' && '/projects'
        } className="page-nav">
            <img src={symbol} alt="prev" className="chevron" />
        </Link>)
}

export default PrevPage;