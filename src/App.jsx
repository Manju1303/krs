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
  const [bookingPackageName, setBookingPackageName] = useState('');

  const handleOpenBooking = (deptId = '', docName = '', pkgName = '') => {
    setBookingDeptId(typeof deptId === 'string' ? deptId : '');
    setBookingDoctorName(typeof docName === 'string' ? docName : '');
    setBookingPackageName(typeof pkgName === 'string' ? pkgName : '');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0f4f8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Stats />
        <div className="mt-20">
          <AboutUs />
          <Departments onOpenBooking={(deptId) => handleOpenBooking(deptId)} />
          <Doctors onOpenBooking={(deptId, docName) => handleOpenBooking(deptId, docName)} />
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
