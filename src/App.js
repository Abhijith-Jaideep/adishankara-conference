import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ImportantDates from './components/ImportantDates/ImportantDates';
import KeralaCommittee from './components/Committee/KeralaCommittee';
import IndiaCommittee from './components/Committee/IndiaCommittee';
import AbroadCommittee from './components/Committee/AbroadCommittee';
function App() {
  return (
   <div>
    <Hero/>
    <AboutConf />
    <AboutCollege/>
    <ImportantDates />
    <KeralaCommittee/>
    <IndiaCommittee/>
    <AbroadCommittee/>
    <Footer/>
   </div>
  );
}

export default App;
