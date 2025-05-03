import React, { useState } from 'react';

const Education = () => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [educationList, setEducationList] = useState([]);

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (school && degree && year) {
      const newEdu = { school, degree, year };
      setEducationList([...educationList, newEdu]);
      setSchool('');
      setDegree('');
      setYear('');
    }
  };

  return (
    <section className="education">
      <h2>Education</h2>
      <form onSubmit={handleAddEducation}>
        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Degree or Course"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /><br />
        <button type="submit">Add Education</button>
      </form>

      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> at {edu.school} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Education;