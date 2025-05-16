import React from 'react'
import { NavLink } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing-page'>
      <div className='landing-container'>
        <div className='heading'>
          <h1 className='title'>Genesis<span className='title-x'>X</span></h1>
          <h5 className='subtext'>Generate realistic synthetic medical images for rare diseases with unprecedented quality and precision.</h5>  
        </div>
        
        <div className='features-container'>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16C7 16 7.5 14 10 14C12.5 14 13 16 16 16C18.5 16 19 14 21 14M7 8H7.01M21 12V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V8" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Upload Medical Images</h3>
            <p>Securely upload DICOM, PNG or JPEG files</p>
          </div> 
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V9C22 7.89543 21.1046 7 20 7Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 21H16" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17V21" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>AI Processing</h3>
            <p>Advanced neural networks analyze your images</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Generated Output</h3>
            <p>Receive high-quality synthetic images</p>
          </div>
        </div>

        <NavLink to="/signup" className="cta-button">
          Get Started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </NavLink>
      </div>
    </div>
  )
}

export default Landing