import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
     const handleClearClick = () => {
        setText(" ");
    }
    const handleCopy =()=>{
        let newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/* <label for="My Box" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upper Case</button>
                <button className='btn btn-success mx-3' onClick={handleLowClick}>Convert to Lower Case</button>
                <button className='btn btn-danger' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary  mx-3' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-danger' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2><b>Your text summary</b></h2>
                <p>{text.split(" ").length} words and {text.length } characters</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h2><b>Preview</b></h2>
                <p>{text}</p>
            </div>
        </>
    )
}
