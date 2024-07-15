import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Service from './Components/Service';
import Project from './Components/Project';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SubHeader />
      <Service />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
