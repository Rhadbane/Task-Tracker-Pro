import React from 'react';
import Dashboard from '../components/Dashboard';
import './Home.css';
import backgroundImage from '../../src/pages/2.jpg';
const Home = () => {
  return (
      <div className="home-container" style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          margin: 0,
          padding: 0
      }}>
          <header className="home-header" style={{
              textAlign: 'center',
              padding: '20px 0',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '8px',
              marginBottom: '20px',
              width: '80%'
          }}>

        <h1>DONE IS BETTER THAN PERFECT</h1>
        <p className="subtitle">Organize your day effectively</p>
      </header>

      <div className="dashboard-grid">
        

        <section className="task-list-container">
          <h2>Task List</h2>
          <Dashboard />
        </section>
      </div>
    </div>
  );
};

export default Home;