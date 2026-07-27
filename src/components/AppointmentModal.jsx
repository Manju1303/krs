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
  const [patientEmail, setPatientEmail] = useState('');
  const [patientCity, setPatientCity] = useState('');
  const [contactPref, setContactPref] = useState('Phone Call');
  const [visitType, setVisitType] = useState('First Visit');
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
      <div className="max-w-xl w-full p-6 sm:p-8 rounded-3xl relative space-y-6 max-h-[95vh] overflow-y-auto"
        style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.10)', boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center font-bold shadow-sm">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 font-heading">Book Specialist Appointment</h3>
              <p className="text-xs text-emerald-600 font-medium">KRS Multispeciality Hospital • Edappadi</p>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg transition-colors" style={{ background: '#f1f5f9', color: '#64748b' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        {step < 4 && (
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-2">
            <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-emerald-700 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[10px] text-teal-600">1</span>
              <span>Selection</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-100" />
            <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-emerald-700 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[10px] text-teal-600">2</span>
              <span>Schedule</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-100" />
            <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-emerald-700 font-bold' : ''}`}>
              <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[10px] text-teal-600">3</span>
              <span>Details</span>
            </div>
          </div>
        )}

        {/* STEP 1: Department & Specialist Selection */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Medical Department *</label>
                <select
                  value={selectedDept}
                  onChange={(e) => {
                    setSelectedDept(e.target.value);
                    setSelectedDoctor('');
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                >
                  {departments.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Specialist Doctor (Optional)</label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                >
                  <option value="">Any Available Specialist Doctor in Department</option>
                  {currentDeptDoctors.map(doc => (
                    <option key={doc.id} value={doc.name}>{doc.name} ({doc.degrees})</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNextStep}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-transform hover:scale-102"
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
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Preferred Date *</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Select Preferred Consultation Slot *</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setAppointmentTime(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      appointmentTime === slot 
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-transparent shadow' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
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
                className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-transform hover:scale-102"
              >
                <span>Patient Information</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Comprehensive Patient Details */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4 animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Periyasamy"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="patient@example.com"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City / Town / Native Area</label>
                <input
                  type="text"
                  placeholder="e.g. Edappadi, Salem, Sankari"
                  value={patientCity}
                  onChange={(e) => setPatientCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                <input
                  type="number"
                  placeholder="e.g. 42"
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                <select
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Visit Type</label>
                <select
                  value={visitType}
                  onChange={(e) => setVisitType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                >
                  <option value="First Visit">First Time Visit</option>
                  <option value="Follow-up">Follow-up Visit</option>
                  <option value="Second Opinion">Second Opinion</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Confirmation Mode</label>
              <div className="flex gap-3">
                <label className={`flex-1 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${contactPref === 'Phone Call' ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  <input
                    type="radio"
                    name="contactPref"
                    value="Phone Call"
                    checked={contactPref === 'Phone Call'}
                    onChange={() => setContactPref('Phone Call')}
                    className="hidden"
                  />
                  <span>📞 Phone Call</span>
                </label>
                <label className={`flex-1 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${contactPref === 'WhatsApp Message' ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  <input
                    type="radio"
                    name="contactPref"
                    value="WhatsApp Message"
                    checked={contactPref === 'WhatsApp Message'}
                    onChange={() => setContactPref('WhatsApp Message')}
                    className="hidden"
                  />
                  <span>💬 WhatsApp Message</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brief Symptoms / Health Concern / Notes</label>
              <textarea
                rows="2"
                placeholder="Describe your symptoms or reason for doctor consultation..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            <div className="pt-3 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 transition-transform hover:scale-102"
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
            <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto text-2xl font-bold animate-bounce shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading">Appointment Request Received!</h3>
              <p className="text-xs text-emerald-600 font-semibold mt-1">Ref ID: {bookingRef}</p>
              <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{patientName}</strong>. Our hospital reception desk at Edappadi will reach out via <strong className="text-slate-800">{contactPref}</strong> ({patientPhone}) shortly to confirm your slot.
              </p>
            </div>

            {/* Summary Details Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-bold text-slate-800">{activeDeptObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-emerald-700">{selectedDoctor || "Duty Specialist Physician"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-bold text-slate-800">{appointmentDate} at {appointmentTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient Type:</span>
                <span className="font-bold text-slate-800">{visitType} ({patientGender}, {patientAge || 'N/A'} yrs)</span>
              </div>
              {patientCity && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Location Area:</span>
                  <span className="font-bold text-slate-800">{patientCity}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation via:</span>
                <span className="font-bold text-emerald-700">{contactPref}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/916380898608?text=Hello%20KRS%20Hospital,%20I%20have%20booked%20an%20appointment%20Ref:%20${bookingRef}%20for%20${patientName}%20(${visitType})%20on%20${appointmentDate}%20at%20${appointmentTime}%20Dept:%20${activeDeptObj.name}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send WhatsApp Confirmation</span>
              </a>

              <button
                onClick={resetForm}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
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
