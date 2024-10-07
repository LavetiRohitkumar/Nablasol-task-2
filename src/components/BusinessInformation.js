import React, { useState } from "react";
import './BusinessInformation.css';

function BusinessInfoForm() {
  const [brandName, setBrandName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [taxIdNumber, setTaxIdNumber] = useState("");
  const [brandType, setBrandType] = useState("");
  const [documentsSigned, setDocumentsSigned] = useState(false);
  const [waiverReleaseSigned, setWaiverReleaseSigned] = useState(false);

  const handleDocumentSign = () => {
    setDocumentsSigned(true);
  };

  const handleWaiverReleaseSign = () => {
    setWaiverReleaseSigned(true);
  };

  return (
    <div className="outer-container">
      <div className="header-row">
        <h3 style={{textAlign:"center"}}>Create New Account</h3>
        <h5 className="contact-us">Contact Us</h5>
      </div>

      <div className="inner-container">
        <div className="form-container">
          <h5 style={{textAlign:"center"}}>Step 2</h5>
          <h2 style={{textAlign:"center"}}> Business Information</h2>
          <p style={{textAlign:"center"}}>Please, enter information about your company.</p>

          <div className="form-grid">
            <div className="form-group">
              <label>Brand Name*</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Input Your Brand Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Brand Type*</label>
              <select
                value={brandType}
                onChange={(e) => setBrandType(e.target.value)}
                required
              >
                <option value="" disabled>Select Type of Your Brand</option>
                <option value="local">Local</option>
                <option value="national">National</option>
              </select>
              <div className="tooltip">
                <span>
                  {brandType === "local"
                    ? "Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less."
                    : brandType === "national"
                    ? "National: Brands with distribution in 4 or more divisions or in more than 150 stores."
                    : ""}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label>Street Address*</label>
              <input
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Input Your Street Address"
                required
              />
            </div>

            <div className="form-group">
              <label>City*</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Input City"
                required
              />
            </div>

            <div className="form-group">
              <label>Zip Code*</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Input Zip Code"
                required
              />
            </div>

            <div className="form-group">
              <label>Tax ID Number*</label>
              <input
                type="text"
                value={taxIdNumber}
                onChange={(e) => setTaxIdNumber(e.target.value)}
                placeholder="Input Tax ID Number"
                required
              />
            </div>
          </div>

          <h3>Documents</h3>
          <div className="form-group">
            <label>Electronically sign the agreement(s)</label>
            <button
              className={`document-btn ${documentsSigned ? "signed" : ""}`}
              onClick={handleDocumentSign}
            >
              {documentsSigned ? "Signed" : "Sign Agreement"}
            </button>
          </div>

          <div className="form-group">
            <label>Non-adult beverage Kroger market supplier waiver and release</label>
            <button
              className={`document-btn ${waiverReleaseSigned ? "signed" : ""}`}
              onClick={handleWaiverReleaseSign}
            >
              {waiverReleaseSigned ? "Signed" : "Sign Waiver"}
            </button>
          </div>

          <h3>COI PDF Upload</h3>
          <div className="form-group">
            <label>Electronically sign the agreement(s)</label>
            <button className="document-btn signed">Signed</button>
          </div>

          <div className="form-navigation">
            <button className="previous-button">Previous Step</button>
            <button className="next-step-button">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfoForm;
