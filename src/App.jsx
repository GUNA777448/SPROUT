import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";  
import CropManagement from "./pages/CropManagement";
import SoilAnalysis from "./pages/SoilAnalysis";
import FarmerProfile from "./pages/FarmerProfile";
import Marketplace from "./pages/Marketplace";
import Notifications from "./pages/Notifications";

import LoadingScreen from './components/LoadingScreen';
import BottomNavBar from './components/BottomNavBar';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }   

  return (
    <ToastProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/soil-analysis" element={<SoilAnalysis />} />
          <Route path="/profile" element={<FarmerProfile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <BottomNavBar />
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;
