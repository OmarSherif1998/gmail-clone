import React, { useEffect } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SelectsendMessageIsOpen } from '../features/mailSlice';
import { login, selectUser } from '../features/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(SelectsendMessageIsOpen);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__Body">
            <Sidebar />
            <Routes>
              <Route path="mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
