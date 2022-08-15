import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
        
    // });

   let myStyle={
    color: props.mode==='dark'?'white':'#212529',
    backgroundColor: props.mode==='dark'?'#212529':'white'
    // border: '2px solid',
    // borderColor: props.mode==='dark'?'white':'#212529'
   }

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //         setBtnText("Enable Light Mode");
    //     }
    // }
    return (
        <div className='container my-3'>
            <h2 style={{color: props.mode==='dark'?'white':'#212529'}} >About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze you text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This app gives you a way to analyze your text quickly and efficiently. </strong> 
                            Be it word count or changing the cases it can do it all.                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to use Utility</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This app is completely free to use. </strong>
                            This app is a free character counter that provides instant preview and the average read time needed to read the entire text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>All Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This app is compatible with all mainstream browsers. </strong> 
                            This software works on any web browsers such as Chrome, Opera, Microsoft Edge, Mozilla Firefox,Safari on any device.
                            It suits to count characters in Facebook Posts, Tweets, Blogs,Microsoft Word or Apple Pages Documents, essays, books, pdf documents etc. 
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
