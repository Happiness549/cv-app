import React, { useState } from 'react';

const Skills = () => {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <form onSubmit={handleAddSkill}>
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <button type="submit">Add Skill</button>
      </form>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;