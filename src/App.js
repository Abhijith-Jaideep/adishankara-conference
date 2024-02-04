import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ImportantDates from './components/ImportantDates/ImportantDates';
import AdvisoryCommittee from './components/Committee/AdvisoryCommittee';
import ProgramCommittee from './components/Committee/ProgramCommittee';
import OrganizingCommittee from './components/Committee/OrganizingCommittee';
function App() {
  return (
    <div>
      <Hero />
      <AboutConf />
      <AboutCollege />
      <ImportantDates />
      <AdvisoryCommittee />
      <ProgramCommittee />
      <OrganizingCommittee />
      <Footer />
    </div>
  );
}

export default App;
