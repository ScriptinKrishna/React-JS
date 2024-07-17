import React from 'react';

export default function TextSummary({ words, chars }) {
  return (
    <div className=" my-3">
      <h2>Your Text Summary</h2>
      <p>{words} words and {chars} characters</p>
    </div>
  );
}
