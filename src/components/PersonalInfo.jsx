import React, { useState } from 'react';

const PersonallInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone ] = useState('');
    const [location, setLocation] = useState('');

    return(
        <section className='personal-info'>
            <h2>Personal Information</h2>
            <form action="">
                <input 
                type="text"
                placeholder='Full Name' 
                value={name}
                onChange={(e) =>
                    setName(e.target.value)}
                    /> <br />

<input
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    /> <br />

                    <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    /> <br />

 
                    <input
                    type="text" 
                    placeholder="Location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    /> <br />
            </form>
        </section>
    );
}; 

export default PersonallInfo; 