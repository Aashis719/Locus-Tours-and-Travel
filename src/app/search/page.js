'use client'
import { useSearchParams } from 'next/navigation'; // ✅ Correct for Next.js App Router
import { MdLocationOn } from 'react-icons/md';
import destinations from '@/app/search/Destination'; // ✅ Ensure correct import path

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || ''; // ✅ Get search query from URL

  // Filter destinations based on place or location
  const filteredDestinations = destinations.filter((destination) =>
    destination.place.toLowerCase().includes(query) || 
    destination.location.toLowerCase().includes(query)
  );

  return (
    <section>
      <div className="py-5 md:py-10 text-gray-700 bg-white min-h-screen">
        {/* <p className='ml-2 mb-3 md:ml-20 mt-0'>Searched for: <span className="font-bold">{query}</span></p> */}
        <h1 className="text-3xl text-center text-gray-700 font-bold">Destinations</h1>
        <div className="p-10 flex gap-4 flex-wrap justify-center">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((place, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg w-80 hover:scale-105 duration-200 cursor-pointer">
                <img
                  src={place.image}
                  alt={place.place}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{place.place}</h2>
                  <p className="text-gray-600 flex items-center italic">
                    <MdLocationOn className="text-red-600" /> {place.location}
                  </p>
                  <p className="text-green-500 font-bold">{place.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl font-semibold">No destinations found for "{query}".</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
