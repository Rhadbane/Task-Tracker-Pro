import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Login = () => {
  // We'll use these states to handle errors and track the login process
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      // Send login request to your backend server
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        // Store the authentication token in localStorage
        localStorage.setItem('token', data.token);
        
        // store user data if your backend sends it
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        // Redirect to the  home page after successful login
        navigate("/home"); // Or wherever you want to redirect after login
        
        // Optional: Refresh the page to update authentication state
        // window.location.reload();
      } else {
        // Handle unsuccessful login
        setLoginError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <div 
      className="login-container" 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/1315108.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // This ensures the background covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <h2 style={{ color: 'white' }}>Login</h2>
      {loginError && (
        <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
          {loginError}
        </div>
      )}
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;