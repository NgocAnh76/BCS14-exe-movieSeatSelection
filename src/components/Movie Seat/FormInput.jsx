import React from "react";

const FormInput = () => {
  return (
    <div className="input-form">
      <div className="home-input d-flex justify-content-center">
        <div className="home_left ">
          <label htmlFor="name" className=" fs-5  fw-semibold">
            Name
            <span className="bg-red-500 px-1">*</span>
          </label>
          <input id="name" type="text" className="home-input_name" />
        </div>
        <div className="home_right ">
          <label htmlFor="numberSeat" className="  ms-3 fs-5  fw-semibold ">
            Number of seat
            <span className="bg-red-500 px-1">*</span>
          </label>
          <input id="numberSeat" type="number" className="home-input_seat" />
        </div>
      </div>
      <button className="home_button">Start selecting</button>
    </div>
  );
};

export default FormInput;
