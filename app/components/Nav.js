'use client';
import React, { useState } from 'react';
export default function Nav() {
  const [navCollapse, setNavCollapse] = useState(false);

  return (
    <nav className="navbar topbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" onClick={() => { setNavCollapse(!navCollapse) }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src="images/logo.png" alt="logo" /></a>
        <div className={`${!navCollapse ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarSupportedContent">
          <form className="top-search ms-auto" role="search">
            <input className="form-control " type="search" placeholder="Search ai agents..." aria-label="Search" />
          </form>
          <div className="d-flex align-items-center ms-auto">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><img src="images/icon1.png" alt="icon" /></a> </li>
              <li className="list-inline-item"><a href="#"><img src="images/icon2.png" alt="icon" /></a> </li>
              <li className="list-inline-item"><a href="#"><img src="images/icon3.png" alt="icon" /></a> </li>
            </ul>
            <button type="button" className="btn btn-primary btn-lg">Start Buying</button>
          </div>
        </div>
      </div>
    </nav>
  );
}