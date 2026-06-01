import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './OilGasSolutionPage.css';

const data = {
  title: 'Oil & Gas',
  heroImage: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop',
  tagline: 'Precision Tracking for High-Stakes Operations.',
  overview:
    "Oil and gas operations run in remote, hazardous, and high-value environments where vehicle tracking is not optional — it's critical. From field vehicles to tankers, Timeline Telematics gives operators complete command over their fleet with tools built for demanding industrial conditions.",
  challenges: [
    'Tracking vehicles in remote, off-grid locations',
    'Fuel theft and unauthorized vehicle use',
    'Driver safety in hazardous environments',
    'Compliance with strict HSE regulations',
    'High cost of unplanned vehicle downtime',
  ],
  solutions: [
    { icon: '🛰️', title: 'Remote Area Tracking', desc: 'GPS tracking with wide-band cellular coverage and satellite backup ensures vehicles are tracked even in the most remote field locations.' },
    { icon: '⛽', title: 'Fuel Theft Prevention', desc: 'Real-time fuel level monitoring with instant alerts for abnormal drops. CAN bus integration reads fuel data directly from the ECU.' },
    { icon: '🚨', title: 'SOS & Emergency Alerts', desc: 'Drivers can trigger silent SOS alerts instantly. Control rooms receive location, speed, and vehicle data automatically.' },
    { icon: '🌡️', title: 'Temperature Monitoring', desc: 'Monitor cargo temperature for chemical and petroleum product transport. Alerts trigger on out-of-range conditions.' },
    { icon: '📋', title: 'HSE Compliance Reporting', desc: 'Automated reports on driver hours, speeding events, and route compliance support HSE regulatory requirements.' },
    { icon: '🔒', title: 'Geofence Security Zones', desc: 'Define restricted zones around wellheads, refineries, and storage depots. Instant alerts on unauthorized access.' },
  ],
  benefits: [
    { stat: '30%', label: 'Reduction in Fuel Theft' },
    { stat: '45%', label: 'Improvement in HSE Compliance' },
    { stat: '20%', label: 'Lower Vehicle Downtime' },
    { stat: '100%', label: 'Remote Fleet Visibility' },
  ],
  products: ['VL110C', 'VL502', 'LL303PRO', 'VL808'],
};

const OilGasSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="oil-gas-solution-page" />;
};

export default OilGasSolutionPage;