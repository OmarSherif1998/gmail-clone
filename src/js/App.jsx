import React from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmailList from './EmailList';
import Mail from './Mail';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__Body">
          <Sidebar />
          <Routes>
            <Route path="mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
