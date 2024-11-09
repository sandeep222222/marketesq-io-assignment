import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import BookingForm from "./BookingForm";


const HeroSection = () => {
  return (
    <section className="relative px-2 pt-6 md:px-12">
      <div className="flex flex-col items-center bg-white md:bg-gray-100 md:flex-row md:justify-between md:items-start md:space-x-6">
        {/* Left Section */}
        <div className="flex flex-col items-center p-6 text-center rounded-lg md:items-start md:text-left md:w-1/2 md:rounded-none md:shadow-none">
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-black sm:text-4xl md:text-5xl">
            Work from <br className="hidden md:block" /> Ladakh
          </h2>
          <p className="mt-4 text-base font-semibold text-gray-700 sm:text-lg md:text-xl">
            India’s first true digital tourism ecosystem
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-gray-700 sm:text-3xl hover:text-blue-800" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="text-2xl text-gray-700 sm:text-3xl hover:text-pink-500" />
            </a>
          </div>
        </div>

        {/* Right Section Image */}
        <div className="w-full mt-6 md:w-1/2 md:mt-0">
          <img
            src="https://beyondwildplaces.com/wp-content/uploads/2023/10/Ladakh-itinerary.jpg"
            alt="Ladakh"
            className="object-cover w-full h-full rounded-lg md:rounded-none"
          />
        </div>
      </div>

      {/* Booking Form */}
      <div className="w-full mt-8">
        <BookingForm />
      </div>
    </section>
  );
};

export default HeroSection;