import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">

            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Product</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Customers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Resources</a>
                </li>
              </ul>          
            </div>
          </div>
        </nav> 
      </div>      
    );
  }
}

export default Header;