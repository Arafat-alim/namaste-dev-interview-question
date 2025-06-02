import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span className="icon" data-testid="toggle-icon">
          <EyeOff size={18} />
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        Password Hidden
      </span>
    </div>
  );
}

export default TogglePassword;
