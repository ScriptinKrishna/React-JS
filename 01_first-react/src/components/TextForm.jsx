import React, { useState } from "react";
import TextSummary from "./TextSummary";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const speak = () => {
    if (text.trim() !== "") {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speaking text!", "success");
    } else {
      props.showAlert("Nothing to speak. Please enter some text.", "danger");
    }
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Removed extra spaces!", "success");
  };

  const handleSelect = () => {
    var textArea = document.querySelector("#myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className={`container my-5`}>
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
      <textarea
        className="form-control"
        value={text}
        id="myBox"
        rows="8"
        onChange={handleOnChange}
        placeholder="Enter your text here..."
      ></textarea>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleUpClick} aria-label="Convert to Uppercase">
        Convert to Uppercase
      </button>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleLoClick} aria-label="Convert to Lowercase">
        Convert to Lowercase
      </button>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleClearClick} aria-label="Clear Text">
        Clear Text
      </button>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={speak} aria-label="Speak Text">
        Speak
      </button>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={removeExtraSpaces} aria-label="Remove Extra Spaces">
        Remove Extra Spaces
      </button>

      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleSelect} aria-label="Copy Text">
        Copy Text
      </button>

      <TextSummary words={wordCount} chars={text.length} />
      {text.length > 0 && <p>On average, it takes {0.008 * 60 * wordCount} seconds to read.</p>}
      <h4>Preview</h4>
      <p>{text.length > 0 ? text : "Enter something in the above text box to get a preview here."}</p>
    </div>
  );
}
