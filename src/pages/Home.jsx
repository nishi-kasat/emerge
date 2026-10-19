import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EducationalPathways from '../components/home/EducationalPathways';
import FieldsOfStudy from '../components/home/FieldsOfStudy';
import FounderSection from '../components/home/FounderSection';
import GuidanceProcess from '../components/home/GuidanceProcess';
import StudyDestinationsSection from '../components/home/StudyDestinationsSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  useEffect(() => {
    document.title = "Emerge India & Overseas | Your Global Education Partner";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <EducationalPathways />
      <FieldsOfStudy />
      <FounderSection />
      <GuidanceProcess />
      <StudyDestinationsSection />
      <FinalCTA />
    </div>
  );
}
