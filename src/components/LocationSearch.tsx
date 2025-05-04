/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiemluYW9ydGl6IiwiYSI6ImNtOXZkZjRicDBqcTIya3Bvejk1aDlvbzkifQ.aABtdwJT_F12LBEiPEHMtw";

export interface Location {
    location: string;
    latitude: number | null;
    longitude: number | null;
  }
  
  interface LocationSearchProps {
    location: Location;
    setLocation: React.Dispatch<React.SetStateAction<Location>>;
  }

const LocationSearch = ({ location, setLocation }: LocationSearchProps) => {
  const [query, setQuery] = useState(location.location || "");
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search locations with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        searchLocations(query);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchLocations = async (searchText: string) => {
    setIsSearching(true);
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchText
        )}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
      );
      const data = await response.json();
      setResults(data.features || []);
      setShowResults(true);
    } catch (error) {
      console.error("Error searching locations:", error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectLocation = (place: any) => {
    setLocation({
      location: place.place_name,
      latitude: place.center[1],
      longitude: place.center[0]
    });
    setQuery(place.place_name);
    setShowResults(false);
  };

  const clearSearch = () => {
    setQuery("");
    setLocation({ location: "", latitude: null, longitude: null });
    setResults([]);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowResults(true)}
          placeholder="Search for a location..."
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <FiX className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {isSearching && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <div className="px-4 py-2 text-gray-500">Searching...</div>
        </div>
      )}

      {showResults && results.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white rounded-md shadow-lg border border-gray-200">
          {results.map((place) => (
            <li
              key={place.id}
              onClick={() => handleSelectLocation(place)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-gray-900">{place.text}</div>
              <div className="text-sm text-gray-500">{place.place_name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;