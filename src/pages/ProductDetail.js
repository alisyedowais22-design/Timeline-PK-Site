import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { QOHO_PRODUCT_DETAILS } from '../data/qohoProductDetails';

const IconSvg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const Icons = {
  gps: (
    <IconSvg>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
    </IconSvg>
  ),
  signal: (
    <IconSvg>
      <path d="M1.5 8.5c5.5-5.5 14.5-5.5 21 0" />
      <path d="M5 12c3.9-3.9 10.1-3.9 14 0" />
      <path d="M8.5 15.5c2.2-2.2 5.8-2.2 7 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </IconSvg>
  ),
  ignition: (
    <IconSvg>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </IconSvg>
  ),
  power: (
    <IconSvg>
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </IconSvg>
  ),
  serial: (
    <IconSvg>
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </IconSvg>
  ),
  wire: (
    <IconSvg>
      <path d="M4 12c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6z" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    </IconSvg>
  ),
  antenna: (
    <IconSvg>
      <line x1="12" y1="12" x2="12" y2="22" />
      <circle cx="12" cy="9" r="3" />
      <path d="M5 5l2 2M17 5l-2 2M2 2l3 3M19 2l-3 3" />
    </IconSvg>
  ),
  geo: (
    <IconSvg>
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
    </IconSvg>
  ),
  speed: (
    <IconSvg>
      <path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12z" />
      <path d="M12 7v5l3 2" />
    </IconSvg>
  ),
  cloud: (
    <IconSvg>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </IconSvg>
  ),
  battery: (
    <IconSvg>
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 11v2" />
      <path d="M6 11v2M10 11v2" />
    </IconSvg>
  ),
  crash: (
    <IconSvg>
      <path d="M12 2 L2 19h20z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </IconSvg>
  ),
  water: (
    <IconSvg>
      <path d="M12 2c0 0-7 9-7 13a7 7 0 0 0 14 0c0-4-7-13-7-13z" />
    </IconSvg>
  ),
  fota: (
    <IconSvg>
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-.18-4.96" />
    </IconSvg>
  ),
  fuel: (
    <IconSvg>
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2" />
    </IconSvg>
  ),
  driver: (
    <IconSvg>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </IconSvg>
  ),
  camera: (
    <IconSvg>
      <path d="M23 7 16 12 23 17z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </IconSvg>
  ),
  adas: (
    <IconSvg>
      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12H7M17 12h2" />
    </IconSvg>
  ),
  motion: (
    <IconSvg>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </IconSvg>
  ),
  lte: (
    <IconSvg>
      <path d="M1.5 8.5c5.5-5.5 14.5-5.5 21 0" />
      <path d="M5 12c3.9-3.9 10.1-3.9 14 0" />
      <path d="M8.5 15.5c2.2-2.2 5.8-2.2 7 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </IconSvg>
  ),
  course: (
    <IconSvg>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconSvg>
  ),
  smalltrk: (
    <IconSvg>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </IconSvg>
  ),
  magnetic: (
    <IconSvg>
      <path d="M6 15V9a6 6 0 0 1 12 0v6" />
      <path d="M3 15h6M15 15h6" />
    </IconSvg>
  ),
  night: (
    <IconSvg>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </IconSvg>
  ),
  sd: (
    <IconSvg>
      <path d="M19 2H9L3 8v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
      <polyline points="9 2 9 8 3 8" />
    </IconSvg>
  ),
  mic: (
    <IconSvg>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </IconSvg>
  ),
  temp: (
    <IconSvg>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </IconSvg>
  ),
  sos: (
    <IconSvg>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </IconSvg>
  ),
  route: (
    <IconSvg>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </IconSvg>
  ),
};

