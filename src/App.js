import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {useState} from 'react'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// let name = "Aryan";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  function makeAlert(msg, type){
    setAlert({
        message : msg,
        type : type
      });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
    function toggleMode (){ 
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#00004d';
    makeAlert('Dark Mode Has Been Enabled', 'dark');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    setAlert(null);
  }
};
  function colorMode(){
    const theme = document.getElementById('colorpicker').value;
    document.body.style.backgroundColor = theme;
  }
  return (
      <div>
        {/* <Router> */}
        <Navbar concept= "TextUtils" about = "About"  mode = {mode} toggleModes = {toggleMode} colorMode = {colorMode}/>
        <Alert alert = {alert}/>
        {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/"> */}
          <TextForm title = "Enter Text:" mode = {mode}  makeAlert = {makeAlert}/>
        {/* </Route>
        </Switch> */}
        {/* </Router> */}
      </div>
  );
}

export default App;
