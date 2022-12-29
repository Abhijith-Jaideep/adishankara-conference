import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'

function App() {
  return (
   <div>
    <Hero/>
    <AboutConf />
    <AboutCollege/>
    <Footer/>
   </div>
  );
}

export default App;
