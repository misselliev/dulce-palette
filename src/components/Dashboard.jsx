/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
import React from 'react';
import ColorCard from './ColorCard';
import Header from './Header';

function Dashboard() {
  return (
    <div className="ui container">
      <Header />
      <ColorCard />
    </div>
  );
}
export default Dashboard;
