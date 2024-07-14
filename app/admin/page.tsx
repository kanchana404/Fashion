"use client";
import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [status, setStatus] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);

  const sendVerificationCode = async () => {
    try {
      const response = await axios.post('/api/sendVerificationCode', { phoneNumber });
      if (response.data.success) {
        setStatus('Verification code sent!');
        setVerificationSent(true);
      } else {
        setStatus('Failed to send verification code.');
      }
    } catch (error) {
      setStatus('Error sending verification code.');
    }
  };

  const checkVerificationCode = async () => {
    try {
      const response = await axios.post('/api/verifyCode', { phoneNumber, verificationCode });
      if (response.data.success) {
        setStatus('Phone number verified successfully!');
      } else {
        setStatus('Verification failed.');
      }
    } catch (error) {
      setStatus('Error verifying code.');
    }
  };

  return (
    <div>
      <h1>Enter your phone number</h1>
      {!verificationSent ? (
        <form id="send-code-form">
          <input
            type="text"
            id="phone-number"
            placeholder="+1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="button" onClick={sendVerificationCode}>
            Send Verification Code
          </button>
        </form>
      ) : (
        <div>
          <h1>Enter the verification code</h1>
          <form id="verify-code-form">
            <input
              type="text"
              id="verification-code"
              placeholder="Verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button type="button" onClick={checkVerificationCode}>
              Verify
            </button>
          </form>
        </div>
      )}
      <div id="message">{status}</div>
    </div>
  );
};

export default AdminPage;
