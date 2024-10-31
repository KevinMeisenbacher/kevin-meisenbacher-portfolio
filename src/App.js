import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import PrevPage from './components/Navimagation/PrevPage';
import NextPage from './components/Navimagation/NextPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className='site-main'>
          <PrevPage />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <NextPage />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
