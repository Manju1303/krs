import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import HealthPackages from './components/HealthPackages';
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
    const safeDeptId = typeof deptId === 'string' ? deptId : '';
    const safeDocName = typeof docName === 'string' ? docName : '';
    const safePkgName = typeof pkgName === 'string' ? pkgName : '';

    setBookingDeptId(safeDeptId);
    setBookingDoctorName(safeDocName);
    setBookingPackageName(safePkgName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
      />

      <main className="flex-grow">
        {/* Hero Section with Kauvery-style Quick Actions */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Key Statistics Counter Bar */}
        <Stats />

        {/* About KRS Hospital & Founder's Story */}
        <AboutUs />

        {/* Medical Departments & Specialties Explorer */}
        <Departments 
          onOpenBooking={(deptId) => handleOpenBooking(deptId)} 
        />

        {/* Kauvery-Style Preventive Health Checkup Packages */}
        <HealthPackages 
          onBookPackage={(pkgName) => handleOpenBooking('', '', pkgName)}
        />

        {/* Specialist Doctors Showcase & Bio Modal */}
        <Doctors 
          onOpenBooking={(deptId, docName) => handleOpenBooking(deptId, docName)} 
        />

        {/* Hospital Facilities & Diagnostic Systems */}
        <Facilities />

        {/* Real Campus Photos & Virtual Tour Gallery */}
        <Gallery />

        {/* Why Choose KRS Hospital & Testimonials & FAQs */}
        <WhyChooseUs 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Floating 24/7 Emergency Assistance Widget */}
      <EmergencyFloat 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Multi-step Appointment & Package Booking Engine Modal */}
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
