// pages/BookingPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "../store/slices/bookingSlice";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const BookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingData = useSelector((state) => state.booking);

  const [name, setName] = useState(bookingData.name);
  const [email, setEmail] = useState(bookingData.email);
  const [phone, setPhone] = useState(bookingData.phone);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(bookingData.rooms || 1);
  const [checkInDate, setCheckInDate] = useState(bookingData.checkInDate || "");
  const [checkOutDate, setCheckOutDate] = useState(
    bookingData.checkOutDate || ""
  );
  const [amount, setAmount] = useState(12430);

  // Helper functions
  const updateAdults = (delta) => {
    setAdults((prev) => Math.max(1, prev + delta)); // Minimum 1 adult
  };

  const updateChildren = (delta) => {
    setChildren((prev) => Math.max(0, prev + delta)); // Minimum 0 children
  };

  const updateRooms = (delta) => {
    setRooms((prev) => Math.max(1, prev + delta)); // Minimum 1 room
  };

  const handleCheckInDateChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);

    // Ensure check-out date is not earlier than check-in date
    if (checkOutDate && selectedDate >= checkOutDate) {
      setCheckOutDate("");
    }
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.target.value;
    if (!checkInDate || selectedDate > checkInDate) {
      setCheckOutDate(selectedDate);
    } else {
      alert("Check-out date must be after the check-in date.");
    }
  };

  // Calculate the total amount
  useEffect(() => {
    const basePrice = 10000;
    const adultPrice = 2000 * adults;
    const childPrice = 1000 * children;
    const roomPrice = 3000 * rooms;
    setAmount(basePrice + adultPrice + childPrice + roomPrice);
  }, [adults, children, rooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setBookingData({
        name,
        email,
        phone,
        adults,
        children,
        amount,
        rooms,
        checkInDate,
        checkOutDate,
      })
    );
    navigate("/success");
  };

  return (
    <div className="flex justify-center w-full h-screen bg-white md:h-full">
      <div className="w-full p-8 max-w-[1200px] bg-gray-100">
        <form onSubmit={handleSubmit} className="relative pb-12 space-y-6">
          {/* Personal Information Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="p-3 rounded-lg md:p-4 focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="p-3 bg-white rounded-lg md:p-4 focus:outline-none"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
              className="p-3 bg-white rounded-lg md:p-4 focus:outline-none"
            />

            {/* Adults and Children Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center w-full p-3 bg-white rounded-lg md:p-4">
                <button type="button" onClick={() => updateAdults(-1)}>
                  <CiCircleMinus size={24} />
                </button>
                <span className="px-2 text-sm font-semibold md:text-lg">
                  {adults}
                </span>
                <button type="button" onClick={() => updateAdults(1)}>
                  <FaCirclePlus size={20} />
                </button>
                <span className="ml-2 text-gray-700">
                  Adult{adults > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center w-full p-3 bg-white rounded-lg md:p-4">
                <button type="button" onClick={() => updateChildren(-1)}>
                  <CiCircleMinus size={24} />
                </button>
                <span className="px-2 text-sm font-semibold md:text-lg">
                  {children}
                </span>
                <button type="button" onClick={() => updateChildren(1)}>
                  <FaCirclePlus size={20} />
                </button>
                <span className="ml-2 text-gray-700">Children</span>
              </div>
            </div>
          </div>

          {/* Dates and Rooms */}
          <div className="absolute flex flex-col md:flex-row items-center justify-between w-full max-w-[90%] md:max-w-[900px] py-6 px-6 md:py-8 md:px-8 transform -translate-x-1/2 bg-white rounded-lg shadow left-1/2 space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-auto">
              <label className="block font-semibold text-gray-700">
                CHECK-IN
              </label>
              <input
                type="date"
                min={checkInDate}
                value={checkInDate}
                onChange={handleCheckInDateChange}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="w-full md:w-auto">
              <label className="block font-semibold text-gray-700">
                CHECK-OUT
              </label>
              <input
                type="date"
                value={checkOutDate}
                min={checkInDate}
                onChange={handleCheckOutDateChange}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="w-full text-center md:w-auto">
              <label className="block font-semibold text-gray-700">ROOMS</label>
              <div className="flex items-center justify-center mt-1 space-x-2">
                <button type="button" onClick={() => updateRooms(-1)}>
                  <CiCircleMinus size={24} />
                </button>
                <span className="font-semibold">{rooms}</span>
                <button type="button" onClick={() => updateRooms(1)}>
                  <FaCirclePlus size={22} />
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center w-full max-w-[150px]  justify-between rounded-lg  bg-[#2667a8]">
                <div className="flex items-center ml-3 text-white ">
                  <span className="mr-1 text-lg">₹</span>
                  <p className="text-lg font-semibold">
                    {" "}
                    {amount.toLocaleString("en-IN")}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-4 rounded-r-lg py-4 bg-[#174c82] hover:bg-[#065baf] "
                >
                  <FaArrowRight size={24} className="text-white" />
                </button>
              </div>
              <span className="font-semibold text-center text-[12px] ">
                Click to pay token amount
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;