import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
        }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared the typing area","warning");
    }
    const handleCopy = () => {
        let newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard","primary");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared all the extra spaces","primary");
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/* <label for="My Box" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upper Case</button>
                <button className='btn btn-success mx-3' onClick={handleLowClick}>Convert to Lower Case</button>
                <button className='btn btn-danger' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary  mx-3' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-danger' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2><b>Your text summary</b></h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h2><b>Preview</b></h2>
                <p>{text.length>0?text:"ENTER SOMETHING TO PREVIEW"}</p>
            </div>
        </>
    )
}
