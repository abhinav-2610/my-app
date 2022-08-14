import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");//State variable for dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = "My App - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success") 
      document.title = "My App - Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="My APP" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          <Route exact path="/" element={}>
            
          </Route>
        </Routes> */}
      </div> 
      {/* </Router> */}
    </>
  );
}

export default App;
