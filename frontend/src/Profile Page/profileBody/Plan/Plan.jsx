import React from "react";
import "./Plan.css"

function Plan() {
  return (
    <div className="plan-text-container">
      <div className="plan-title-container">PREMIUM</div>
      <div className="plan-period-container">3 months</div>
      <div className="plan-desc-container">
        <ul>
          <li>Subscription ends at 07/06/2024</li>
          <li>Subscription will automatically renew if not cancelled</li>
        </ul>
      </div>
    </div>

  );
}

export default Plan;
