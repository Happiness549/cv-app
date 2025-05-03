import React, { useState } from 'react';

const Summary = () => {
    const [summary, setSummary] = useState('');

    return(
        <section className='summary'>
            <h2>Professional Summary</h2>
            <textarea 
            placeholder='Write a brief summary about yourself...'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows = {5}
            column = {50}
            />

        </section>
    );
};
export default Summary;