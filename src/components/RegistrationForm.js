import React, { useState } from 'react';
import './RegistrationForm.css'; // Import CSS file for styling
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordError: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ passwordError: 'Passwords do not match!' });
      return;
    }

    setErrors({ passwordError: '' });
    console.log('Form Data:', formData);
    
    // Navigate to the Business Information page on successful validation
    navigate('/businessInfo');
  };

  return (
    <div className="outer-container">
      <div className="header-row">
        <h3 style={{textAlign:"center"}}>Create New Account</h3>
        <h5 className="contact-us">Contact Us</h5>
      </div>

      <div className="inner-container">
        <div className="profile">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Your Profile"></Tab>
            <Tab eventKey="profile" title="Business Information"></Tab>
            <Tab eventKey="contact" title="Additional Users" disabled></Tab>
          </Tabs>
          <h6>Step 1</h6>
          <h2>Your Profile</h2>
          <p>
            Enter the login information for your account. You will be able to
            create additional users after registering.
          </p>
          <div className="create-profile">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {errors.passwordError && (
                <p className="error-message">{errors.passwordError}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* "Next Step" button positioned at the bottom right */}
      <button type="submit" className="next-step-button" onClick={handleSubmit}>Next Step</button>
    </div>
  );
};

export default RegistrationForm;
