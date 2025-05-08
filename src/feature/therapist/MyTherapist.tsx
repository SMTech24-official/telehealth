/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tag } from "./card/Tag";
import { ClinicianCard } from "./card/ClinicianCard";
import {
  useGetAllClinicianQuery,
  useGetAllServiceTypeQuery,
  useGetAllSpecialitiesQuery,
  useGetAllTherapeuticMethodsQuery,
} from "@/redux/api/clinicianApi";
import Loading from "@/components/Loading";
import { Clinician } from "@/types";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationSearch, { Location } from "@/components/LocationSearch";

// Initialize Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiemluYW9ydGl6IiwiYSI6ImNtOXZkZjRicDBqcTIya3Bvejk1aDlvbzkifQ.aABtdwJT_F12LBEiPEHMtw";

// Dummy filter options
const FILTER_OPTIONS = {
  specialities: [
    "Anxiety",
    "Depression",
    "PTSD",
    "Relationship Issues",
    "Trauma",
    "OCD",
    "ADHD",
    "Eating Disorders",
  ],
  insurance: ["Aetna", "Blue Cross", "Cigna", "United Healthcare", "Medicare"],
  method: ["Virtual", "In-person", "Both"],
  careType: ["Individual", "Couples", "Family", "Group"],
  gender: ["Male", "Female", "Non-binary", "Prefer not to say"],
  ethnicity: [
    "Asian",
    "Black",
    "Hispanic",
    "White",
    "Native American",
    "Other",
    "Prefer not to say",
  ],
  payMethod: ["Insurance", "Out-of-pocket"],
  pocket: ["Under $80", "$80-$140", "$140-$200", "$200-$300", "Over $300"],
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  time: ["Morning", "Noon", "Afternoon", "Evening"],
  disease: [
    "Anxiety Disorders",
    "Mood Disorders",
    "Personality Disorders",
    "Psychotic Disorders",
    "Eating Disorders",
    "Substance Use Disorders",
  ],
  treatments: [
    "CBT",
    "DBT",
    "Psychodynamic",
    "Humanistic",
    "Integrative",
    "EMDR",
    "Art Therapy",
    "Other",
  ],
};

