import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './ConstructionSolutionPage.css';

const data = {
  title: 'Construction',
  heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
  tagline: 'Track Every Machine. Control Every Site.',
  overview:
    'Construction fleets include everything from excavators and cranes to delivery trucks and supervisor vehicles — spread across multiple job sites. Timeline Telematics gives construction companies real-time control over equipment utilization, theft prevention, and operator accountability.',
  challenges: [
    'Equipment theft and unauthorized use',
    'Tracking assets across multiple job sites',
    'High fuel and equipment operating costs',
    'Operator accountability and safety compliance',
    'Delayed material deliveries impacting schedules',
  ],
  solutions: [
    { icon: '🏗️', title: 'Equipment Asset Tracking', desc: 'Track excavators, cranes, generators, and heavy machinery with battery-powered asset trackers that last years without charging.' },
    { icon: '🔐', title: 'Anti-Theft Geofencing', desc: 'Set security zones around job sites. Instantly alert when machinery moves outside defined boundaries — day or night.' },
    { icon: '⏱️', title: 'Engine Hours Monitoring', desc: 'Track actual machine runtime from the CAN bus. Schedule maintenance based on hours operated, not calendar dates.' },
    { icon: '🗺️', title: 'Multi-Site Fleet View', desc: 'Single dashboard shows all vehicles and equipment across all job sites. Assign, transfer, and track assets with ease.' },
    { icon: '⛽', title: 'Fuel & Idling Reports', desc: 'Identify machines left running unnecessarily. Reduce idle time, cut fuel waste, and lower carbon emissions across your fleet.' },
    { icon: '📹', title: 'Operator Monitoring', desc: 'AI dashcams on site vehicles monitor operator behavior, detect unsafe driving, and provide video evidence for incidents.' },
  ],
  benefits: [
    { stat: '60%', label: 'Reduction in Equipment Theft' },
    { stat: '22%', label: 'Lower Fuel Costs' },
    { stat: '35%', label: 'Better Asset Utilization' },
    { stat: '28%', label: 'Reduction in Downtime' },
  ],
  products: ['LL303PRO', 'LL301', 'VL110C', 'VL502'],
};

const ConstructionSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="construction-solution-page" />;
};

export default ConstructionSolutionPage;