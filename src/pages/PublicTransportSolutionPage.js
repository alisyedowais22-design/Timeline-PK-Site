import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './PublicTransportSolutionPage.css';

const data = {
  title: 'Public Transport',
  heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1400&q=80',
  tagline: 'Every Passenger. Every Route. On Time.',
  overview:
    'Public transport operators face unique pressures — tight schedules, passenger safety obligations, regulatory compliance, and public accountability. Timeline Telematics helps bus and transit operators deliver reliable, safe, and efficient service while reducing operational costs.',
  challenges: [
    'Schedule adherence and on-time performance',
    'Passenger safety and driver accountability',
    'Fuel and maintenance cost management',
    'Regulatory compliance and reporting',
    'Coordinating large mixed-vehicle fleets',
  ],
  solutions: [
    { icon: '🕐', title: 'Schedule Adherence Monitoring', desc: 'Track buses against timetables in real time. Identify chronic delays, optimize routes, and report on-time performance automatically.' },
    { icon: '📹', title: 'Passenger & Cabin Monitoring', desc: 'AI dashcams monitor driver behavior and cabin conditions, ensuring passenger safety and providing evidence in incident disputes.' },
    { icon: '📊', title: 'Fleet Analytics Dashboard', desc: 'Central visibility across all vehicles, routes, and operators. Generate compliance reports with a single click.' },
    { icon: '⚠️', title: 'Driver Fatigue Detection', desc: 'DMS AI monitors driver eyes and head position to detect drowsiness and distraction, triggering immediate in-cab alerts.' },
    { icon: '🔧', title: 'Preventive Maintenance', desc: 'Track vehicle health data to schedule maintenance before breakdowns happen, reducing downtime and repair costs.' },
    { icon: '📍', title: 'Live Passenger Info', desc: 'Real-time location data enables live vehicle tracking apps for passengers, improving satisfaction and trust.' },
  ],
  benefits: [
    { stat: '20%', label: 'Improvement in On-Time Rates' },
    { stat: '35%', label: 'Reduction in Incidents' },
    { stat: '18%', label: 'Fuel Cost Savings' },
    { stat: '50%', label: 'Faster Incident Resolution' },
  ],
  products: ['JC371', 'JC450', 'VL802', 'VL110C'],
};

const PublicTransportSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="public-transport-solution-page" />;
};

export default PublicTransportSolutionPage;