import React from 'react';

function Navbar() {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-primary text-center">
      <div className="container-fluid text-center">
        <div className="row justify-content-center"> {/* Cambiado a justify-content-center */}
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-center" href="#">
                  <div className="d-flex flex-column align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                    <span>HOME</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-center" href="#">
                  <div className="d-flex flex-column align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-ticket-fill" viewBox="0 0 16 16">
                      <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"/>
                    </svg>
                    <span>TURNOS</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-center" href="#">
                  <div className="d-flex flex-column align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    <span>PERFIL</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
