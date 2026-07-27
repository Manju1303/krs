import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentModal from './components/AppointmentModal';
import EmergencyFloat from './components/EmergencyFloat';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDeptId, setBookingDeptId] = useState('');
  const [bookingDoctorName, setBookingDoctorName] = useState('');

  // Lifted state for cross-component interactions
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('All');
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  const handleOpenBooking = (deptId = '', docName = '') => {
    setBookingDeptId(typeof deptId === 'string' ? deptId : '');
    setBookingDoctorName(typeof docName === 'string' ? docName : '');
    setBookingModalOpen(true);
  };

  const handleSelectDoctor = (doc) => {
    setSelectedDeptFilter(doc.departmentId);
    setSelectedDoctorModal(doc);
    // Smoothly scroll to the doctors section
    const doctorsSection = document.getElementById('doctors');
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDepartment = (deptId) => {
    setSelectedDeptFilter(deptId);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0f4f8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Stats />
        <div className="mt-20">
          <AboutUs />
          <Departments 
            onOpenBooking={(deptId) => handleOpenBooking(deptId)} 
            onSelectDepartment={handleSelectDepartment}
            onSelectDoctor={handleSelectDoctor}
            selectedDeptFilter={selectedDeptFilter}
          />
          <Doctors 
            onOpenBooking={(deptId, docName) => handleOpenBooking(deptId, docName)} 
            selectedDeptFilter={selectedDeptFilter}
            setSelectedDeptFilter={setSelectedDeptFilter}
            selectedDoctorModal={selectedDoctorModal}
            setSelectedDoctorModal={setSelectedDoctorModal}
          />
          <Facilities />
          <Gallery />
          <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
        </div>
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />
      <EmergencyFloat onOpenBooking={() => handleOpenBooking()} />

      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDeptId={bookingDeptId}
        initialDoctorName={bookingDoctorName}
        initialPackageName={bookingPackageName}
      />
    </div>
  );
}
