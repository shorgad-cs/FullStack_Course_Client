import React, { useState } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentPortal from './components/StudentPortal';
import './App.css';

function App() {
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'

  const toggleRole = () => {
    setRole(prevRole => prevRole === 'teacher' ? 'student' : 'teacher');
  };

  return (
    <div className="min-vh-100 bg-light pb-5">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <button className="btn btn-outline-light" onClick={toggleRole}>
            Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="alert alert-info py-2 shadow-sm">
          <strong>Current Role:</strong> {role.charAt(0).toUpperCase() + role.slice(1)}
        </div>

        {role === 'teacher' ? (
          <TeacherDashboard />
        ) : (
          <StudentPortal />
        )}
      </div>
    </div>
  );
}

export default App;
