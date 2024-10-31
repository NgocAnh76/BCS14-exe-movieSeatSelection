import React from "react";

const TypeSeat = () => {
  return (
    <ul className="mt-3">
      <li className="seat_status seat_status-green">Selected Seat</li>
      <li className="seat_status seat_status-red">Reserved Seat</li>
      <li className="seat_status seat_status-white">Empty Seat</li>
    </ul>
  );
};

export default TypeSeat;
