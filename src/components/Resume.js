import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    const resumePath = 'C:/Users/deepi/OneDrive/Desktop/Project/Portfolio/portfolio/src/assets/Preeti.pdf'; // Update with the correct path to your resume file
    window.open(resumePath, '_blank');
  };

  return (
    <div>
      <h1>Resume</h1>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default Resume;