/*import React from 'react'

const Contactpage = () => {
  return (
    <div>
      <h1>contact us</h1>
    </div>
  )
}

export default Contactpage*/



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // Track submission status
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }

        // Simulate API call (replace with your actual API call)
        setTimeout(() => {
            setSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
        }, 500); // Simulate a short delay

        // In a real application, you would make an API call here:
        // fetch('/api/contact', { ... }).then(...).catch(...);
    };

    return (
        <div className="contact-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Contact Us</h2>
                            </div>
                            <div className="card-body">
                                {submitted ? (
                                    <div className="alert alert-success">
                                        Thank you for your message! We will get back to you soon.
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message:</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                rows="5"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;



