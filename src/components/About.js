import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#050930' : 'white'
    }
    
  return (
    <div className='container' style={myStyle}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   <p>TextUtils gives you a way to analyze your text quality and efficiently. Be it a word count, character count, or reading time.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <p>TextUtils is a free to use web application that provides instant character count, word count, reading time like stats. Also allows to edit Text as Uppercase, lowercase, or remove extra spaces from the text. Thus, this is suitable to for writing text with word/character limit.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
                    <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This web application works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc. It suits to count character in facebook, blog, books, excel documents, etc.
                    This web application is responsive so users can also use this application in any device, either Desktop, Laptop, Tablet or Mobile phone.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
