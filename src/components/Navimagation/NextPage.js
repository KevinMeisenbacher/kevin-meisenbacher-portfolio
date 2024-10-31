import { Link, useLocation } from "react-router-dom";
import './navimagation.scss';
import symbol from '../../assets/img/next.png';

const NextPage = () => {
    const location = useLocation();
    return (<div className="page-nav">
        <Link to={
            location.pathname === '/' && '/profile' ||
            location.pathname === '/profile' && '/projects' ||
            location.pathname === '/projects' && '/contact' ||
            location.pathname === '/contact' && '/'
        } className="page-nav">
            <img src={symbol} alt="next" className="chevron" />
        </Link>
    </div>)
}

export default NextPage;