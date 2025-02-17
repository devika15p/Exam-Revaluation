
import React from 'react';
import './HomePage.css'; // Import custom CSS for additional styling

const Mainpg = () => {
    return (
        <div className="home-container">
            <div className="hero-section text-center">
                <h1 className="display-4">Welcome to the Exam Re-evaluation System</h1>
                <p className="lead">Transparent and Efficient Exam Re-evaluation Process</p>
                <a href="/request" className="btn btn-primary btn-lg">Request Re-evaluation</a>
                {/*<a href="/track" className="btn btn-secondary btn-lg ml-3">Track Request Status</a>*/}
            </div>
            <div className="overview-section text-center mt-5">
                <h2>Overview</h2>
                <p>
                    Our exam re-evaluation system is designed to provide students with a transparent and efficient way to request re-evaluations of their exam results. 
                    We aim to ensure fairness and accuracy in the evaluation process, allowing students to have their concerns addressed promptly.
                </p>
            </div>
        </div>
    );
};


export default Mainpg;