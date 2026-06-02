import React from 'react';

import Hero from '../components/Hero';
import FleetOverview from '../components/FleetOverview';
import TrustBadges from '../components/TrustBadges';
import StatsSection from '../components/StatsSection';
import Solutions from '../components/Solutions';
import Services from '../components/services';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FleetOverview />
      <Solutions />
      <StatsSection />
      <TrustBadges />
      <CTASection />
    </>
  );
};

export default HomePage;