import React from 'react'
import "./Cards.css"
import data from "./db.json"
import {useState} from "react"
import {Collapse} from "react-bootstrap"
function Cards({type}) {
   const [details,setDetails]=useState({})
    const handleClick=(id)=>{
      
        setDetails((prevState) => ({...prevState, [id]: !prevState[id]}))
    }
  return (
    <div className='cards'><div className="container">
    <div className="d-flex flex-row">
        <div className='col-12 col-md-4'></div>
        <div className='col-12 col-md-8  py-3'>
           
            {data.map((item,index)=>{
                  if (item.type===type ){
                    return(<div className="flashcard d-flex flew-row flex-wrap " key={item.id} ><div className='col-12 col-md-6'><h2>{item.title}</h2>
                    <p className='description mb-4'>{item.description}</p><p className="validity">Valid till <i>{item.validity}</i></p></div>
                    <div className="col-12 col-md-6 text-end"><h1 className='text-center my-5'>Code</h1><button onClick={()=>handleClick(item.id)} className='details '>Details&nbsp;<i className="arrow down"></i></button></div>
                  <Collapse in={details[item.id]}>
        <div id="example-collapse-text">
          <hr></hr>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse></div>) 
                  }else if(type==="all"){
                    return(<div className="flashcard d-flex flew-row flex-wrap"  ><div className='col-12 col-md-6'><h2>{item.title}</h2>
                    <p className='description mb-4'>{item.description}</p> <p className="validity">Valid till <i>{item.validity}</i></p></div>
                    <div className="col-12 col-md-6  "><h1 className='text-center my-5'>Code</h1><button onClick={()=>handleClick(item.id)} className='details '>Details&nbsp;<i className="arrow down"></i></button></div>
                    <Collapse in={details[item.id]}>
        <div id="example-collapse-text">
          <hr></hr>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse></div>)
                  }
                else{
                    <h1>no offer</h1>
                }
              })} </div></div> 
     </div></div>
  )
}

export default Cards