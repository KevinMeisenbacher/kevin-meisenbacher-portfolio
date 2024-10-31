import './Footer.scss';
import github from '../../assets/img/github.png';
import linkedIn from '../../assets/img/linkedIn.png';

const Footer = () => {
    return (
        <footer>
            <img 
                src={github} 
                href="https://www.github.com/KevinMeisenbacher" 
                alt="GitHub Link" 
            />
            <img 
                src={linkedIn} 
                href="https://www.linkedin.com/in/kevin-meisenbacher" 
                alt="GitHub Link" 
            />
        </footer>
    )
}

export default Footer;