import React from "react";

export default function Toggle() {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Enable dark mode
      </label>
    </div>
  );
}
