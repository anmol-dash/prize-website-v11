import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutPage.css';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <header className="hero-section">
      <video className="hero-video" autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback">
          <source src={`${process.env.PUBLIC_URL}/about.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="title">About Us</h1>
          <p className="subheading">Learn more about our mission and impact</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">Our Mission</h2>
            <p>
            During the COVID pandemic, Penn Climate Ventures was founded in 2021 as 
            a way for the Penn community to prepare students around the globe to 
            innovate and pitch environmental solutions. Coming from a university with 
            a strong interdisciplinary focus between science and business, we wanted 
            to provide environmental opportunities to everyone in the form of a 
            climate pitch competition. As such, we’ve decided to keep the virtual 
            format of the competition to increase engagement from around the globe. 
            If you’re a high school or undergraduate college student, we believe 
            that you will find great value from participating in our competition, 
            which offers industry mentorship, cash prizes, and more!
            </p>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Our Team</h2>
            <p>
            Penn Climate Ventures (PCV) is a student-led organization at the 
            University of Pennsylvania dedicated to driving innovative and 
            real-world environmental solutions. With over 300 undergraduate and 
            graduate students studying in the Wharton Business School, Penn’s 
            Engineering School, and Penn’s School of Arts and Sciences, PCV draws 
            together interdisciplinary expertise to develop solutions to pressing 
            environmental issues.
            <br /><br />
            In line with PCV’s sustainability mission, the PCV team works tirelessly 
            to bring you our high-impact competition called the Penn EcoVenture 
            challenge. This competition brings together climate ideas and solutions 
            from hundreds of highschool and college students each year, followed by 
            rigorous rounds and evaluation by PhD students, environmental professors, 
            and industry experts.
            <br /><br />
            As students passionate about advancing environmental solutions, the PCV 
            team wants to support you both educationally and monetarily in your 
            sustainable ventures through our prize competition.

            </p>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Our History</h2>
            <ul>
              <li>Over X students engaged globally</li>
              <li>Y successful startups launched</li>
              <li>Z mentorship connections made</li>
              <li>Partnership with leading climate organizations</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Get Involved</h2>
            <p>
              Whether you're a student looking to make a difference, a mentor willing to share 
              your expertise, or an organization interested in partnership opportunities, we'd 
              love to hear from you.
            </p>
            <Link
                to="/get-involved"
                className="cta-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Get Involved
            </Link>
          </div>
          <br/><br/><br/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;