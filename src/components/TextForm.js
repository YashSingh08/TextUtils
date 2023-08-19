// Learning state in this file specifically

import React, { useState } from "react"; // use state is a hook that helps to create state variables
import PropTypes from "prop-types";

export default function TextForm(props) {

    // this function lets the users to type in the textfield
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    // Whenever this function is called state change is trigerred and changes will be made without any reload of the app
    const handleUpperCase = () => {
        // console.log(`UpperCase base button was clicked to convert "${text}" to uppercase`);
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to uppercase", "success");
    }

    // Whenever this function is called state change is trigerred and changes will be made without any reload of the app
    const handleLowerCase = () => {
        // console.log(`lowercase base button was clicked to convert "${text}" to lowercase`);
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to lowercase", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        // props.showAlert("Text cleared", "success");
    }

    const handleCopyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra spaces removed", "success");
    }

    // state represents the changes can be done on some event, each component can have its own state, whenever state changes then that component is reloaded instead of the whole app
    // here 'text' represents the current state, and 'setText' is the function that triggered on change of state
    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    {/* if we do not add 'onChange()' function here then the textfield will be read only */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#03051c', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>

                {/* whenever user click on the button then specific function will be called */}
                <div className="container my-2">
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert text to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert text to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>

            </div>
            
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>Total Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}, Total Characters : {text.length}</p>
                <p>Time to read the complete text : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute(s)</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text in box to get preview here"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Heading of the form",
};
