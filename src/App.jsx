// src/App.jsx
import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="cv-container">
      <PersonalInfo />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