const BASE_PRODUCTS = [
  {
    id: 'gt06n-4g',
    model: 'GT06N 4G',
    name: 'Classic, Reimagined in 4G',
    image: '/products/GT06N 4G.png',
    category: 'Vehicle Tracker',
    tagline: 'One device, multiple possibilities.',
    description:
      'The legendary GT06N upgraded to 4G LTE. A reliable vehicle and motorcycle tracking device with real-time location, ignition monitoring, remote immobilization support and professional fleet tracking features.',
    features: [
      { icon: 'lte', label: '4G LTE CAT1 / 2G connectivity' },
      { icon: 'gps', label: 'High sensitivity GPS positioning' },
      { icon: 'ignition', label: 'Ignition detection' },
      { icon: 'power', label: 'Remote fuel cut-off support' },
      { icon: 'mic', label: 'Voice monitoring support' },
      { icon: 'geo', label: 'Geofence alerts' },
      { icon: 'crash', label: 'Tow and vibration alarms' },
      { icon: 'battery', label: 'Backup battery support' },
    ],
  },
  {
    id: 'vg03',
    model: 'VG03',
    name: 'Discreet Tracking',
    image: '/products/VG03.png',
    category: 'Vehicle Tracker',
    tagline: 'Compact tracker for discreet installation.',
    description:
      'VG03 is a compact GPS tracker designed for hidden installation in cars, motorcycles and commercial vehicles. It supports real-time tracking, route history, alarms and vehicle security workflows.',
    features: [
      { icon: 'lte', label: '4G vehicle tracking' },
      { icon: 'gps', label: 'Real-time GPS location' },
      { icon: 'smalltrk', label: 'Compact hidden design' },
      { icon: 'ignition', label: 'Ignition status detection' },
      { icon: 'geo', label: 'Geofence protection' },
      { icon: 'route', label: 'Route playback support' },
      { icon: 'battery', label: 'Low power mode' },
      { icon: 'antenna', label: 'Built-in antenna' },
    ],
  },
  {
    id: 'vl103d',
    model: 'VL103D',
    name: 'Tiny Device',
    image: '/products/VL103D.png',
    category: 'Vehicle Tracker',
    tagline: 'Smallest size, biggest performance.',
    description:
      'VL103D is a miniature GPS tracker delivering professional-grade tracking in a very small form factor. It is suitable for motorcycles, private vehicles, taxis and light fleet operations.',
    features: [
      { icon: 'lte', label: '4G LTE connectivity' },
      { icon: 'gps', label: '32-channel GPS positioning' },
      { icon: 'smalltrk', label: 'Ultra compact size' },
      { icon: 'ignition', label: 'Ignition detection' },
      { icon: 'geo', label: 'Geofence alerts' },
      { icon: 'battery', label: 'Ultra-low power mode' },
      { icon: 'antenna', label: 'Built-in antennas' },
      { icon: 'course', label: 'Configurable upload modes' },
    ],
  },
  {
    id: 'vl103m',
    model: 'VL103M',
    name: 'Minimal Form',
    image: '/products/VL103M.png',
    category: 'Vehicle Tracker',
    tagline: 'Slim profile, full power.',
    description:
      'VL103M combines a minimal hardware profile with reliable GPS tracking features. It is built for modern vehicles where clean installation, reliable alerts and route visibility are important.',
    features: [
      { icon: 'lte', label: '4G LTE communication' },
      { icon: 'gps', label: 'Real-time GPS tracking' },
      { icon: 'ignition', label: 'Ignition detection' },
      { icon: 'geo', label: 'Multiple geofence alerts' },
      { icon: 'route', label: 'Route history replay' },
      { icon: 'serial', label: 'Serial port interface' },
      { icon: 'battery', label: 'Low power consumption' },
      { icon: 'antenna', label: 'Built-in antennas' },
    ],
  },
  {
    id: 'vl110c',
    model: 'VL110C',
    name: 'Any Vehicle',
    image: '/products/VL110C.png',
    category: 'Vehicle Tracker',
    tagline: 'One tracker for every vehicle type.',
    description:
      'VL110C is a universal vehicle tracker suitable for motorcycles, cars, buses, trucks and heavy equipment. Wide voltage support makes it suitable for mixed fleets and commercial operations.',
    features: [
      { icon: 'lte', label: '4G LTE CAT1 connectivity' },
      { icon: 'gps', label: 'High sensitivity GPS' },
      { icon: 'power', label: 'Wide voltage support' },
      { icon: 'ignition', label: 'Ignition and relay output' },
      { icon: 'fuel', label: 'Fuel monitoring support' },
      { icon: 'serial', label: 'RS232 / RS485 support' },
      { icon: 'wire', label: '1-wire interface' },
      { icon: 'water', label: 'Commercial installation support' },
    ],
  },
  {
    id: 'vl802',
    model: 'VL802',
    name: 'More Visibility',
    image: '/products/VL802.png',
    category: 'Vehicle Tracker',
    tagline: 'Total fleet visibility, total control.',
    description:
      'VL802 is an advanced fleet tracker designed for companies that need strong route visibility, driver behaviour data, fuel monitoring support and multiple interface options.',
    features: [
      { icon: 'lte', label: '4G LTE CAT1 connectivity' },
      { icon: 'gps', label: 'High accuracy GPS' },
      { icon: 'driver', label: 'Driver behaviour scoring' },
      { icon: 'fuel', label: 'Fuel monitoring support' },
      { icon: 'route', label: 'Route optimization and replay' },
      { icon: 'serial', label: 'RS232 / RS485 interfaces' },
      { icon: 'fota', label: 'FOTA firmware update support' },
      { icon: 'cloud', label: 'Fleet analytics platform' },
    ],
  },
  {
    id: 'vl808',
    model: 'VL808',
    name: 'Intelligent Tracking',
    image: '/products/VL808.png',
    category: 'Vehicle Tracker',
    tagline: 'Intelligence that drives smarter decisions.',
    description:
      'VL808 is an intelligent tracking terminal for enterprise fleet operations. It supports high-accuracy tracking, smart power management, route visibility and fleet analytics.',
    features: [
      { icon: 'lte', label: '4G LTE CAT1 connectivity' },
      { icon: 'gps', label: 'Ultra-high accuracy GPS' },
      { icon: 'driver', label: 'Driver and vehicle analytics' },
      { icon: 'battery', label: 'Smart power management' },
      { icon: 'course', label: 'Adaptive tracking updates' },
      { icon: 'cloud', label: 'Cloud platform support' },
      { icon: 'serial', label: 'Fleet interface support' },
      { icon: 'crash', label: 'Event alarm support' },
    ],
  },
  {
    id: 'x3',
    model: 'X3',
    name: 'Voice Tracker',
    image: '/products/X3.png',
    category: 'Vehicle Tracker',
    tagline: 'Tracking with voice monitoring support.',
    description:
      'X3 is a vehicle tracking device designed for location monitoring, route tracking and voice monitoring support. It is useful for security-focused fleet and personal vehicle deployments.',
    features: [
      { icon: 'lte', label: 'Network tracking support' },
      { icon: 'gps', label: 'Real-time location tracking' },
      { icon: 'mic', label: 'Voice monitoring support' },
      { icon: 'ignition', label: 'Ignition detection' },
      { icon: 'geo', label: 'Geofence alerts' },
      { icon: 'route', label: 'Route history playback' },
      { icon: 'crash', label: 'Security alarms' },
      { icon: 'power', label: 'Vehicle power connection' },
    ],
  },
  {
    id: 'gt06n',
    model: 'GT06N',
    name: 'The Classic',
    image: '/products/GT06N.png',
    category: 'Vehicle Tracker',
    tagline: 'A classic tracker for everyday vehicle security.',
    description:
      'GT06N is a proven vehicle tracker for real-time tracking, route history, geofence alerts and basic fleet control. It is widely used for cars, motorcycles and small fleet operations.',
    features: [
      { icon: 'gps', label: 'Real-time GPS tracking' },
      { icon: 'signal', label: 'GSM communication support' },
      { icon: 'ignition', label: 'Ignition status detection' },
      { icon: 'geo', label: 'Geofence alerts' },
      { icon: 'route', label: 'Route replay support' },
      { icon: 'power', label: 'Remote immobilization support' },
      { icon: 'battery', label: 'Backup battery support' },
      { icon: 'crash', label: 'Movement and tow alerts' },
    ],
  },
  {
    id: 'vl502',
    model: 'VL502',
    name: 'Fleet CAN Tracker',
    image: '/products/VL502.png',
    category: 'CAN & OBD Tracker',
    tagline: 'Deep vehicle data for smarter fleet management.',
    description:
      'VL502 is designed for fleets that require vehicle data visibility through CAN/OBD integration. It helps monitor vehicle status, fuel use, mileage and operational performance.',
    features: [
      { icon: 'lte', label: '4G fleet communication' },
      { icon: 'gps', label: 'Real-time GPS tracking' },
      { icon: 'serial', label: 'CAN/OBD data integration' },
      { icon: 'fuel', label: 'Fuel data visibility' },
      { icon: 'driver', label: 'Driver behaviour insights' },
      { icon: 'speed', label: 'Speed and mileage monitoring' },
      { icon: 'cloud', label: 'Fleet platform support' },
      { icon: 'crash', label: 'Vehicle health alerts' },
    ],
  },
  {
    id: 'll303pro',
    model: 'LL303PRO',
    name: '5 Years Battery',
    image: '/products/LL303PRO.png',
    category: 'Asset Tracker',
    tagline: 'Long battery life for long-term asset visibility.',
    description:
      'LL303PRO is a long-life asset tracker suitable for containers, trailers, equipment and high-value movable assets. It supports long-term tracking where permanent power is not available.',
    features: [
      { icon: 'gps', label: 'GPS asset positioning' },
      { icon: 'lte', label: 'LTE communication support' },
      { icon: 'battery', label: 'Long-life battery operation' },
      { icon: 'magnetic', label: 'Easy asset installation' },
      { icon: 'geo', label: 'Geofence movement alerts' },
      { icon: 'water', label: 'Outdoor asset usage support' },
      { icon: 'cloud', label: 'Remote platform tracking' },
      { icon: 'crash', label: 'Movement and tamper alerts' },
    ],
  },
  {
    id: 'll301',
    model: 'LL301',
    name: 'Silent Protector',
    image: '/products/LL301.png',
    category: 'Asset Tracker',
    tagline: 'Silent watcher for valuable assets.',
    description:
      'LL301 is a compact asset tracker designed for long-term asset monitoring and security. It is suitable for trailers, field equipment, rental assets and logistics operations.',
    features: [
      { icon: 'gps', label: 'Asset location tracking' },
      { icon: 'battery', label: 'Battery powered operation' },
      { icon: 'smalltrk', label: 'Compact asset design' },
      { icon: 'geo', label: 'Geofence alerts' },
      { icon: 'cloud', label: 'Remote tracking platform' },
      { icon: 'crash', label: 'Movement alarm support' },
      { icon: 'water', label: 'Outdoor use support' },
      { icon: 'course', label: 'Scheduled reporting modes' },
    ],
  },
  {
    id: 'pl200',
    model: 'PL200',
    name: 'Silent Guardian',
    image: '/products/PL200.png',
    category: 'Personal Tracker',
    tagline: 'Personal safety and location visibility.',
    description:
      'PL200 is a portable personal tracker designed for staff safety, family protection, lone-worker monitoring and emergency response use cases.',
    features: [
      { icon: 'gps', label: 'Personal GPS tracking' },
      { icon: 'lte', label: 'Mobile network support' },
      { icon: 'sos', label: 'SOS emergency button' },
      { icon: 'battery', label: 'Rechargeable battery' },
      { icon: 'geo', label: 'Safe zone alerts' },
      { icon: 'cloud', label: 'Remote monitoring platform' },
      { icon: 'smalltrk', label: 'Portable compact design' },
      { icon: 'route', label: 'Movement history support' },
    ],
  },
  {
    id: 'f5',
    model: 'F5',
    name: 'ADAS + BSD DashCam',
    image: '/products/f5.png',
    category: 'AI Dashcam',
    tagline: '4K clarity. Smarter protection. Real-time visibility.',
    description:
      'F5 is an advanced ADAS + BSD dashcam designed for smarter fleet safety with 4K front recording, 3.2-inch IPS screen, Wi-Fi connectivity, optional GPS, parking monitoring, rear camera support, and up to 256GB Micro SD storage.',
    features: [
      { icon: 'camera', label: '4K front recording' },
      { icon: 'adas', label: 'ADAS driver assistance support' },
      { icon: 'adas', label: 'BSD blind spot detection support' },
      { icon: 'camera', label: 'Front, inside and rear camera support' },
      { icon: 'signal', label: 'Wi-Fi connectivity' },
      { icon: 'gps', label: 'Optional built-in GPS' },
      { icon: 'sd', label: 'Micro SD storage up to 256GB' },
      { icon: 'motion', label: 'Parking monitoring support' },
    ],
  },
  {
    id: 'f7',
    model: 'F7',
    name: 'ADAS + BSD DashCam',
    image: '/products/f7.png',
    category: 'AI Dashcam',
    tagline: 'Smarter vision for safer driving.',
    description:
      'F7 is an advanced ADAS + BSD dashcam built for compact fleet intelligence. It combines 4K front recording, 3.2-inch IPS screen, Wi-Fi connectivity, optional GPS, parking monitoring, voice recording, rear camera support and up to 256GB Micro SD storage.',
    features: [
      { icon: 'camera', label: '4K front recording' },
      { icon: 'adas', label: 'ADAS + BSD alerts' },
      { icon: 'camera', label: '3.2-inch IPS screen' },
      { icon: 'signal', label: 'Wi-Fi connectivity' },
      { icon: 'gps', label: 'Optional built-in GPS' },
      { icon: 'sd', label: 'Micro SD storage up to 256GB' },
      { icon: 'night', label: 'Inside IR camera support' },
      { icon: 'motion', label: 'Parking monitoring support' },
    ],
  },
  {
    id: 'jc371',
    model: 'JC371',
    name: 'AI Dashcam with ADAS',
    image: '/products/jc371.png',
    category: 'AI Dashcam',
    tagline: 'AI video intelligence for fleet safety.',
    description:
      'JC371 is an AI dashcam built for commercial fleets requiring video recording, ADAS road safety warnings, driver monitoring and multi-camera visibility.',
    features: [
      { icon: 'camera', label: 'Multi-channel video recording' },
      { icon: 'adas', label: 'ADAS road safety warnings' },
      { icon: 'driver', label: 'DMS driver monitoring' },
      { icon: 'lte', label: '4G live video support' },
      { icon: 'gps', label: 'GPS route tracking' },
      { icon: 'sd', label: 'Local video storage' },
      { icon: 'cloud', label: 'Remote video platform' },
      { icon: 'crash', label: 'Event evidence capture' },
    ],
  },
  {
    id: 'jc450',
    model: 'JC450',
    name: 'Multi-Channel AI Dashcam',
    image: '/products/jc450.png',
    category: 'AI Dashcam',
    tagline: 'Multi-camera AI safety for professional fleets.',
    description:
      'JC450 is a powerful AI dashcam platform for fleets that require multi-camera video, live monitoring, ADAS, DMS and driver safety event management.',
    features: [
      { icon: 'camera', label: 'Multi-channel camera support' },
      { icon: 'adas', label: 'ADAS safety algorithms' },
      { icon: 'driver', label: 'Driver monitoring system' },
      { icon: 'lte', label: '4G remote video support' },
      { icon: 'gps', label: 'GPS tracking and playback' },
      { icon: 'sd', label: 'Video evidence storage' },
      { icon: 'cloud', label: 'Fleet video platform' },
      { icon: 'crash', label: 'Accident and alarm evidence' },
    ],
  },
  {
    id: 'jc261',
    model: 'JC261',
    name: 'Dual Camera AI Dashcam',
    image: '/products/jc261.png',
    category: 'AI Dashcam',
    tagline: 'Dual-channel video safety for everyday fleets.',
    description:
      'JC261 provides dual-camera monitoring for road and cabin visibility. It is suitable for taxis, ride-hailing, vans and commercial vehicles requiring video evidence.',
    features: [
      { icon: 'camera', label: 'Dual-channel video recording' },
      { icon: 'gps', label: 'GPS route tracking' },
      { icon: 'lte', label: 'Remote upload support' },
      { icon: 'driver', label: 'Driver monitoring support' },
      { icon: 'night', label: 'Day and night recording' },
      { icon: 'sd', label: 'Local SD card storage' },
      { icon: 'cloud', label: 'Platform playback support' },
      { icon: 'crash', label: 'Event recording alerts' },
    ],
  },
  {
    id: 'jc261p',
    model: 'JC261P',
    name: 'Pro AI Dashcam',
    image: '/products/jc261p.png',
    category: 'AI Dashcam',
    tagline: 'Professional AI dashcam for advanced fleet safety.',
    description:
      'JC261P adds professional-grade AI dashcam features for driver monitoring, road safety, vehicle activity review and fleet video evidence workflows.',
    features: [
      { icon: 'camera', label: 'Professional dashcam recording' },
      { icon: 'adas', label: 'AI road safety warnings' },
      { icon: 'driver', label: 'Driver behaviour monitoring' },
      { icon: 'lte', label: 'Live video support' },
      { icon: 'gps', label: 'GPS tracking support' },
      { icon: 'sd', label: 'Local recording support' },
      { icon: 'cloud', label: 'Cloud platform integration' },
      { icon: 'crash', label: 'Alarm evidence capture' },
    ],
  },
  {
    id: 'jc400d',
    model: 'JC400D',
    name: '4G AI Dashcam',
    image: '/products/jc400d.png',
    category: 'AI Dashcam',
    tagline: 'Connected 4G dashcam for live fleet video.',
    description:
      'JC400D is a connected AI dashcam designed for real-time fleet video monitoring, route tracking, driver safety events and incident recording.',
    features: [
      { icon: 'camera', label: 'Road and cabin video monitoring' },
      { icon: 'lte', label: '4G connected dashcam' },
      { icon: 'gps', label: 'GPS route visibility' },
      { icon: 'adas', label: 'AI safety event support' },
      { icon: 'driver', label: 'Driver monitoring support' },
      { icon: 'sd', label: 'Local video recording' },
      { icon: 'cloud', label: 'Remote playback support' },
      { icon: 'crash', label: 'Accident evidence capture' },
    ],
  },
  {
    id: 'jc181',
    model: 'JC181',
    name: 'Basic Dashcam',
    image: '/products/jc181.png',
    category: 'Non-AI Dashcam',
    tagline: 'Simple video recording for reliable evidence.',
    description:
      'JC181 is a basic dashcam designed for fleets and private vehicles that need reliable video recording without complex AI features.',
    features: [
      { icon: 'camera', label: 'Dashcam video recording' },
      { icon: 'gps', label: 'GPS tracking support' },
      { icon: 'sd', label: 'Local SD card storage' },
      { icon: 'night', label: 'Day and night recording' },
      { icon: 'crash', label: 'Event video capture' },
      { icon: 'power', label: 'Vehicle power connection' },
      { icon: 'route', label: 'Route history support' },
      { icon: 'cloud', label: 'Playback workflow support' },
    ],
  },
];

