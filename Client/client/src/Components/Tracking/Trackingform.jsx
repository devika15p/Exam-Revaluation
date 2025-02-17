import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './TrackingPage.css'; // Import custom CSS for black theme

const Trackingform = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically make an API call to your backend
        // to verify the ID and password and fetch tracking information.
        // For this example, we'll just simulate a response.

        if (id === 'test' && password === 'password') { // Replace with your actual logic
            setMessage('Tracking information found!'); // Or display the actual tracking data
            // Redirect or update component state with tracking data
        } else {
            setMessage('Invalid ID or password.');
        }
    };

    return (
        <div className="tracking-page"> {/* Apply black theme class */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Exam Revaluation Tracking</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="id" className="form-label">ID:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="id"
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Track
                                        </button>
                                    </div>
                                    {message && (
                                        <div className="mt-3 alert alert-info">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trackingform;