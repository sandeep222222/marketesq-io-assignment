import {
    FaAppleAlt,
    FaHome,
    FaCar,
    FaBicycle,
    FaMapMarkerAlt,
    FaBriefcase,
    FaToolbox,
    FaShoppingCart,
    FaWifi,
  } from "react-icons/fa";
  
  const services = [
    {
      id: 1,
      icon: <FaWifi size={66} />,
      title: "High Speed Internet",
      description: "Optical fiber connections...",
    },
    {
      id: 2,
      icon: <FaAppleAlt size={66} />,
      title: "Healthy Meals",
      description:
        "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
    },
    {
      id: 3,
      icon: <FaHome size={66} />,
      title: "Homely Stay",
      description:
        "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space.",
    },
    {
      id: 4,
      icon: <FaCar size={66} />,
      title: "Transportation",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      id: 5,
      icon: <FaBicycle size={66} />,
      title: "Food Delivery",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      id: 6,
      icon: <FaMapMarkerAlt size={66} />,
      title: "Tourism",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      id: 7,
      icon: <FaBriefcase size={66} />,
      title: "Job",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      id: 8,
      icon: <FaToolbox size={66} />,
      title: "Rental Service",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
    {
      id: 9,
      icon: <FaShoppingCart size={66} />,
      title: "Online Shop",
      description:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.",
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="px-4 py-12 text-center">
        <h2 className="mb-8 text-3xl font-bold">Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            >
              {/* Styled Icon */}
              <div className="mb-4 text-gray-400">{service.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
              <p className="text-sm font-semibold text-left gray-600 font-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;