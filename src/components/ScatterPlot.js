import React from 'react';

const ScatterPlot = ({ data }) => {
  if (!data) return <div>No data selected.</div>;

  return (
    <div>
      {/* Example visualization of the data */}
      <p>Selected Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default ScatterPlot;