const buildBaseSpecs = (product) => {
  const isDashcam = product.category.includes('Dashcam');
  const isAsset = product.category.includes('Asset');
  const isPersonal = product.category.includes('Personal');
  const isCan = product.category.includes('CAN');

  if (isDashcam) {
    return {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': product.category,
          Model: product.model,
          Purpose: 'Vehicle video recording, driver safety and fleet monitoring',
        },
      },
      video: {
        label: 'Video & Recording',
        items: {
          Recording: 'Road, cabin or multi-channel video recording depending on model',
          Storage: 'Local storage support for video evidence',
          Evidence: 'Accident, alarm and driving event review',
          Monitoring: 'Useful for fleet video safety and route review',
        },
      },
      connectivity: {
        label: 'Connectivity & Platform',
        items: {
          Positioning: 'GPS route tracking support',
          Network: '4G / platform support depending on model',
          Platform: 'Remote monitoring and video playback workflow support',
          Alerts: 'Event alarm upload support depending on configuration',
        },
      },
      installation: {
        label: 'Installation & Use',
        items: {
          Vehicles: 'Cars, vans, buses, trucks, taxis and commercial fleets',
          Installation: 'Professional vehicle installation recommended',
          Value: 'Improves safety visibility and incident accountability',
        },
      },
    };
  }

  if (isAsset) {
    return {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': product.category,
          Model: product.model,
          Purpose: 'Asset location tracking and movement monitoring',
        },
      },
      tracking: {
        label: 'Tracking',
        items: {
          Positioning: 'GPS asset location monitoring',
          Reporting: 'Scheduled and movement-based reporting support',
          Geofence: 'Geofence entry and exit alerts',
          Security: 'Movement, tamper and abnormal activity alerts',
        },
      },
      power: {
        label: 'Power & Deployment',
        items: {
          Battery: 'Long-life battery operation depending on configuration',
          Installation: 'Suitable for trailers, containers and movable assets',
          Environment: 'Designed for field and logistics asset use',
        },
      },
      application: {
        label: 'Application',
        items: {
          Use: 'Containers, trailers, rental assets, equipment and field assets',
          Platform: 'Remote platform tracking and historical movement review',
          Benefit: 'Improves asset recovery, utilization and accountability',
        },
      },
    };
  }

  if (isPersonal) {
    return {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': product.category,
          Model: product.model,
          Purpose: 'Personal safety tracking and emergency response support',
        },
      },
      safety: {
        label: 'Safety',
        items: {
          SOS: 'Emergency SOS button support',
          Location: 'Real-time location visibility',
          Zones: 'Safe zone / geofence alerts',
          History: 'Movement history review',
        },
      },
      power: {
        label: 'Power & Portability',
        items: {
          Design: 'Compact portable design',
          Battery: 'Rechargeable battery operation',
          Platform: 'Remote monitoring platform support',
        },
      },
      application: {
        label: 'Application',
        items: {
          Use: 'Field staff, lone workers, children, elderly safety and personal tracking',
          Benefit: 'Supports faster response and better safety visibility',
        },
      },
    };
  }

  if (isCan) {
    return {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': product.category,
          Model: product.model,
          Purpose: 'Fleet tracking with vehicle data visibility',
        },
      },
      vehicleData: {
        label: 'Vehicle Data',
        items: {
          CAN: 'CAN / OBD vehicle data integration support',
          Mileage: 'Mileage and vehicle operation monitoring',
          Fuel: 'Fuel data visibility depending on vehicle support',
          Health: 'Vehicle status and diagnostic insight support',
        },
      },
      tracking: {
        label: 'Tracking & Connectivity',
        items: {
          Network: '4G fleet communication support',
          GPS: 'Real-time GPS tracking and route playback',
          Platform: 'Fleet management platform integration',
          Alerts: 'Vehicle and driver event alert support',
        },
      },
      application: {
        label: 'Application',
        items: {
          Vehicles: 'Commercial fleets, logistics vehicles and corporate fleets',
          Benefit: 'Improves fleet control, maintenance planning and cost visibility',
        },
      },
    };
  }

  return {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.category,
        Model: product.model,
        Purpose: 'Real-time vehicle tracking and fleet security',
      },
    },
    tracking: {
      label: 'Tracking',
      items: {
        Positioning: 'GPS / GNSS real-time tracking support',
        Network: '4G / GSM communication depending on model',
        Playback: 'Route history and trip replay support',
        Geofence: 'Geofence alerts and zone monitoring',
      },
    },
    vehicleControl: {
      label: 'Vehicle Control',
      items: {
        Ignition: 'Ignition status detection support',
        Alerts: 'Tow, vibration, power cut and overspeed alerts depending on model',
        Output: 'Relay / fuel cut-off support depending on configuration',
        Platform: 'Fleet monitoring platform integration',
      },
    },
    installation: {
      label: 'Installation & Use',
      items: {
        Vehicles: 'Cars, motorcycles, vans, buses, trucks and commercial fleets',
        Power: 'Vehicle power connection depending on model',
        Benefit: 'Improves vehicle security, visibility and operational control',
      },
    },
  };
};

