
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Pricing</h1>
        <p>Same amount at checkout!</p>
        <div className="toggle-container">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Yearly</span>
        </div>
      </div>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p className="price">$30/m</p>
          <button className="get-started">Get Started</button>
          <ul>
            <li>Update Cycle</li>
            <li>Subscription Policy</li>
            <li>Communication</li>
            <li>Companies</li>
            <li>Requests</li>
            <li>Support</li>
            <li>Additional Director</li>
          </ul>
        </div>
        <div className="plan popular">
          <h2>Standard Plan</h2>
          <p className="price">$100/m</p>
          <button className="get-started">Get Started</button>
          <ul>
            <li>Update Cycle</li>
            <li>Subscription Policy</li>
            <li>Communication</li>
            <li>Companies</li>
            <li>Requests</li>
            <li>Support</li>
            <li>Additional Director</li>
          </ul>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p className="price">$350/m</p>
          <button className="get-started">Get Started</button>
          <ul>
            <li>Update Cycle</li>
            <li>Subscription Policy</li>
            <li>Communication</li>
            <li>Companies</li>
            <li>Requests</li>
            <li>Support</li>
            <li>Additional Director</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
