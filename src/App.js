import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ImportantDates from './components/ImportantDates/ImportantDates';
import IndiaCommittee from './components/Committee/IndiaCommittee';
import AbroadCommittee from './components/Committee/AbroadCommittee';
import Chairs from './components/Chairs/Chairs';
import KeralaCommittee from './components/Committee/KeralaCommittee';
function App() {
  return (
    <div>
      <Hero />
      <AboutConf />
      <AboutCollege />
      <ImportantDates />
      <KeralaCommittee />
      <IndiaCommittee />
      <AbroadCommittee />
      <Chairs />
      <Footer />
    </div>
  );
}

export default App;