const buildApplications = (product) => {
  if (product.category.includes('Dashcam')) {
    return [
      { title: 'Fleet Video Safety', desc: 'Captures driving events, road incidents and driver behaviour for safety review.' },
      { title: 'Commercial Vehicles', desc: 'Suitable for taxis, vans, buses, trucks and logistics fleets.' },
      { title: 'Remote Monitoring', desc: 'Supports control room visibility and playback workflows depending on configuration.' },
      { title: 'Incident Evidence', desc: 'Provides video evidence for accident, complaint and route investigation.' },
    ];
  }

  if (product.category.includes('Asset')) {
    return [
      { title: 'Container Tracking', desc: 'Track containers, trailers and mobile logistics assets.' },
      { title: 'Equipment Monitoring', desc: 'Monitor field equipment and high-value movable assets.' },
      { title: 'Rental Assets', desc: 'Improve control over rented or temporary assets.' },
      { title: 'Theft Recovery', desc: 'Support asset recovery through location visibility and alerts.' },
    ];
  }

  if (product.category.includes('Personal')) {
    return [
      { title: 'Field Staff Safety', desc: 'Monitor staff working alone or outside office locations.' },
      { title: 'Emergency Response', desc: 'SOS support helps teams respond faster in critical situations.' },
      { title: 'Family Safety', desc: 'Useful for children, elderly people and personal location visibility.' },
      { title: 'Security Teams', desc: 'Track movement and safety status of guards or mobile teams.' },
    ];
  }

  return [
    { title: 'Passenger Cars', desc: 'Reliable vehicle security and location monitoring for personal and business vehicles.' },
    { title: 'Motorcycles', desc: 'Compact tracking solution for motorcycles and two-wheelers.' },
    { title: 'Fleet Management', desc: 'Improve route visibility, driver accountability and operational control.' },
    { title: 'Vehicle Recovery', desc: 'Supports stolen vehicle recovery with real-time location visibility.' },
  ];
};

