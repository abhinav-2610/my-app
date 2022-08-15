import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const redMode =()=>{
    document.body.style.backgroundColor="#b31524";
    props.showAlert("Changed theme to Red","success");
  }
  const greenMode =()=>{
    document.body.style.backgroundColor="#28885c";
    props.showAlert("Changed theme to Green","success");
  }
  const blueMode =()=>{
    document.body.style.backgroundColor="#0a469f";
    props.showAlert("Changed theme to Blue","success");
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-   toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div className='mx-1 my-1'>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={redMode}/>
              <label className="btn btn-outline-danger" htmlFor="btnradio1">Red</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={greenMode} />
              <label className="btn btn-outline-success" htmlFor="btnradio2">Green</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={blueMode}/>
              <label className="btn btn-outline-primary" htmlFor="btnradio3">Blue</label>
            </div>
          </div>
          <div className={`form-check my-1 form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: "App Name here",
  aboutText: "About Text here"
}
