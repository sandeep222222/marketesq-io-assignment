import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setBookingData } from "../store/slices/bookingSlice";

const BookingForm = () => {
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCheckInDate(today);
    setCheckOutDate(today);
    dispatch(setBookingData({ checkInDate: today, checkOutDate: today }));
  }, [dispatch]);
  // Function to handle room count
  const handleRoomChange = (value) => {
    const updatedRooms = Math.max(1, rooms + value);
    setRooms(updatedRooms);
    dispatch(setBookingData({ rooms: updatedRooms }));
  };
  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);
    dispatch(setBookingData({ checkInDate: selectedDate }));
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.target.value;
    if (!checkInDate || selectedDate > checkInDate) {
      setCheckOutDate(selectedDate);
      dispatch(setBookingData({ checkOutDate: selectedDate }));
    } else {
      alert("Check-out date must be after the check-in date.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-between w-full px-6 py-4 md:px-8 md:py-6 mt-8 bg-white rounded-lg shadow-lg max-w-[900px] mx-auto md:-bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 md:absolute">
      {/* Check-In Date */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <label className="text-lg font-semibold text-gray-700">CHECK-IN</label>
        <input
          type="date"
          min={checkInDate}
          value={checkInDate}
          onChange={handleCheckInDateChange}
          className="mt-1 text-sm font-bold text-gray-700 focus:outline-none"
        />
      </div>

      {/* Divider for larger screens */}
      <div className="hidden md:block border-l-2 border-gray-300 h-[60px]"></div>

      {/* Check-Out Date */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <label className="text-lg font-semibold text-gray-700">CHECK-OUT</label>
        <input
          type="date"
          min={checkInDate}
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
          className="mt-1 text-sm font-bold text-gray-700 focus:outline-none"
        />
      </div>

      {/* Divider for larger screens */}
      <div className="hidden md:block border-l-2 border-gray-300 h-[60px]"></div>

      {/* Rooms Selector */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <label className="mb-1 text-lg font-semibold text-gray-700">
          ROOMS
        </label>
        <div className="flex items-center space-x-2">
          <button onClick={() => handleRoomChange(-1)} className="outline-none">
            <CiCircleMinus size={24} />
          </button>
          <span className="px-2 text-lg font-semibold text-gray-700">
            {rooms}
          </span>
          <button onClick={() => handleRoomChange(1)} className="outline-none">
            <FaCirclePlus size={22} />
          </button>
        </div>
      </div>

      {/* Book Button */}
      <Link to="/booking" className="w-full md:w-auto">
        <button className="w-full md:w-auto px-8 py-3 font-semibold text-white bg-[#2667a8] rounded-lg hover:bg-blue-700">
          BOOK
        </button>
      </Link>
    </div>
  );
};

export default BookingForm;