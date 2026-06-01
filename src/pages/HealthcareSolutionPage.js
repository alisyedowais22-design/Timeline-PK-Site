import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './HealthcareSolutionPage.css';

const data = {
  title: 'Healthcare',
  heroImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=80',
  tagline: 'Every Second Counts. Track Every Vehicle.',
  overview:
    'Healthcare fleets — ambulances, medical supply vehicles, blood bank transporters, and mobile clinics — operate under conditions where delays have life-or-death consequences. Timeline Telematics ensures healthcare operators have instant visibility, temperature-controlled cargo monitoring, and driver safety tools.',
  challenges: [
    'Response time optimization for emergency vehicles',
    'Temperature-sensitive medical supply integrity',
    'Driver fatigue in 24/7 emergency operations',
    'Vehicle availability and dispatch management',
    'Compliance with medical transport regulations',
  ],
  solutions: [
    { icon: '🚑', title: 'Emergency Dispatch Optimization', desc: 'Real-time location of all vehicles enables dispatchers to assign the nearest available unit instantly, cutting response times.' },
    { icon: '🌡️', title: 'Cold Chain Temperature Monitoring', desc: 'Monitor blood bank, vaccine, and pharmaceutical cargo temperatures in transit. Instant alerts on temperature excursions.' },
    { icon: '😴', title: 'Driver Fatigue Detection', desc: 'DMS AI monitors driver alertness and triggers warnings before fatigue causes accidents — critical for overnight shifts.' },
    { icon: '📍', title: 'Live Fleet Visibility', desc: 'Hospital dispatch sees every vehicle location, status, and ETA on a single screen for faster, smarter coordination.' },
    { icon: '📋', title: 'Compliance & Audit Trail', desc: 'Automatic logging of routes, times, temperatures, and driver behavior supports regulatory reporting and audits.' },
    { icon: '🔔', title: 'SOS & Panic Alerts', desc: 'Drivers can trigger SOS alerts silently. Dispatch receives immediate location and vehicle data for rapid response.' },
  ],
  benefits: [
    { stat: '40%', label: 'Faster Emergency Response' },
    { stat: '100%', label: 'Cold Chain Compliance' },
    { stat: '30%', label: 'Fewer Driver Incidents' },
    { stat: '25%', label: 'Reduction in Fuel Waste' },
  ],
  products: ['VL802', 'JC261', 'LL303PRO', 'GT06N 4G'],
};

const HealthcareSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="healthcare-solution-page" />;
};

export default HealthcareSolutionPage;