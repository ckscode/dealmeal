import './App.css';
 import Boat from "./Boat"
// import {useState} from "react"
import StickyNav from './StickyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrump from './components/Breadcrump';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
function App() {

  return (
    <Router>   
    <Routes>
    <Route path='/' element={<StickyNav/>}/>
    <Route path='/boat' element={<Boat/>}/>
    </Routes>  
    </Router>
  );
}

export default App;
