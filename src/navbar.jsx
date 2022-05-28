import React from 'react';
import '../src/App.css';

function Navbar() {
  return (
    <main>
      <nav className="navbar sticky-top justify-content navbar-custom" style={{background: '#0004ec'}}>
       <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  </button>
        <div className="justify-content-end navbar-text">
          <ul className="nav">
            <li className="nav-item justify-content-end">
              <a className="nav-link active navbar-text" href="#">Our Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Apply</a>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

          </ul>
          
        </div>
      </nav>
    </main>
  );
}

export default Navbar;