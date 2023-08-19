// We are making text utils apps, where we can edit text accordingly

import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // this state will switch between the dark mode and the light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#050930';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router basename='/'>
        <Navbar title={"TextUtils"} about={"About"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* we use exact keyword because react router do the partial routing, as if two addresses have same initial address then react router might route to the different route */}
            <Route exact path="/about" Component={() => <About mode={mode}/>} />
            <Route exact path="/" Component={() => <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />} />
              {/* <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} /> */}
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
