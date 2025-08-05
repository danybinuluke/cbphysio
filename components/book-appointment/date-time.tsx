'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, User, Users, Sun, Moon, Sunset, ArrowRight, Phone, KeyRound } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Service {
  id: 'consultation' | 'follow-up';
  title: string;
  duration: number; // in minutes
  icon: React.ElementType;
}

interface DateInfo {
  date: Date;
  dayName: string;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
}

// --- MOCK DATA (Updated for In-Person) ---
const services: Service[] = [
  { id: 'consultation', title: 'In-Person Consultation', duration: 50, icon: User },
  { id: 'follow-up', title: 'Follow-up Visit', duration: 30, icon: Users },
];

const availableTimes = {
  morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
  afternoon: ['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM'],
  evening: ['06:00 PM', '06:30 PM', '07:00 PM'],
};

// --- HELPER FUNCTIONS ---
const getCalendarGrid = (year: number, month: number): DateInfo[] => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    const grid: DateInfo[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month's days
    for (let i = firstDayOfMonth; i > 0; i--) {
        const date = new Date(year, month - 1, lastDayOfPrevMonth - i + 1);
        grid.push({
            date,
            dayName: '',
            dayNumber: date.getDate(),
            isCurrentMonth: false,
            isToday: false,
            isPast: date < today,
        });
    }

    // Current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const date = new Date(year, month, i);
        grid.push({
            date,
            dayName: '',
            dayNumber: i,
            isCurrentMonth: true,
            isToday: date.toDateString() === today.toDateString(),
            isPast: date < today,
        });
    }

    // Next month's days
    const remainingCells = 42 - grid.length;
    for (let i = 1; i <= remainingCells; i++) {
        const date = new Date(year, month + 1, i);
        grid.push({
            date,
            dayName: '',
            dayNumber: i,
            isCurrentMonth: false,
            isToday: false,
            isPast: date < today,
        });
    }

    return grid;
};


