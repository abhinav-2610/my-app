import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


let name = "String";
function App() {
  const [mode,setMode]=useState("light");//State variable for dark mode
 
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="My APP" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter your text here"/>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