const MyTherapist = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [locationSearch, setLocationSearch] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [location, setLocation] = useState({
    location: "",
    latitude: null,
    longitude: null,
  });
  const { data: serviceTypeData } = useGetAllServiceTypeQuery("");
  const { data: therapeuticMethodData } = useGetAllTherapeuticMethodsQuery("");
  const { data: specialityData } = useGetAllSpecialitiesQuery("");

  // Get active filters from URL
  const activeFilters = Array.from(searchParams.entries()).reduce(
    (acc, [key, value]) => {
      if (value) acc[key] = value;
      return acc;
    },
    {} as Record<string, string>
  );

  // Build query string
  const queryString = new URLSearchParams(activeFilters).toString();
  const { data: cliniciansData, isLoading: cliniciansLoading } =
    useGetAllClinicianQuery(queryString);

  const clinicians: Clinician[] = cliniciansData?.data || [];
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = cliniciansData?.meta?.totalPages || 1;

  // Handler functions
  const handleFilterChange = (filterKey: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set(filterKey, value);
    } else {
      newParams.delete(filterKey);
    }
    newParams.set("page", "1"); // Reset to first page when filters change
    router.push(`/my-therapist?${newParams.toString()}`);
  };

  const handleLocationSearch = () => {
    if (locationSearch) {
      // In a real app, you would geocode the location to get lat/long
      handleFilterChange("location", locationSearch);
    }
  };

  const handleVisitLocation = (therapistId: string) => {
    router.push(`/my-therapist/${therapistId}`);
  };

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page.toString());
    router.push(`/my-therapist?${newParams.toString()}`);
  };

  const handleRemoveFilter = (filterKey: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(filterKey);
    router.push(`/my-therapist?${newParams.toString()}`);
  };

  const handleVisitProfile = (therapistId: string) => {
    router.push(`/therapist/${therapistId}`);
  };

  const handleMessage = (therapistId: string) => {
    console.log(`Message therapist ${therapistId}`);
  };

  // Initialize Mapbox map (same as before)
  useEffect(() => {
    if (clinicians.length === 0 || !mapContainer.current) return;

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 9,
      });
      map.current.addControl(new mapboxgl.NavigationControl());
    }

    const markers: mapboxgl.Marker[] = [];
    const bounds = new mapboxgl.LngLatBounds();

    clinicians.forEach((clinician) => {
      if (clinician.longitude && clinician.latitude) {
        const lngLat = [clinician.longitude, clinician.latitude] as [
          number,
          number
        ];
        bounds.extend(lngLat);

        const popupContent = `
          <div class="p-2 max-w-xs">
            <h3 class="font-bold text-lg">${clinician.name}</h3>
            <p class="text-gray-600">${clinician.practice}</p>
            <p class="mt-2"><strong>Specialties:</strong> ${
              clinician.specialities?.join(", ") || "N/A"
            }</p>
            <p><strong>Location:</strong> ${clinician.location || "N/A"}</p>
            <div class="mt-2 flex justify-end">
              <button class="text-blue-500 hover:underline" data-id="${
                clinician.id
              }">View Profile</button>
            </div>
          </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(popupContent)
          .on("open", () => {
            document
              .querySelector(`button[data-id="${clinician.id}"]`)
              ?.addEventListener("click", () => {
                handleVisitProfile(clinician.id);
              });
          });

        const marker = new mapboxgl.Marker({ color: "#3b82f6" })
          .setLngLat(lngLat)
          .setPopup(popup)
          .addTo(map.current!);

        markers.push(marker);
      }
    });

    if (markers.length > 0) {
      if (markers.length === 1) {
        map.current.jumpTo({
          center: markers[0].getLngLat(),
          zoom: 12,
        });
      } else {
        map.current.fitBounds(bounds, {
          padding: 50,
          maxZoom: 12,
        });
      }
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [clinicians]);

  if (cliniciansLoading) {
    return <Loading />;
  }

  return (
    <div className="container section-gap">
      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Location Search */}
          <div className="flex-1 min-w-[200px]">
            {/* <div className="flex">
              <input
                type="text"
                placeholder="Search location..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLocationSearch()}
              />
              <button
                onClick={handleLocationSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
              >
                Search
              </button>
            </div> */}
            <LocationSearch
              location={location}
              setLocation={
                setLocation as unknown as React.Dispatch<
                  React.SetStateAction<Location>
                >
              }
            />
          </div>

          {/* Main Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={activeFilters.method || ""}
              onChange={(e) => handleFilterChange("method", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Virtual/In-person</option>
              {FILTER_OPTIONS.method.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={activeFilters.gender || ""}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Gender</option>
              {FILTER_OPTIONS.gender.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={activeFilters.specialities || ""}
              onChange={(e) =>
                handleFilterChange("specialities", e.target.value)
              }
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Specialties</option>
              {FILTER_OPTIONS.specialities.map((option) => (
                <option
                  key={option}
                  value={option.toLowerCase().replace(" ", "-")}
                >
                  {option}
                </option>
              ))}
            </select>

            {/* <select
              value={activeFilters.insurance || ""}
              onChange={(e) => handleFilterChange("insurance", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Insurance</option>
              {FILTER_OPTIONS.insurance.map((option) => (
                <option
                  key={option}
                  value={option.toLowerCase().replace(" ", "-")}
                >
                  {option}
                </option>
              ))}
            </select> */}
            <div>
              <select
                value={activeFilters.dayOfWeek || ""}
                onChange={(e) =>
                  handleFilterChange("dayOfWeek", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any day</option>
                {FILTER_OPTIONS.dayOfWeek.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={activeFilters.treatments || ""}
                onChange={(e) =>
                  handleFilterChange("treatments", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All</option>
                {FILTER_OPTIONS.treatments.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={activeFilters.time || ""}
                onChange={(e) => handleFilterChange("time", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any time</option>
                {FILTER_OPTIONS.time.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(activeFilters).map(([key, value]) => (
          <Tag
            key={`filter-${key}-${value}`}
            name={`${key}: ${value.replace(/-/g, " ").replace(/_/g, "-")}`}
            onRemove={() => handleRemoveFilter(key)}
          />
        ))}
      </div>

      {/* Two-column layout: Clinicians on left, Map on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clinician List */}
        <div className="space-y-4">
          {clinicians.length > 0 ? (
            <>
              {clinicians.map((clinician, index) => (
                <ClinicianCard
                  key={`clinician-${clinician.id || index}`}
                  id={clinician.id}
                  name={clinician.name}
                  practice={clinician.practice}
                  descriptions={clinician.descriptions}
                  qualifications={clinician.qualifications}
                  image={clinician.image}
                  location={clinician.location}
                  telehealthOnly={clinician.telehealthOnly}
                  specialities={clinician.specialities}
                  onMessage={() => handleMessage(clinician.id)}
                  onVisitProfile={() => handleVisitProfile(clinician.id)}
                  onLocation={() => handleVisitLocation(clinician.id)}
                />
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <nav className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-1 rounded border ${
                            currentPage === pageNum
                              ? "bg-blue-500 text-white border-blue-500"
                              : "border-gray-300"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                No clinicians found matching your filters
              </p>
            </div>
          )}
        </div>

        {/* Map Container */}
        <div
          ref={mapContainer}
          className="h-[600px] w-full rounded-lg border border-gray-200 shadow-sm"
          style={{ position: "relative" }}
        >
          {clinicians.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">
                Map will display when clinicians are available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTherapist;
