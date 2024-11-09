import React, { useState } from 'react';
import './ApplicationForm.css';

function ApplicationForm({ closeForm }) {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        statement: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.name || !formData.phoneNumber || !formData.email || !formData.statement) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Your application has been submitted successfully!');
                setError('');
            } else {
                setError(data.message || 'An error occurred');
            }
        } catch (error) {
            setError('Failed to submit application');
        }
    };

    return (
        <div className="application-form-overlay">
            <div className="application-form">
                <h2>Application Form</h2>
                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Brief Statement:
                        <textarea
                            name="statement"
                            value={formData.statement}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <button className="close-btn" onClick={closeForm}>Close</button>
            </div>
        </div>
    );
}

export default ApplicationForm;
