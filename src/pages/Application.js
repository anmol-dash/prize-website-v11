import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './Application.css';

const Application = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleDropdown = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqData = [
    {
      id: 'q1',
      question: 'Do high school student teams require an adult to be the team mentor?',
      answer: 'Yes, every high school team needs an adult mentor. This can be any legal supervisor: a teacher, a parent, a research mentor, etc.!'
    },
    {
      id: 'q2',
      question: 'Does having a product or project I\'ve been working on give me an advantage?',
      answer: 'Not directly. Having a product is not part of the essay grading rubric, so you won\'t receive extra points just for having one. However, working on a product can demonstrate its feasibility and help us better understand your idea, which can positively impact how we evaluate your essay based on the criteria provided.'
    },
    {
      id: 'q3',
      question: 'Is my team expected to have a fully completed project or product before submitting the slide deck?',
      answer: 'No, a fully completed project or product is not required. However, you should show some progress and demonstrate tangible actions you\'ve taken to bring your project or product closer to reality. The more progress you\'ve made, the stronger your presentation will be.'
    },
    {
      id: 'q4',
      question: 'How much will participating cost me?',
      answer: 'The competition is completely free to participate!'
    },
    {
      id: 'q5',
      question: 'Do you have to be a UPenn student to participate?',
      answer: 'You do not have to be a UPenn student. We encourage all high school and college students (undergraduates) from around the globe to participate.'
    },
    {
      id: 'q6',
      question: 'What should I do if I have additional questions?',
      answer: 'Email us at …'
    }
  ];

  return (
    <div>
      <Navbar />
      <header className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="title">Applications</h1>
            <p className="subheading">Preparing tomorrow’s leaders to tackle today’s climate crisis.</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="content">
            <h2 className="heading">Apply Now!</h2>
            <p>
            While physical products are encouraged, solutions can range from 
            gadgets to forums, events, or community service initiatives—either 
            new ideas or existing projects you want to expand. Participants are 
            encouraged to submit a prototype or demonstrate tangible progress, 
            though it doesn’t need to be extensive.

            <br/><br/>
            The deadline for the first round is January 15. Apply below!
            </p>
            <button className="cta-button">Application Portal</button>
          </div>
        </section>


        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Timeline</h2>
            <ul>
              <li>Application Opens - Jan 15</li>
              <li>Written applications - Mar 8</li>
              <li>Slide Deck due around - April 4~6</li>
              <li>Live Presentation - April 26-27</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <hr />
        </section>

        <section className="section">
          <div className="content">
            <h2 className="heading">Individual Eligibility</h2>
            <p>Any student pursuing an undergraduate or master’s degree is eligible to participate in the ___ division.</p>
            <p>Any student enrolled at any high school globally is eligible to compete in the ___ division.</p>
          </div>
          <section className="section">
            <hr />
          </section>
          <div className="content">
            <h2 className="heading">Team Eligibility</h2>
            <p>Teams can compete in groups of 2-5 (excluding high school mentors) given that every member classifies for the same pool. One member of the group will fill out the application form on behalf of the team. There will be a space on the form to indicate all of the team members.</p>
            <p>You do <strong>NOT</strong> need to have an incorporated business to apply; all concepts are welcome, whether it's just a great idea or a revenue-making startup. If you do have an established startup, you must not have received more than $25K in external funding, dilutive or non-dilutive.</p>
          </div>
        </section>
        <section className="section">
          <hr />
        </section>
        
        <section className="section">
          <div className="content">
            <h2 className="heading">FAQ</h2>
            <br/>
            {faqData.map(({ id, question, answer }) => (
              <div key={id} className="faq-item">
                <button 
                  className={`faq-button ${openQuestion === id ? 'active' : ''}`}
                  onClick={() => toggleDropdown(id)}
                >
                  {question}
                </button>
                <div className={`faq-answer ${openQuestion === id ? 'show' : ''}`}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Application;