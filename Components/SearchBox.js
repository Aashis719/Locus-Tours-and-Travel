'use client';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Use `next/navigation` instead of `next/router`

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const router = useRouter(); // ✅ Correctly use `useRouter()` from `next/navigation`

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      router.push(`/search?q=${query}`); // ✅ Redirect to `/search?q=query`
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Start your Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full p-4 pl-12 pr-4 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-0 text-lg"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBox;
