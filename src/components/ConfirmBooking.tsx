import React from 'react';
import { LuCalendar, LuClock, LuGlobe, LuMapPin, LuMonitor, LuUser } from 'react-icons/lu';

function ConfirmBooking() {
    return (
        <div className="container section-gap flex items-center justify-center">
            <div className=" w-full bg-white rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LuCalendar className="w-8 h-8 text-secondary" />
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                    Your meeting has been scheduled
                </h1>

                <p className="text-gray-600 mb-8">
                    Thank you for your appointment request. We will contact you shortly to confirm your request.
                    <br />
                    Please call our office at (720) 310-6713 if you have any questions.
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                    <div className="flex items-center justify-start text-gray-700 gap-2">
                        <LuUser className="w-5 h-5 text-secondary" />
                        <span className="text-secondary">Zina Ortiz</span>
                    </div>

                    <div className="flex items-center justify-start text-gray-700 gap-2">
                        <LuClock className="w-5 h-5 text-secondary" />
                        <span>15 Mins</span>
                        <LuMonitor className="w-5 h-5 text-secondary ml-2" />
                        <span>Telehealth only</span>
                    </div>

                    <div className="flex items-center justify-start text-gray-700 gap-2">
                        <LuCalendar className="w-5 h-5 text-secondary" />
                        <span>10:15 AM - 10:30 AM, Sat, March 1, 2025</span>
                    </div>

                    <div className="flex items-center justify-start text-gray-700 gap-2">
                        <LuMapPin className="w-5 h-5 text-secondary" />
                        <span>Colorado</span>
                    </div>

                    <div className="flex items-center justify-start text-gray-700 gap-2">
                        <LuGlobe className="w-5 h-5 text-secondary" />
                        <span>Asia/Dhaka (GMT +6)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmBooking;