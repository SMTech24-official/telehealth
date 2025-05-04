/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { LuCalendar, LuClock } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiDoctorFace, GiStethoscope } from "react-icons/gi";
import { useGetSingleClinicianQuery } from "@/redux/api/clinicianApi";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import BookingUI from "@/components/BookingUi";

const MapboxWithNoSSR = dynamic(() => import("@/components/MapboxMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-lg animate-pulse" />
  ),
});

const ProfilePage = ({ id }: { id: string }) => {
  const { data: clinicianData, isLoading } = useGetSingleClinicianQuery(id);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState<
    "in-person" | "virtual" | null
  >(null);

  if (isLoading) return <Loading />;

  const clinician = clinicianData?.data || {
    id: id,
    name: "Dr. Jane Doe",
    qualifications: "MD, Cardiologist",
    practice: "Cardiology Center",
    image: "/images/default-avatar.png",
    latitude: 40.7128,
    longitude: -74.006,
    location: "New York, NY",
    availabilityDay: "Monday-Friday",
    availabilityTime: "9:00 AM - 5:00 PM",
    telehealthOnly: false,
    about: "Experienced cardiologist with 10+ years of practice.",
    descriptions: "Specializes in heart disease prevention and treatment.",
    specialities: ["Cardiology", "Heart Disease", "Preventive Care"],
    therapeuticMethods: ["Medication Management", "Lifestyle Counseling"],
    serviceTypes: ["Consultation", "Follow-up", "Emergency"],
    agesServed: ["Adults", "Seniors"],
    portfolioLink: "https://example.com/portfolio",
    appointmentTypes: [
      { type: "in-person", location: "123 Medical Center, New York, NY" },
      { type: "virtual" },
    ],
  };

  // Dummy availability data
  const availability = {
    days: [
      { date: "Apr 30", day: "Wed", times: ["10:00am", "2:00pm", "4:00pm"] },
      { date: "May 1", day: "Thu", times: ["9:00am", "11:00am", "3:00pm"] },
      { date: "May 2", day: "Fri", times: ["10:00am", "1:00pm"] },
    ],
    timeZone: "America/New_York",
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !meetingType) return;

    console.log("Booking:", {
      date: selectedDate,
      time: selectedTime,
      type: meetingType,
      clinicianId: id,
    });

    alert(
      `Appointment booked for ${selectedDate} at ${selectedTime} (${meetingType})`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Profile Info */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg mb-4">
                <Image
                  src={clinician?.image || "/images/default-avatar.png"}
                  alt={`${clinician?.name}'s profile picture`}
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {clinician?.name}
              </h1>
              <p className="text-xl text-blue-600 mb-4">
                {clinician?.qualifications}
              </p>

              <div className="flex items-center mb-4 text-gray-700">
                <MdOutlineHealthAndSafety className="text-gray-500 mr-2" />
                <span>{clinician.practice}</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full text-sm">
                  <LuCalendar className="text-blue-500 mr-2" />
                  <span>{clinician.availabilityDay || "Monday-Friday"}</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full text-sm">
                  <LuClock className="text-blue-500 mr-2" />
                  <span>
                    {clinician.availabilityTime || "9:00 AM - 5:00 PM"}
                  </span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full text-sm">
                  <FaTelegramPlane className="text-blue-500 mr-2" />
                  <span>
                    {clinician.telehealthOnly
                      ? "Telehealth Only"
                      : "In-person & Telehealth"}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <GiDoctorFace className="mr-2 text-blue-500" />
                  About
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {clinician.about || "No information provided."}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <TiDocumentText className="mr-2 text-blue-500" />
                  Professional Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {clinician.descriptions || "No description provided."}
                </p>
              </div>
            </div>
          </div>

          {/* Specialities Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <GiStethoscope className="mr-2 text-blue-500" />
              Specialities
            </h2>
            <div className="flex flex-wrap gap-2">
              {clinician.specialities?.map((speciality: any, index: number) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {speciality}
                </span>
              ))}
            </div>
          </div>

          {/* Therapeutic Methods */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdOutlineHealthAndSafety className="mr-2 text-blue-500" />
              Therapeutic Methods
            </h2>
            <div className="flex flex-wrap gap-2">
              {clinician.therapeuticMethods?.map(
                (method: any, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {method}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Service Types */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TiDocumentText className="mr-2 text-blue-500" />
              Service Types
            </h2>
            <div className="flex flex-wrap gap-2">
              {clinician.serviceTypes?.map((service: any, index: number) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Ages Served */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TiDocumentText className="mr-2 text-blue-500" />
              Ages Served
            </h2>
            <div className="flex flex-wrap gap-2">
              {clinician.agesServed?.map((age: any, index: number) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                >
                  {age}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio Link */}
          {clinician.portfolioLink && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <RiMapPinLine className="mr-2 text-blue-500" />
                Portfolio
              </h2>
              <a
                href={clinician.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                View Professional Portfolio
              </a>
            </div>
          )}
        </div>

        {/* Right Column - Booking and Map */}
        <div className="w-full lg:w-1/3 space-y-6 sticky top-4">
          {/* Booking Section */}
          <BookingUI />

          {/* Map Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <RiMapPinLine className="mr-2 text-blue-500" />
              Location
            </h2>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
              <MapboxWithNoSSR
                latitude={clinician.latitude}
                longitude={clinician.longitude}
                className="h-full"
              />
            </div>
            <div className="flex items-center justify-center p-2 bg-gray-50 border-t">
              <RiMapPinLine className="text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">
                {clinician.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
