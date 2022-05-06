
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from "./components/navbar"
import Breadcrump from './components/Breadcrump';
import Page from "./components/Page";
import Cards from "./components/Cards"


function Boat() {
  const[type,setType]=useState("all")
  
  const all=()=>{
     setType('all')

  }
  return (
    <div className="boat">
    <Navbarcomp/><br/><br/><br/>
    <Breadcrump/>
    <Page all={all} coupon={()=>setType("coupon")} offers={()=>setType("offers")} />
    <Cards type={type} />
    </div>
  );
}

export default Boat;