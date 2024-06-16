import React, { useState } from 'react';

function RouteOptions() {
  const [routeType, setRouteType] = useState('');

  const handleRouteTypeChange = (event) => {
    setRouteType(event.target.value);
    // Update route type based on user selection
  };

  return (
    <div className="route-options">
      <label htmlFor="routeType">Select Route Type:</label>
      <select id="routeType" value={routeType} onChange={handleRouteTypeChange}>
        <option value="fastest">Fastest Route</option>
        <option value="shortest">Shortest Route</option>
        {/* Add more route options as needed */}
      </select>
    </div>
  );
}

export default RouteOptions;
