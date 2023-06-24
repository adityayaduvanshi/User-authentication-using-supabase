import React from 'react';

const Passenger = ({ name, trips, airline }) => {
  return (
    <div className="grid grid-cols-5  mx-20">
      <div>{name}</div>
      <div>{trips}</div>
      <div>{airline[0]?.name.toUpperCase()}</div>
      <div>{airline[0]?.head_quaters}</div>
      <div>{airline[0]?.country}</div>
    </div>
  );
};

export default Passenger;
