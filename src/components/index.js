// import React from 'react'
import '../App.css';
import alsvin from "../assets/alsvin.jpg"
import civic from "../assets/civic.jpg"
import corolla from "../assets/corolla.jpg"
import cultus from "../assets/cultus.jpg"
import etron from "../assets/etron.jpg"
import mg from "../assets/mg.jpg"
import revo from "../assets/revo.jpg"
import sportage from "../assets/sportage.jpg"
import Card from './Card';

const Index=()=> {
  return (
    <>
    <div className='container-fluid'>
        <p id="home"> </p> 
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="navbarr">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#home">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#info">Info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about_us">About Us</a>
              </li>
            </ul>
          </div>
        </nav><div style={{height: '50px'}} />
        <div className="row">
        <Card img={alsvin}/>
        <Card img={civic}/>
        <Card img={corolla}/> 
        <Card img={cultus}/>      
        </div>
        <div className="row">
        <Card img={revo}/>
        <Card img={sportage}/>
        <Card img={etron}/>
        <Card img={mg}/>         
        </div>
        
        
        
        <div className="col-12" id="about_us">
          <h3>Connect Us At Following Link</h3>
          <a href="https://www.google.com" style={{textDecoration: 'none'}}>CarWaly</a>
        </div>
      </div>
    </>
  );
}

export default Index;
