// DiscoverSection.jsx


import { reviews } from "../data";

const DiscoverSection = () => {
  return (
    <section className="px-2 py-12 mt-12 text-center bg-white md:px-8">
      <h2 className="mb-8 text-3xl font-bold">Discover</h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* First Card */}
        <div
          key={reviews[0].id}
          className="w-full max-w-sm p-6 text-left bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPdOELM1xJDMOG26aMVUgDv1A7hDzFPvLjUTEuKegkJ93lG95t"
              alt={`${reviews[0].name}`}
              className="object-cover w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">{reviews[0].name}</h3>
              <div className="text-yellow-500">⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-gray-600">
            {reviews[0].review.substring(0, 150)}...{" "}
            <a href="/" className="text-blue-600">
              read more
            </a>
          </p>
        </div>

        {/* Second Card - Ladakh Landscape */}
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
          <img 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSsdEoAu69b9dyb-wuwbDPpJuU8mSbaWChVbu2sSjYoP-N1pRV9 "
            alt="Ladakh Landscape"
            className="object-cover w-full h-48"
           
          />
          <div className="w-full max-w-sm p-6 text-left bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={reviews[0].imageUrl}
                alt={`${reviews[0].name}`}
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{reviews[0].name}</h3>
                <div className="text-yellow-500">⭐⭐⭐⭐</div>
              </div>
            </div>
            <p className="text-gray-600">
              {reviews[0].review.substring(0, 150)}...{" "}
              <a href="/" className="text-blue-600">
                read more
              </a>
            </p>
          </div>
        </div>

        {/* Remaining Cards */}
        {reviews.slice(1).map((review) => (
          <div
            key={review.id}
            className="w-full max-w-sm p-6 text-left bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPdOELM1xJDMOG26aMVUgDv1A7hDzFPvLjUTEuKegkJ93lG95t"
                alt={`${review.name}`}
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{review.name}</h3>
                <div className="text-yellow-500">⭐⭐⭐⭐  </div>
              </div>
            </div>
            <p className="text-gray-600">
              {review.review.substring(0, 150)}...{" "}
              <a href="/" className="text-blue-600">
                read more
              </a>
            </p>

            





          </div>
        ))}

        




      </div>
    </section>
  );
};

export default DiscoverSection;