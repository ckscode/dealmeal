import React from 'react'
import "./Page.css"
import data from "./db.json"
import img from "./boat.png"
function Page({coupon,offers,all}) {

  return (
    <div className="page container-fluid"><div >
        <div className="container d-flex flex-row py-5 ">
            <div className="col-4 "><div><img  className='pgimage' src={img} alt=""></img></div></div>
            <div className="col-8 coupon" style={{color:"white"}}><h2>boAt Coupons and offers</h2>
            <p className="nocoupon pb-2 " style={{fontSize:"22px"}}>8 Coupons and offers &nbsp; |  &nbsp; 8 Verified</p>
            <div className='buttons'>
              <button onClick={all}>All({data.length})</button><button onClick={coupon}>Coupons(4)</button>
            <button onClick={offers} >Offers(4)</button></div></div>
           
        </div>
        </div></div>
  )
}

export default Page