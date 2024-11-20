import React from 'react';
// import '../styles/Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-content">
        <iframe
          src={`${process.env.PUBLIC_URL}/Preeti.pdf`}
          title="Resume"
          className="resume-frame"
        ></iframe>
        <a
          href={`${process.env.PUBLIC_URL}/Preeti.pdf`}
          download="MyResume.pdf"
          className="btn download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
