import React from 'react';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import Convoys from './pages/Convoys';
import GPSTracking from './pages/GPSTracking';
import Alerts from './pages/Alerts';
import Analytics from './pages/Analytics';
import AuditLog from './pages/AuditLog';
import Settings from './pages/Settings';
import './App.css'; // Assuming a design system is used in styles

const FleetOpsPro = () => {
  return (
    <div className="fleet-ops-dashboard">
      <Dashboard />
      <Fleet />
      <Convoys />
      <GPSTracking />
      <Alerts />
      <Analytics />
      <AuditLog />
      <Settings />
    </div>
  );
};

// Exporting the main App component
export default FleetOpsPro;