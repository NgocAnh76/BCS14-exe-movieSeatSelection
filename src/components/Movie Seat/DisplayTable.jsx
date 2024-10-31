import React from "react";

const DisplayTable = () => {
  return (
    <div className="displayBox text-center mx-auto mt-3">
      <table className="displayTable ">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>
              <textarea name="" id="nameDisplay" disabled></textarea>
            </td>
            <td>
              <textarea name="" id="numberDisplay" disabled></textarea>
            </td>
            <td>
              <textarea name="" id="seatsDisplay" disabled></textarea>
            </td>
            <td>
              <textarea name="" id="seatsPrice" disabled></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
