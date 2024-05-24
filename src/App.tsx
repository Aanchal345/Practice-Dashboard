import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Assessments from './components/Assessments';
import { Menu } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar for larger screens */}
          <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}>
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1 p-4 bg-purple-100 overflow-auto">
            {/* Menu button for smaller screens */}
            <div className="md:hidden mb-4">
              <button 
                className="text-purple-700 focus:outline-none" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
            <Routes>
              <Route path="/practice" element={<Dashboard />} />
              <Route path="/assessments" element={<Assessments />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

