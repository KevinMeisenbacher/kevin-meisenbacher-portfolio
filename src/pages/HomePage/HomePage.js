import './HomePage.scss'
import profileCard from '../../assets/img/profile-card.png';

const HomePage = () => {
    return <main className="homepage">
        <img className="profile-card" src={profileCard} alt="Profile Card" />
    </main>
}

export default HomePage;