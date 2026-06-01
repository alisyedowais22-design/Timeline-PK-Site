import React from 'react';
import SolutionPageLayout from './SolutionPageLayout';
import './LogisticsSolutionPage.css';

const data = {
  title: 'Logistics & Courier',
  heroImage: 'https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1170&auto=format&fit=crop',
  tagline: 'Deliver More. Spend Less. Stress Never.',
  overview:
    'The logistics and courier industry lives and dies by time. Late deliveries cost customers, wasted fuel costs profit, and idle drivers cost productivity. Timeline Telematics gives logistics operators complete real-time visibility over every vehicle, every route, and every driver — so you can make smarter decisions faster.',
  challenges: [
    'Unpredictable traffic causing late deliveries',
    'High fuel costs from inefficient routing',
    'Unauthorized vehicle use and theft risk',
    'Driver accountability and behavior issues',
    'Difficulty managing large, dispersed fleets',
  ],
  solutions: [
    { icon: '📍', title: 'Real-Time GPS Tracking', desc: 'Know exactly where every vehicle is at every moment. Share live ETAs with customers and dispatch smarter with full fleet visibility.' },
    { icon: '🗺️', title: 'Route Optimization', desc: 'Plan and replay routes to identify inefficiencies. Reduce kilometers driven, cut fuel consumption, and deliver more in less time.' },
    { icon: '⛽', title: 'Fuel Monitoring', desc: 'Track fuel consumption per vehicle, detect sudden drops that indicate theft, and reduce wasteful idling across your fleet.' },
    { icon: '🚨', title: 'Geofence Alerts', desc: 'Set virtual boundaries around depots, delivery zones, and restricted areas. Get instant alerts when vehicles enter or leave.' },
    { icon: '👤', title: 'Driver Behavior', desc: 'Monitor speeding, harsh braking, and rapid acceleration. Score drivers and reward safe behavior with data-backed reports.' },
    { icon: '📹', title: 'AI Dashcam', desc: 'Protect your drivers with video evidence. AI detects fatigue and distraction in real time to prevent accidents before they happen.' },
  ],
  benefits: [
    { stat: '25%', label: 'Reduction in Fuel Costs' },
    { stat: '30%', label: 'Faster Delivery Times' },
    { stat: '40%', label: 'Fewer Accidents' },
    { stat: '15%', label: 'Lower Operating Costs' },
  ],
  products: ['GT06N 4G', 'VL802', 'JC261', 'JC450'],
};

const LogisticsSolutionPage = () => {
  return <SolutionPageLayout data={data} pageClass="logistics-solution-page" />;
};

export default LogisticsSolutionPage;