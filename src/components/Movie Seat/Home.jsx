import React, { useState } from "react";

const Home = () => {
  let [formData, setFormData] = useState({
    name: "",
    numberSeat: 0,
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [displayInfo, setDisplayInfo] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatPerRow = 12;
  const seatPrice = 150000;

  const handleInput = (e) => {
    let { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.numberSeat) {
      alert("Please Enter your Name and Number of Seats");
      return;
    } else {
      alert("Please choose your seat");
    }

    setSelectedSeats([]);
    setIsSelecting(true);
  };
  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < formData.numberSeat) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      alert("You have selected enough quantity.");
    }
  };
  // Kiểm tra ghế có bị khóa không (đã đặt trước đó)
  const isSeatDisabled = (seat) => reservedSeats.includes(seat) || !isSelecting;

  // Xác nhận ghế đã chọn
  const confirmSelection = () => {
    if (selectedSeats.length == formData.numberSeat) {
      setReservedSeats([...reservedSeats, ...selectedSeats]); // Thêm ghế vào danh sách đã đặt
      setDisplayInfo({
        name: formData.name,
        numberSeat: formData.numberSeat,
        seats: selectedSeats.join(", "),
        price: (selectedSeats.length * seatPrice).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
      });

      // console.log(formattedPrice);
      setSelectedSeats([]);
      setIsSelecting(false);
    } else {
      alert("Vui lòng chọn đúng số ghế đã nhập.");
    }
  };

  return (
    <>
      <div className="home_heading fw-bold text-center">
        <h1 className="text-uppercase text-warning">
          Đặt vé xem Phim CyberLearn.vn
        </h1>
        <p className="home_heading-screen text-light fs-3">Màng Hình</p>
      </div>
      <div className="home mx-auto">
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="home-input d-flex justify-content-center">
            <div className="home_left ">
              <label htmlFor="name" className=" fs-5  fw-semibold">
                Name
                <span className="bg-red-500 px-1">*</span>
              </label>
              <input
                onChange={handleInput}
                data-type="name"
                id="name"
                name="name"
                type="text"
                className="home-input_name"
              />
            </div>
            <div className="home_right ">
              <label htmlFor="numberSeat" className="  ms-3 fs-5  fw-semibold ">
                Number of seat
                <span className="bg-red-500 px-1">*</span>
              </label>
              <input
                onChange={handleInput}
                data-type="numberSeat"
                id="numberSeat"
                name="numberSeat"
                type="number"
                className="home-input_seat"
              />
            </div>
          </div>
          <button className="home_button">Start selecting</button>
        </form>
        {/* <TypeSeat /> */}
        <ul className="mt-3">
          <li className="seat_status seat_status-green">Selected Seat</li>
          <li className="seat_status seat_status-red">Reserved Seat</li>
          <li className="seat_status seat_status-white">Empty Seat</li>
        </ul>
        <div className="home_body text-center mx-auto">
          <p id="notification"></p>
          {/* <TableSelectSeat /> */}
          <table className="table_seat text-center">
            <tbody>
              <tr>
                <td></td>
                {[...Array(12)].map((_, index) => (
                  <td key={`${index + 1}`}>{index + 1}</td>
                ))}
              </tr>
              {rows.map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  {[...Array(seatPerRow)].map((_, index) => (
                    <td key={`${row}${index + 1}`}>
                      <input
                        type="checkbox"
                        className="seats"
                        value={`${row}${index + 1}`}
                        checked={selectedSeats.includes(`${row}${index + 1}`)}
                        onChange={() =>
                          handleSeatSelection(`${row}${index + 1}`)
                        }
                        disabled={isSeatDisabled(`${row}${index + 1}`)}
                        style={{
                          backgroundColor: selectedSeats.includes(
                            `${row}${index + 1}`
                          )
                            ? "green"
                            : reservedSeats.includes(`${row}${index + 1}`)
                            ? "red"
                            : "white",
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="screen w-full my-5"
            style={{ backgroundColor: "#ff9800" }}
          >
            <h2 className="screen_title">Screen this way</h2>
          </div>

          <button onClick={confirmSelection} className="home_button">
            Confirm Selection
          </button>
        </div>
        {/* <DisplayTable /> */}
        <div className="displayBox text-center mx-auto mt-3">
          <table className="displayTable ">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number of Seats</th>
                <th>Seats</th>
                <th>Price</th>
              </tr>
              {displayInfo ? (
                <tr>
                  <td>
                    <textarea
                      id="nameDisplay"
                      value={displayInfo.name || ""}
                      disabled
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      id="numberDisplay"
                      value={displayInfo.numberSeat || ""}
                      disabled
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      id="seatsDisplay"
                      value={displayInfo.seats || ""}
                      disabled
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      id="seatsPrice"
                      value={displayInfo.price || ""}
                      disabled
                    ></textarea>
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
