import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import ImportantDates from './components/ImportantDates/ImportantDates';

function App() {
  return (
   <div>
    <Hero/>
    <AboutConf />
    <AboutCollege/>
    <ImportantDates />
    <Footer/>
   </div>
  );
}

export default App;
