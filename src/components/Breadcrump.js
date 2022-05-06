import React from 'react'
import {Breadcrumb,BreadcrumbItem,Container} from "react-bootstrap"
import styles from "./Breadcrump.module.css"
import {Link} from "react-router-dom"
function Breadcrump() {
  return (
    <div className={styles.breadcrump}>  <Container  ><Breadcrumb>
      <BreadcrumbItem active> <Link to="/"> Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/boat"> boAt</Link> </BreadcrumbItem>
       
  </Breadcrumb></Container></div>
  )
}

export default Breadcrump