const buildAccessories = (product) => {
  if (product.category.includes('Dashcam')) {
    return [
      { label: 'Vehicle Camera Cable' },
      { label: 'Cabin Camera' },
      { label: 'External Storage Card' },
      { label: 'Professional Installation Kit' },
    ];
  }

  if (product.category.includes('Asset')) {
    return [
      { label: 'Magnetic Mount' },
      { label: 'Waterproof Enclosure' },
      { label: 'Asset Installation Kit' },
    ];
  }

  if (product.category.includes('Personal')) {
    return [
      { label: 'Charging Cable' },
      { label: 'Protective Case' },
      { label: 'Lanyard / Clip' },
    ];
  }

  return [
    { label: 'Wiring Harness' },
    { label: 'Relay Kit' },
    { label: 'External Antenna' },
    { label: 'Professional Installation Support' },
  ];
};

const SPECIAL_PRODUCT_DETAILS = {
  f5: {
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'ADAS + BSD DashCam',
          Model: 'F5',
          Chipset: 'SA230D',
          Purpose: 'Fleet video safety, driver assistance and blind spot monitoring',
          'Recording Format': 'Movie: H.264(TS), Photo: JPG',
        },
      },
      camera: {
        label: 'Camera System',
        items: {
          'Front Camera Sensor': 'GC4653',
          'Front Camera Lens': '2G+4P',
          'Inside Camera Sensor': 'AHD GC2083',
          'Inside Camera Lens': '2G+4P with IR',
          'Rear Camera Sensor': 'GC2083',
          'Rear Camera Lens': 'Wide angle HD lens',
        },
      },
      video: {
        label: 'Video & Recording',
        items: {
          'Image Resolution': '4K(3840×2160) + 1K(1920×1080) + 2K(2560×1440)',
          'Video Resolution': '4K(3840×2160) + 1K(1920×1080) + 2K(2560×1440)',
          Frame: '30 FPS',
          'Auto Recording': 'Support',
          'Loop Recording Time': 'Off / 1 min / 3 min / 5 min / 10 min',
          'Seamless Recording': 'Uninterrupted video recording without frame or second drop',
        },
      },
      screenStorage: {
        label: 'Screen, Storage & Connectivity',
        items: {
          Screen: '3.2-inch Full IPS screen',
          'Screen Resolution': '268×800',
          Storage: 'Micro SD 4GB–256GB U3',
          'SD Storage': 'Max support 256GB; above 64GB should be formatted on the device',
          WiFi: 'Support',
          GPS: 'Built-in optional function',
        },
      },
      safety: {
        label: 'Safety & Monitoring',
        items: {
          ADAS: 'Support',
          BSD: 'Support',
          'Voice Recording': 'Support',
          'Parking Monitoring': 'Support',
          Mic: 'Support',
          Speaker: 'Support',
          'Holder / Suction Cup': 'Optional',
        },
      },
      hardware: {
        label: 'Hardware & Power',
        items: {
          'Working Voltage': '5V',
          'Working Current': 'DC5V 600mA',
          'Working Temperature': '-20°C to +70°C',
          'Storage Temperature': '-30°C to +90°C',
          Wires: '12V Cigarette lighter cable / 12V ACC hardwire kit / OBD cable',
          'Super Capacitor': 'No',
        },
      },
    },
    applications: [
      { title: 'Fleet Safety Monitoring', desc: 'Use ADAS and BSD support to improve daily fleet safety and reduce risky driving events.' },
      { title: 'Commercial Vehicles', desc: 'Suitable for cars, vans, trucks, taxis and fleet vehicles that require video evidence and driver assistance.' },
      { title: 'Parking & Incident Protection', desc: 'Parking monitoring and loop recording help capture important events while parked or on the road.' },
      { title: 'Driver & Route Review', desc: 'Video recording, optional GPS and Wi-Fi support help review trips, incidents and driver behaviour.' },
    ],
    accessories: [
      { label: 'Rear Camera' },
      { label: 'GPS Antenna / Module' },
      { label: 'ACC Hardwire Kit' },
      { label: 'Micro SD Storage Card' },
    ],
  },

  f7: {
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'ADAS + BSD DashCam',
          Model: 'F7',
          Chipset: 'SA230D',
          Purpose: 'Advanced video safety, ADAS alerts and blind spot monitoring',
          'Recording Format': 'Movie: H.264(TS), Photo: JPG',
        },
      },
      camera: {
        label: 'Camera System',
        items: {
          'Front Camera Sensor': 'GC4653',
          'Front Camera Lens': '6G',
          'Inside Camera Sensor': 'GC2083',
          'Inside Camera Lens': '6G HD lens with IR',
          'Rear Camera Sensor': 'GC2083',
          'Rear Camera Lens': 'Wide angle HD lens',
        },
      },
      video: {
        label: 'Video & Recording',
        items: {
          'Image Resolution': '4K(2560×1440) + MIPI 1080P(1920×1080) + AHD 1080P(1920×1080)',
          'Video Resolution': '2K(2560×1440) + MIPI 1080P(1920×1080) + AHD 1080P(1920×1080)',
          Frame: '30 FPS',
          'Auto Recording': 'Support',
          'Loop Recording Time': 'Off / 1 min / 3 min / 5 min / 10 min',
          'Seamless Recording': 'Uninterrupted video recording without frame or second drop',
        },
      },
      screenStorage: {
        label: 'Screen, Storage & Connectivity',
        items: {
          Screen: '3.2-inch Full IPS screen',
          'Screen Resolution': '268×800',
          Storage: 'Micro SD 4GB–256GB U3',
          'SD Storage': 'Max support 256GB; above 64GB should be formatted on the device',
          WiFi: 'Support',
          GPS: 'Built-in optional function',
        },
      },
      safety: {
        label: 'Safety & Monitoring',
        items: {
          ADAS: 'Support',
          BSD: 'Support',
          'Voice Recording': 'Support',
          'Parking Monitoring': 'Support',
          Mic: 'Support',
          Speaker: 'Support',
        },
      },
      hardware: {
        label: 'Hardware & Power',
        items: {
          'Working Voltage': '5V',
          'Working Current': 'DC5V 600mA',
          'Working Temperature': '-20°C to +70°C',
          'Storage Temperature': '-30°C to +90°C',
          Wires: '12V Cigarette lighter cable / 12V ACC hardwire kit optional',
          'Super Capacitor': 'No',
        },
      },
    },
    applications: [
      { title: 'Fleet Video Safety', desc: 'Supports smarter monitoring for fleet vehicles with ADAS and BSD alert workflows.' },
      { title: 'Commercial Vehicle Recording', desc: 'Useful for vans, taxis, trucks and business vehicles needing front, inside and rear video visibility.' },
      { title: 'Parking Monitoring', desc: 'Parking monitoring helps capture events when the vehicle is parked and unattended.' },
      { title: 'Driver Assistance', desc: 'ADAS + BSD support helps improve awareness, safer driving and incident prevention.' },
    ],
    accessories: [
      { label: 'Rear Camera' },
      { label: 'GPS Antenna / Module' },
      { label: 'ACC Hardwire Kit' },
      { label: 'Micro SD Storage Card' },
    ],
  },
};

