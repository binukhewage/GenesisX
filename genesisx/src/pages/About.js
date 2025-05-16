import React from "react";
import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">
                        About <span className="text-gradient">GenesisX</span>
                    </h2>

                    <p className="about-description">
                        We use advanced AI to generate realistic synthetic medical images for rare diseases, 
                        aiding research and diagnosis. Our technology enhances data availability, supports 
                        medical advancements, and ensures high-quality, diverse datasets for improved 
                        healthcare solutions.
                    </p>

                    <div className="features-grid">
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16C7 16 7.5 14 10 14C12.5 14 13 16 16 16C18.5 16 19 14 21 14M7 8H7.01M21 12V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V8" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Upload Medical Images</h3>
                            <p>Securely upload DICOM, PNG, or JPEG files with our encrypted transfer system.</p>
                        </div>
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V9C22 7.89543 21.1046 7 20 7Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 21H16" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 17V21" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>AI Processing</h3>
                            <p>Our proprietary neural networks enhance and analyze images with clinical-grade precision.</p>
                        </div>
                        <div className="feature-cards">
                            <div className="feature-icons">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Generated Output</h3>
                            <p>Receive high-fidelity synthetic images with detailed diagnostic reports.</p>
                        </div>
                    </div>

                    
                </div>
            </section>
        </div>
    );
};

export default About;