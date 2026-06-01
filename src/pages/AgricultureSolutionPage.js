import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './AgricultureSolutionPage.css';

const data = {
  title: 'Agriculture',
  heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80',
  tagline: 'Smart Farming Starts with Smart Tracking.',
  overview:
    'Agricultural operations involve tractors, harvesters, irrigation vehicles, and transport trucks spread across vast, often remote farmland. Timeline Telematics gives farm operators real-time visibility over their entire machinery fleet, helping reduce theft, optimize fuel use, and plan seasonal operations more efficiently.',
  challenges: [
    'Tracking machinery across vast remote farmland',
    'Equipment theft and unauthorized access',
    'High fuel consumption during peak seasons',
    'Maintenance scheduling for aging machinery',
    'Coordinating harvest transport and logistics',
  ],
  solutions: [
    { icon: '🚜', title: 'Farm Machinery Tracking', desc: 'Track tractors, harvesters, and sprayers across your entire farm. Know equipment location, status, and hours operated at all times.' },
    { icon: '🔐', title: 'Equipment Theft Prevention', desc: 'Long-life magnetic asset trackers attach to any machinery. Motion alerts and geofence notifications protect high-value equipment around the clock.' },
    { icon: '⛽', title: 'Fuel Usage Monitoring', desc: 'Monitor fuel consumption per machine and identify inefficiencies during plowing, harvesting, and transport operations.' },
    { icon: '🌡️', title: 'Temperature-Sensitive Transport', desc: 'Monitor refrigerated transport for perishable crops, dairy, and livestock. Ensure product quality from farm to market.' },
    { icon: '⏱️', title: 'Engine Hours & Maintenance', desc: 'Track actual machine runtime and schedule service at the right intervals — preventing costly breakdowns during critical harvest seasons.' },
    { icon: '🗺️', title: 'Seasonal Route Planning', desc: 'Optimize harvest transport routes, field access paths, and delivery schedules to maximize efficiency during peak seasons.' },
  ],
  benefits: [
    { stat: '50%', label: 'Reduction in Equipment Theft' },
    { stat: '20%', label: 'Lower Fuel Costs' },
    { stat: '30%', label: 'Better Machine Utilization' },
    { stat: '25%', label: 'Fewer Maintenance Breakdowns' },
  ],
  products: ['LL303PRO', 'LL301', 'VL110C', 'VG03'],
};

const AgricultureSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="agriculture-solution-page" />;
};

export default AgricultureSolutionPage;