const productDetails = Object.fromEntries(
  BASE_PRODUCTS.map((product) => {
    const specialDetails = SPECIAL_PRODUCT_DETAILS[product.id];

    return [
      product.id,
      {
        ...product,
        specs: specialDetails?.specs || buildBaseSpecs(product),
        applications: specialDetails?.applications || buildApplications(product),
        accessories: specialDetails?.accessories || buildAccessories(product),
      },
    ];
  })
);

const allProductDetails = {
  ...productDetails,
  ...QOHO_PRODUCT_DETAILS,
};

/* ─────────────────────────────────────────────────────────────
   PRODUCT ACCESSORIES IMAGE MAPPING
   Images path: public/accessories/{file-name}.png
   Only accessories data/rendering is updated.
───────────────────────────────────────────────────────────── */

const productAccessory = (label, image) => ({ label, image });

const PRODUCT_ACCESSORY_OVERRIDES = {
  'gt06n-4g': [
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
    productAccessory('K7800P Environment Sensor', '/accessories/k7800p.png'),
  ],

  vg03: [
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
  ],

  vl103d: [
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
  ],

  vl103m: [
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
  ],

  vl110c: [
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KF041S Capacitive Fuel Level Sensor', '/accessories/kf041s.png'),
    productAccessory('K7800P Environment Sensor', '/accessories/k7800p.png'),
  ],

  vl802: [
    productAccessory('KF041S Fuel Level Sensor', '/accessories/kf041s.png'),
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
    productAccessory('K7800P Temperature Probe', '/accessories/k7800p.png'),
  ],

  vl808: [
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
  ],

  x3: [
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
  ],

  gt06n: [
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
  ],

  vl502: [
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KF041S Fuel Level Sensor', '/accessories/kf041s.png'),
  ],

  ll303pro: [
    productAccessory('K7800P Environment Sensor', '/accessories/k7800p.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
    productAccessory('KF281S BLE Powered Fuel Level Sensor', '/accessories/kf281s.png'),
  ],

  ll301: [
    productAccessory('K7800P Environment Sensor', '/accessories/k7800p.png'),
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
  ],

  pl200: [
    productAccessory('K7800P Environment Sensor', '/accessories/k7800p.png'),
    productAccessory('KC208S Remote Control', '/accessories/kc208s.png'),
  ],

  jc371: [
    productAccessory('CI05F Cabin-View Full AHD Camera', '/accessories/ci05f.png'),
    productAccessory('CI06F Cabin-View Full AHD Camera', '/accessories/ci06f.png'),
    productAccessory('CE02 IP67 Blindspot Camera', '/accessories/ce02.png'),
  ],

  jc450: [
    productAccessory('CI02 Cabin-View USB Camera', '/accessories/ci02.png'),
    productAccessory('CE02 IP67 Blindspot Camera', '/accessories/ce02.png'),
    productAccessory('CD02 Driver-Facing Infrared Camera', '/accessories/cd02.png'),
    productAccessory('JCM0700 Display Unit', '/accessories/jcm0700.png'),
  ],

  jc261: [
    productAccessory('CI03 Cabin-View Infrared Camera', '/accessories/ci03.png'),
    productAccessory('CE02 IP67 Blindspot Camera', '/accessories/ce02.png'),
  ],

  jc261p: [
    productAccessory('CI03 Cabin-View Infrared Camera', '/accessories/ci03.png'),
    productAccessory('CE02 IP67 Blindspot Camera', '/accessories/ce02.png'),
  ],

  jc400d: [
    productAccessory('CI01 Cabin-View Infrared Camera', '/accessories/ci01.png'),
    productAccessory('CE01 Rear-View Waterproof Camera', '/accessories/ce01.png'),
    productAccessory('CI03 Cabin-View Infrared Camera', '/accessories/ci03.png'),
  ],

  jc181: [
    productAccessory('KZ081V DC-DC Converter', '/accessories/kz081v.png'),
    productAccessory('KJ806 Extended Control Box', '/accessories/kj806.png'),
  ],
};

const getAccessoryFallbackImage = (label = '') => {
  const textValue = label.toLowerCase();

  if (textValue.includes('ci05')) return '/accessories/ci05f.png';
  if (textValue.includes('ci06')) return '/accessories/ci06f.png';
  if (textValue.includes('ci02')) return '/accessories/ci02.png';
  if (textValue.includes('ci03')) return '/accessories/ci03.png';
  if (textValue.includes('ci01')) return '/accessories/ci01.png';
  if (textValue.includes('ce02') || textValue.includes('blindspot')) return '/accessories/ce02.png';
  if (textValue.includes('ce01') || textValue.includes('rear')) return '/accessories/ce01.png';
  if (textValue.includes('cd02') || textValue.includes('driver-facing')) return '/accessories/cd02.png';
  if (textValue.includes('jcm0700') || textValue.includes('display')) return '/accessories/jcm0700.png';
  if (textValue.includes('kc208s') || textValue.includes('remote')) return '/accessories/kc208s.png';
  if (textValue.includes('kj806') || textValue.includes('control box') || textValue.includes('cable') || textValue.includes('harness')) return '/accessories/kj806.png';
  if (textValue.includes('kz081v') || textValue.includes('converter') || textValue.includes('power') || textValue.includes('charging')) return '/accessories/kz081v.png';
  if (textValue.includes('kf043')) return '/accessories/kf043u.png';
  if (textValue.includes('kf201')) return '/accessories/kf201s.png';
  if (textValue.includes('kf281')) return '/accessories/kf281s.png';
  if (textValue.includes('kf041') || textValue.includes('fuel')) return '/accessories/kf041s.png';
  if (textValue.includes('temperature') || textValue.includes('environment') || textValue.includes('probe')) return '/accessories/k7800p.png';
  if (textValue.includes('camera') || textValue.includes('cabin')) return '/accessories/ci03.png';
  if (textValue.includes('storage') || textValue.includes('card')) return '/accessories/jcm0700.png';
  if (textValue.includes('antenna')) return '/accessories/kc208s.png';
  if (textValue.includes('mount') || textValue.includes('bracket') || textValue.includes('kit') || textValue.includes('clip') || textValue.includes('case')) return '/accessories/kz081v.png';

  return '/placeholder.png';
};

const normalizeProductAccessories = (currentProductId, accessories = []) => {
  if (PRODUCT_ACCESSORY_OVERRIDES[currentProductId]) {
    return PRODUCT_ACCESSORY_OVERRIDES[currentProductId];
  }

  return accessories.map((acc) => ({
    ...acc,
    label: acc.label,
    image: acc.image || getAccessoryFallbackImage(acc.label),
  }));
};


const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const rawProduct = allProductDetails[productId];

  const product = rawProduct
    ? {
        ...rawProduct,
        accessories: normalizeProductAccessories(productId, rawProduct.accessories || []),
      }
    : null;

  const [activeTab, setActiveTab] = useState('overview');

  const related = useMemo(() => {
    if (!product) return [];

    return Object.entries(allProductDetails)
      .filter(([id, item]) => id !== productId && item.category === product.category)
      .slice(0, 4)
      .map(([id, item]) => ({ id, ...item }));
  }, [product, productId]);

  const renderIcon = (name, size = 24) => {
    const icon = Icons[name] || Icons.camera;

    return React.cloneElement(icon, {
      width: size,
      height: size,
      style: {
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
        display: 'block',
        flexShrink: 0,
      },
    });
  };

  if (!product) {
    return (
      <div className="pdp-wrapper">
        <section className="pdp-not-found">
          <h1>Product Not Found</h1>
          <p>The product you are looking for is not available.</p>
          <Link to="/our-products" className="pdp-btn-primary">Back to Products</Link>
        </section>
      </div>
    );
  }

  const handleInquiry = () => {
    navigate('/product-inquiry', {
      state: {
        productId,
        model: product.model,
        name: product.name,
        category: product.category,
      },
    });
  };

  return (
    <div className="pdp-wrapper">
      <section className="pdp-hero">
        <div className="pdp-container">
          <div className="pdp-hero-grid">
            <div>
              <span className="pdp-category-badge">{product.category}</span>
              <h1 className="pdp-model-title">{product.model}</h1>
              <p className="pdp-model-subtitle">{product.name}</p>
              <p className="pdp-tagline">{product.tagline}</p>
              <p className="pdp-description">{product.description}</p>

              <ul className="pdp-quick-features">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>
                    <span className="pdp-li-check">{renderIcon(feature.icon, 18)}</span>
                    {feature.label}
                  </li>
                ))}
              </ul>

              <div className="pdp-hero-actions">
                <button className="pdp-btn-primary" onClick={handleInquiry}>
                  Get a Quote
                </button>
                <Link to="/our-products" className="pdp-btn-outline">
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="pdp-hero-image-col">
              <div className="pdp-image-main">
                <img
                  src={product.image}
                  alt={product.model}
                  className="pdp-product-img"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp-tabs-section">
        <div className="pdp-container">
          <div className="pdp-tabs-nav">
            <button
              className={`pdp-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>

            <button
              className={`pdp-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>

            <button
              className={`pdp-tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>

          </div>

          <div>
            {activeTab === 'overview' && (
              <div>
                <h2 className="pdp-section-heading">Key Features</h2>

                <div className="pdp-features-grid">
                  {product.features.map((feature, index) => (
                    <div key={index} className="pdp-feature-card">
                      <div className="pdp-feature-icon-wrap">
                        {renderIcon(feature.icon, 30)}
                      </div>
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="pdp-specs-grouped">
                {Object.values(product.specs || {}).map((group, index) => (
                  <div key={index} className="pdp-spec-group">
                    <h3 className="pdp-spec-group-title">{group.label}</h3>

                    <div className="pdp-spec-group-body">
                      {Object.entries(group.items || {}).map(([key, value]) => (
                        <div key={key} className="pdp-spec-row">
                          <span className="pdp-spec-key">{key}</span>
                          <span className="pdp-spec-val">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="pdp-applications-grid">
                {(product.applications || []).map((app, index) => (
                  <div key={index} className="pdp-app-card">
                    <div className="pdp-app-num">{String(index + 1).padStart(2, '0')}</div>

                    <div className="pdp-app-body">
                      <h3>{app.title}</h3>
                      <p>{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pdp-related-section">
          <div className="pdp-container">
            <h2 className="pdp-section-heading">Related Products</h2>

            <div className="pdp-related-grid">
              {related.map((item) => (
                <Link to={`/our-products/${item.id}`} key={item.id} className="pdp-related-card">
                  <div className="pdp-related-img-box">
                    <img
                      src={item.image}
                      alt={item.model}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.png';
                      }}
                    />
                  </div>

                  <div className="pdp-related-info">
                    <strong>{item.model}</strong>
                    <span className="pdp-related-sublabel">{item.name}</span>
                    <span className="pdp-related-cat">{item.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pdp-inquiry-section">
        <div className="pdp-container">
          <h2 className="pdp-inquiry-heading">Interested in {product.model}?</h2>
          <p className="pdp-inquiry-sub">
            Get pricing, availability, technical guidance and deployment support from our sales team.
          </p>

          <div className="pdp-hero-actions">
            <button className="pdp-btn-primary" onClick={handleInquiry}>
              Send Product Inquiry
            </button>

            <a href="tel:+923111122883" className="pdp-btn-outline">
              +92 311 1122 883
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;