// --- MAIN COMPONENT ---
export default function AppointmentPage() {
  // Verification State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  // Booking State
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [step, setStep] = useState(1); // 1: Select, 2: Confirm

  const dateScrollRef = useRef<HTMLDivElement>(null);

  // --- DERIVED STATE & MEMOS ---
  const calendarGrid = useMemo(() => getCalendarGrid(calendarYear, calendarMonth), [calendarYear, calendarMonth]);
  const upcomingDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < 14; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        days.push(date);
    }
    return days;
  }, []);

  // --- EFFECTS ---
  useEffect(() => {
    // Reset time when date or service changes
    setSelectedTime(null);
  }, [selectedDate, selectedService]);

  useEffect(() => {
    // Center the selected date in the horizontal scroller
    if (dateScrollRef.current) {
        const selectedElement = dateScrollRef.current.querySelector('.bg-indigo-600');
        if (selectedElement) {
            selectedElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }
  }, [selectedDate, isVerified]); // Rerun when verified to ensure scroll happens on first load

  // --- HANDLERS ---
  const handleSendOtp = () => {
    if (name.trim() === '' || phone.trim().length < 10) {
        setVerificationError('Please enter a valid name and 10-digit phone number.');
        return;
    }
    setVerificationError('');
    // --- MOCK OTP SENDING ---
    console.log(`Sending OTP to ${phone} for ${name}`);
    alert(`An OTP has been sent to ${phone}. (For demo, use 123456)`);
    setShowOtpInput(true);
  };

  const handleVerifyOtp = () => {
    // --- MOCK OTP VERIFICATION ---
    if (otp === '123456') {
        setVerificationError('');
        setIsVerified(true);
    } else {
        setVerificationError('Invalid OTP. Please try again.');
    }
  };

  const handleDateSelect = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return;
    setSelectedDate(date);
    if (isCalendarOpen) {
      setCalendarOpen(false);
    }
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    let newMonth = calendarMonth;
    let newYear = calendarYear;

    if (direction === 'next') {
        newMonth++;
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }
    } else {
        newMonth--;
        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
    }
    setCalendarMonth(newMonth);
    setCalendarYear(newYear);
  };
  
  const handleBookingConfirmation = () => {
      if (!selectedTime) {
          alert("Please select a time slot.");
          return;
      }
      // In a real app, you would handle the booking logic here (e.g., API call)
      console.log({
          name: name,
          phone: phone,
          service: selectedService.title,
          date: selectedDate.toLocaleDateString(),
          time: selectedTime,
      });
      alert(`Appointment for ${selectedService.title} on ${selectedDate.toLocaleDateString()} at ${selectedTime} is booked!`);
      // Reset state
      setStep(1);
      setSelectedDate(new Date());
      setSelectedTime(null);
      // Optional: could also reset verification state
      // setIsVerified(false);
      // setName('');
      // setPhone('');
  };
  
  // --- RENDER FUNCTIONS ---
  const renderVerificationForm = () => (
    <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Details</h2>
        <p className="text-gray-500 mb-6">We need a few details to get started.</p>
        <div className="space-y-4">
            <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>
            <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="tel"
                    placeholder="10-Digit Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>
            {showOtpInput && (
                <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text"
                        placeholder="6-Digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                </div>
            )}
            {verificationError && <p className="text-red-500 text-sm">{verificationError}</p>}
        </div>
        <div className="mt-6">
            {!showOtpInput ? (
                <button
                    onClick={handleSendOtp}
                    className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                    Send OTP
                </button>
            ) : (
                <button
                    onClick={handleVerifyOtp}
                    className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                    Verify & Proceed
                </button>
            )}
        </div>
    </div>
  );

  const renderServiceSelector = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => setSelectedService(service)}
          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
            selectedService.id === service.id
              ? 'bg-indigo-50 border-indigo-600 shadow-lg scale-105'
              : 'bg-white border-gray-200 hover:border-indigo-400'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${selectedService.id === service.id ? 'bg-indigo-600' : 'bg-gray-100'}`}>
              <service.icon className={`w-6 h-6 ${selectedService.id === service.id ? 'text-white' : 'text-indigo-600'}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-500 flex items-center gap-2"><Clock className="w-4 h-4" /> {service.duration} minutes</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDateSelector = () => (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <button onClick={() => setCalendarOpen(true)} className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                <Calendar className="w-5 h-5" />
                <span>Full Calendar</span>
            </button>
        </div>
        <div ref={dateScrollRef} className="flex space-x-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {upcomingDays.map((day, index) => {
                const isSelected = day.toDateString() === selectedDate.toDateString();
                return (
                    <div
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        className={`flex-shrink-0 text-center p-3 rounded-xl cursor-pointer w-20 transition-all duration-300 ${
                            isSelected ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white hover:bg-gray-50 border border-gray-200'
                        }`}
                    >
                        <p className={`text-sm ${isSelected ? 'text-indigo-200' : 'text-gray-500'}`}>{day.toLocaleDateString('en-US', { weekday: 'short' })}</p>
                        <p className={`text-2xl font-bold mt-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>{day.getDate()}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
  
  const renderTimeSlots = () => (
    <div className="space-y-8">
        {Object.entries(availableTimes).map(([period, times]) => {
            const Icon = { morning: Sun, afternoon: Sunset, evening: Moon }[period] ?? (() => <></>);
            return (
                <div key={period}>
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-700 mb-4">
                        {Icon ? <Icon className="w-6 h-6 text-indigo-500" /> : <></>}
                        <span className="capitalize">{period}</span>
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {times.map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-lg text-center transition-all duration-300 font-semibold ${
                                    selectedTime === time
                                        ? 'bg-indigo-600 text-white shadow-md scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            );
        })}
    </div>
  );
  
  const renderConfirmation = () => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Confirm Your Appointment</h2>
        <div className="space-y-4 text-gray-600">
            <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-semibold">Name:</span>
                <span className="text-gray-800 font-bold">{name}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-semibold">Service:</span>
                <span className="text-gray-800 font-bold">{selectedService.title}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-semibold">Date:</span>
                <span className="text-gray-800 font-bold">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex justify-between items-center pb-2">
                <span className="font-semibold">Time:</span>
                <span className="text-gray-800 font-bold">{selectedTime}</span>
            </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
                onClick={() => setStep(1)}
                className="w-full px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
                Go Back
            </button>
            <button
                onClick={handleBookingConfirmation}
                className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
                Confirm Booking
            </button>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
                {isVerified ? `Welcome, ${name.split(' ')[0]}!` : 'Book an Appointment'}
            </h1>
            <p className="mt-3 text-lg text-gray-500">
                {isVerified ? 'Let\'s get you scheduled with Dr. Vandana.' : 'First, let\'s verify your phone number.'}
            </p>
        </header>

        {!isVerified ? (
            renderVerificationForm()
        ) : (
            <>
                {step === 1 && (
                    <div className="space-y-12">
                        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">1. Select a Service</h2>
                            {renderServiceSelector()}
                        </div>

                        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">2. Choose Date & Time</h2>
                            {renderDateSelector()}
                        </div>

                        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                            {renderTimeSlots()}
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedTime}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                <span>Proceed to Confirm</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && renderConfirmation()}
            </>
        )}
      </main>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setCalendarOpen(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => handleMonthChange('prev')} className="p-2 rounded-full hover:bg-gray-100"><ChevronLeft className="w-6 h-6 text-gray-600" /></button>
                    <h3 className="text-lg font-bold text-gray-800">{new Date(calendarYear, calendarMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                    <button onClick={() => handleMonthChange('next')} className="p-2 rounded-full hover:bg-gray-100"><ChevronRight className="w-6 h-6 text-gray-600" /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {calendarGrid.map((dayInfo, index) => {
                        const isSelected = dayInfo.date.toDateString() === selectedDate.toDateString();
                        return (
                            <button
                                key={index}
                                disabled={dayInfo.isPast || !dayInfo.isCurrentMonth}
                                onClick={() => handleDateSelect(dayInfo.date)}
                                className={`w-10 h-10 rounded-full transition-colors font-semibold flex items-center justify-center
                                    ${!dayInfo.isCurrentMonth ? 'text-gray-300' : ''}
                                    ${dayInfo.isPast ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-indigo-100'}
                                    ${isSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'text-gray-700'}
                                    ${dayInfo.isToday && !isSelected ? 'border-2 border-indigo-400' : ''}
                                `}
                            >
                                {dayInfo.dayNumber}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
