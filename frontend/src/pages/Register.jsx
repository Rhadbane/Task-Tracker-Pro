import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Register = () => {
  // Adding state to handle errors and loading
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      // Making the actual API call to your backend
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      // Parse the response
      const data = await response.json();

      // Check if the registration was successful
      if (response.ok) {
        console.log('Registration successful:', data);
        
        // If you're using tokens, store them
        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        // If the server returned an error message
        setRegistrationError(data.message || 'Registration failed');
        console.error('Registration failed:', data);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('Registration error:', error);
      setRegistrationError('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div 
      className="register-container" 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/1315108.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <h2 style={{ color: 'white' }}>Register</h2>
      {registrationError && (
        <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
          {registrationError}
        </div>
      )}
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;