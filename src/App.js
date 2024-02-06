import React from 'react'
import AboutCollege from './components/AboutCollege/AboutCollege';
import AboutConf from './components/AboutConf/AboutConf';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ImportantDates from './components/ImportantDates/ImportantDates';
import AdvisoryCommittee from './components/Committee/AdvisoryCommittee';
import ProgramCommittee from './components/Committee/ProgramCommittee';
import OrganizingCommittee from './components/Committee/OrganizingCommittee';
import CallForPaper from './components/CallForPaper/CallForPaper';
import PreConferenceWorkshop from './components/PreconferenceWorkshop/PreConferenceWorkshop';
import Speakers from './components/Speakers/Speakers';
function App() {
  return (
    <div>
      <Hero />
      <AboutConf />
      <AboutCollege />
      <ImportantDates />
      <CallForPaper/>
      <AdvisoryCommittee />
      <ProgramCommittee />
      <OrganizingCommittee />
      <PreConferenceWorkshop/>
      <Speakers/>
      <Footer />
    </div>
  );
}

export default App;
