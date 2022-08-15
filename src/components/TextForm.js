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
        document.getSelection().removeAllRanges();
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
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className='btn btn-success mx-1 my-1' onClick={handleLowClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary  mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2><b>Your text summary</b></h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read</p>
                <h2><b>Preview</b></h2>
                <p>{text.length>0?text:"NO TEXT TO PREVIEW"}</p>
            </div>
        </>
    )
}
