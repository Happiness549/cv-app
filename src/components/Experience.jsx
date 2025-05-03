import React, { useState } from 'react';

const Experience = () => {
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [duration, setDuration] = useState('');
    const [experience, setExperience] = useState([]);

    const handleAddExperience = (e) => {
        e.preventDefault();
        if(company && role && duration ) {
            const newExp = {company, role, duration};
            setCompany('');
            setRole('');
            setDuration('');
        }
    };
    return(
        <section>
            <h2>Experience</h2>
            <form 
            onSubmit={handleAddExperience}>
                <input 
                type="text" 
                placeholder='Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                /> <br />

                <input 
                type="text"
                placeholder='role' 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                /> <br />

                <input 
                type="text" 
                placeholder='Duration'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                /> <br />
                <button type='submit'>Add Experince</button>
            </form>
            <ul>
                {experience.map((exp, index) => (
                    <li key={index}><strong>{exp.role}</strong> at {exp.company} ({exp.duration})
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience
