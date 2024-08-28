import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style/fonts.css';
import './style/style.css';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import CollectionsSection from './pages/CollectionsSection';
import CreateAndSellSection from './pages/CreateAndSellSection';
import ProfileSection from './pages/ProfileSection';
import Footer from './pages/Footer';

function App() {

  return (
    <div className='container pt-2'>
      <Header />
      <div className="m-0 p-0"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        tabIndex="0"
        >
        <HeroSection />
        <CollectionsSection />
        <CreateAndSellSection />
        <ProfileSection />
        <Footer />
      </div>
    </div>
  );
}

export default App
