/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

// Custom SVG icons as components
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default function BookingUI() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [meetingType, setMeetingType] = useState(null);

  // Dummy clinician data
  const clinician = {
    name: "Dr. Jane Doe",
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

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !meetingType) return;

    alert(
      `Appointment booked for ${selectedDate} at ${selectedTime} (${meetingType})`
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
        When would you like to meet {clinician.name.split(" ")[0]}?
      </h2>
      <p className="text-gray-500 mb-6">
        All times are listed in your current timezone.
      </p>

      {/* Availability Calendar */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-lg font-semibold mb-3 md:mb-4">Available Dates</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {availability.days.map((day) => (
            <button
              key={day.date}
              onClick={() => handleDateSelect(day.date)}
              className={`py-2 px-1 rounded-lg text-center border ${
                selectedDate === day.date
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-xs font-medium">{day.day}</div>
              <div className="text-sm">{day.date.split(" ")[0]}</div>
            </button>
          ))}
        </div>

        {selectedDate && (
          <>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">
              Available Times
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availability.days
                .find((day) => day.date === selectedDate)
                ?.times.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`py-2 px-1 rounded-lg text-center border ${
                      selectedTime === time
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
            </div>
          </>
        )}
      </div>

      {/* Meeting Type Selection */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-lg font-semibold mb-3 md:mb-4">
          How would you like to meet?
        </h3>
        <div className="space-y-3 md:space-y-4">
          {clinician.appointmentTypes.map((type:any) => (
            <div
              key={type.type}
              onClick={() => setMeetingType(type.type)}
              className={`p-3 md:p-4 border rounded-lg cursor-pointer transition-colors ${
                meetingType === type.type
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                    meetingType === type.type
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-400"
                  }`}
                >
                  {meetingType === type.type && <CheckIcon />}
                </div>
                <div>
                  <h4 className="font-medium capitalize">{type.type}</h4>
                  {type.type === "in-person" && type.location && (
                    <p className="text-sm text-gray-500 mt-1">
                      {type.location}
                    </p>
                  )}
                  {type.type === "virtual" && (
                    <p className="text-sm text-gray-500 mt-1">
                      Video call meeting
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mb-6 md:mb-8 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start space-x-2 md:space-x-3 mb-2">
          <span className="text-blue-500 mt-0.5">
            <CalendarIcon />
          </span>
          <div>
            <h4 className="font-medium text-blue-800">Appointment Details</h4>
            <p className="text-sm text-blue-700">
              {selectedDate ? selectedDate : "Select a date"}
              {selectedTime ? ` at ${selectedTime}` : ""}
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2 md:space-x-3">
          <span className="text-blue-500 mt-0.5">
            <ClockIcon />
          </span>
          <div>
            <h4 className="font-medium text-blue-800">Duration</h4>
            <p className="text-sm text-blue-700">60 minutes</p>
          </div>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTime || !meetingType}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          selectedDate && selectedTime && meetingType
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        {selectedDate && selectedTime && meetingType
          ? `Book session for ${selectedDate}`
          : "Complete all selections to book"}
      </button>
    </div>
  );
}
