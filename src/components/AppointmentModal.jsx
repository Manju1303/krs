import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, Stethoscope, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { departments, doctors, hospitalInfo } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, initialDeptId, initialDoctorName }) {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState(departments[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('10:00 AM');
  
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [symptoms, setSymptoms] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (typeof initialDeptId === 'string' && initialDeptId) {
      setSelectedDept(initialDeptId);
    } else {
      setSelectedDept(departments[0].id);
    }

    if (typeof initialDoctorName === 'string' && initialDoctorName) {
      setSelectedDoctor(initialDoctorName);
    } else {
      setSelectedDoctor('');
    }
    
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setAppointmentDate(tomorrow.toISOString().split('T')[0]);
  }, [initialDeptId, initialDoctorName, isOpen]);

  if (!isOpen) return null;

  const currentDeptDoctors = doctors.filter(doc => doc.departmentId === selectedDept);
  const activeDeptObj = departments.find(d => d.id === selectedDept) || departments[0];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', 
    '04:30 PM', '05:30 PM', '06:30 PM', '07:30 PM'
  ];

  const handleNextStep = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!patientName || !patientPhone) {
        alert("Please enter patient name and mobile number.");
        return;
      }
      const refId = "KRS-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(refId);
      setStep(4);
    }
  };

  const resetForm = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
      <div className="glass-card max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl relative space-y-6 max-h-[95vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white font-heading">Book Appointment</h3>
              <p className="text-xs text-emerald-400 font-medium">KRS Multispeciality Hospital • Edappadi</p>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        {step < 4 && (
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-2">
            <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-emerald-400 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[10px]">1</span>
              <span>Doctor</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-800" />
            <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-emerald-400 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[10px]">2</span>
              <span>Schedule</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-800" />
            <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-emerald-400 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[10px]">3</span>
              <span>Details</span>
            </div>
          </div>
        )}

        {/* STEP 1: Select Department & Doctor */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Medical Department *</label>
              <select
                value={selectedDept}
                onChange={(e) => {
                  setSelectedDept(e.target.value);
                  setSelectedDoctor('');
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                {departments.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Specialist Doctor (Optional)</label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="">Any Available Specialist Doctor in Department</option>
                {currentDeptDoctors.map(doc => (
                  <option key={doc.id} value={doc.name}>{doc.name} ({doc.degrees})</option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNextStep}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Date & Time Slot */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Appointment Date *</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Select Preferred Consultation Slot *</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setAppointmentTime(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      appointmentTime === slot 
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow' 
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2"
              >
                <span>Patient Information</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Patient Details */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4 animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Mobile Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Age</label>
                <input
                  type="number"
                  placeholder="e.g. 35"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Gender</label>
                <select
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Brief Symptoms / Medical Reason</label>
              <textarea
                rows="2"
                placeholder="Describe your health concern..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="pt-3 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm & Submit Booking</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Booking Confirmation Card */}
        {step === 4 && (
          <div className="space-y-6 text-center animate-fade-in py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto text-2xl font-bold animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white font-heading">Appointment Request Received!</h3>
              <p className="text-xs text-emerald-400 font-semibold mt-1">Ref ID: {bookingRef}</p>
              <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{patientName}</strong>. Our hospital front-desk team at Edappadi will call your number <strong className="text-white">{patientPhone}</strong> shortly to confirm your slot.
              </p>
            </div>

            {/* Summary Details Card */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Department:</span>
                <span className="font-bold text-white">{activeDeptObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Doctor:</span>
                <span className="font-bold text-emerald-400">{selectedDoctor || "Duty Specialist Physician"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Slot:</span>
                <span className="font-bold text-white">{appointmentDate} at {appointmentTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">Edappadi Main Campus</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/919443255555?text=Hello%20KRS%20Hospital,%20I%20have%20booked%20an%20appointment%20Ref:%20${bookingRef}%20for%20${patientName}%20on%20${appointmentDate}%20at%20${appointmentTime}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send WhatsApp Reminder</span>
              </a>

              <button
                onClick={resetForm}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
