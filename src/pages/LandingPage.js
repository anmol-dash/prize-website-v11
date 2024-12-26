import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Countdown from '../components/countdown/countdown';
import { Link } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <header className="hero-section">
        <div className="hero-video-container">
          <iframe
            className="hero-video"
            src="https://www.youtube.com/embed/KPSgJwh-LLk?autoplay=1&loop=1&mute=1&playlist=KPSgJwh-LLk&controls=0&rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="title">UPenn Eco-Venture Challenge</h1>
          <p className="subheading">Preparing tomorrow’s leaders to tackle today’s climate crisis.</p>
          <Countdown />
          <img 
            src="/double-arrow-down.png" 
            alt="Scroll down"
            className="scroll-arrow"
            onClick={() => {
              document.querySelector('.main-content').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          />
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">About</h2>
            <p>
              The UPenn Ecoventure Challenge is an international student-led climate startup 
              competition annually held virtually, designed to empower high school and university 
              students to create solutions for today’s most pressing climate issues. In teams of 
              up to 4 members, participants will select a topic from one of our provided tracks 
              and develop an innovative, practical solution. While physical products are encouraged, 
              solutions can range from gadgets to forums, events, or community service initiatives—
              either new ideas or existing projects you want to expand.
            </p>
            <Link
              to="/apply"
              className="cta-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Register Now
            </Link>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>
        
        <section className="section">
          <div className="content">
            <h2 className="heading">Timeline</h2>
            <ul>
              <li>Registration Opens: Dec 1, 2024</li>
              <li>Submission Deadline: Jan 15, 2025</li>
              <li>Final Event: Feb 20, 2025</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Prizes</h2>
            <p>
              After three rounds of selection, winners will receive ____ for the 
              ____ track and ____ for the ____ school track to support their 
              start-up. Additionally, winners will have the opportunity to benefit 
              from professional advising, mentorship, and internship opportunities.
            </p>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">How to Participate</h2>
            <p>
              This competition is for students pursuing a high school diploma or 
              bachelor’s degree who don’t have experience in startups 
              or climate change. To participate, follow these steps:
            </p>
            <ol>
              <li>Sign up by clicking the "Register Now" button.</li>
              <li>Submit your pitch proposal before the deadline.</li>
              <li>Join us at the final event for live presentations.</li>
            </ol>
          </div>
        </section>
            
        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Sponsors</h2>
            <p>
              TBA
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;