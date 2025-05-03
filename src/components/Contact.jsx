import React, { useState } from 'react';

const Contact = () => {
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');

  return (
    <section className="contact">
      <h2>Contact Links</h2>
      <form>
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Portfolio URL"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />
      </form>

      <div>
        <p><strong>LinkedIn:</strong> {linkedin}</p>
        <p><strong>GitHub:</strong> {github}</p>
        <p><strong>Portfolio:</strong> {portfolio}</p>
      </div>
    </section>
  );
};

export default Contact;