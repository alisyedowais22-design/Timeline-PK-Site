import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './GovernmentSolutionPage.css';

const data = {
  title: 'Government',
  heroImage: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop',
  tagline: 'Accountable Fleets. Transparent Operations.',
  overview:
    'Government fleet management demands transparency, accountability, and cost efficiency. From municipal vehicles to law enforcement fleets, Timeline Telematics provides the audit trail, compliance tools, and real-time visibility that government agencies need to operate responsibly.',
  challenges: [
    'Unauthorized use of government vehicles',
    'Lack of transparency and public accountability',
    'High fuel costs and budget pressures',
    'Compliance with government fleet regulations',
    'Difficulty managing multi-department fleets',
  ],
  solutions: [
    { icon: '📋', title: 'Full Audit Trail', desc: 'Every trip, driver, route, and event is logged automatically. Tamper-proof records support compliance audits and public accountability.' },
    { icon: '🔒', title: 'Unauthorized Use Detection', desc: 'After-hours movement alerts, ignition notifications, and driver ID tags ensure government vehicles are only used for official purposes.' },
    { icon: '💰', title: 'Cost Reduction Reports', desc: 'Identify fuel waste, excessive idling, and inefficient routing. Provide department heads with data to drive budget savings.' },
    { icon: '👤', title: 'Driver ID & Accountability', desc: 'RFID driver ID tags assign every trip to a specific driver. No shared vehicle confusion — complete individual accountability.' },
    { icon: '📊', title: 'Multi-Department Dashboard', desc: 'Manage police, municipal, utility, and administrative fleets from one platform with department-level access controls.' },
    { icon: '📍', title: 'Geofence Compliance Zones', desc: 'Define operational areas for different departments. Alert supervisors when vehicles operate outside authorized zones.' },
  ],
  benefits: [
    { stat: '35%', label: 'Reduction in Unauthorized Use' },
    { stat: '20%', label: 'Lower Fuel Expenditure' },
    { stat: '100%', label: 'Trip Audit Compliance' },
    { stat: '30%', label: 'Improved Accountability' },
  ],
  products: ['VL808', 'VL802', 'GT06N 4G', 'JC261'],
};

const GovernmentSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="government-solution-page" />;
};

export default GovernmentSolutionPage;