import React from 'react';
import './LandingPage.css';
import bgImage from '../../backgroundImages/homepageimage.jpeg';

const LandingPage = () => {
    const goToDashboard = () => {
        window.location.href = "/dashboard/Title_Preparations";
    };

    return (
        <div className="landing-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="overlay">
                <div className="content-box text-center text-white">
                    <h1 className="display-5 fw-bold mb-5">
                        GITAM (Greenness Investigation Tool for Analytical Method) Software
                      
                    </h1>
                    <div className="row mb-4">
                        <div className="col-md-4 text-start">
                            <h5>Created By:</h5>
                            <ul>
                                <li>Dr. Leela Prasad Kowtharapu</li>
                                <li>Dr. Siva Krishna Muchakayala</li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center">
                            <h5>Guided By:</h5>
                            <ul>
                                <li>Dr. Vishnu Murthy Marisetti</li>
                                <li>Dr. Naresh Kumar Katari</li>
                                <li>Dr. Rambabu Gundla</li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-end">
                            <h5>Developed By:</h5>
                            <ul>
                                <li>Mr. Rajesh Koutharapu</li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-success btn-lg explore-button" onClick={goToDashboard}>
                        START
                    </button>
                   <div className="research-note mt-4 px-4 py-3">
  <strong>This application is for research purposes.</strong><br />
  For any inquiries, please consult 
  <strong> Dr. Leela Prasad Kowtharapu</strong> 
  (<a href="mailto:leelaprasadkowtharapu@gmail.com">leelaprasadkowtharapu@gmail.com</a>).
</div>


                </div>
            </div>
        </div>
    );
};

export default LandingPage;
