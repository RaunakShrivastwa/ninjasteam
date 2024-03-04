import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow">
        <div class="container-fluid ">
          <a class="navbar-brand text-dark" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse text-dark"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownPractice"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Practice
                </a>
                <ul
                  class="dropdown-menu text-dark "
                  aria-labelledby="navbarDropdownPractice"
                >
                  <li>
                    <a class="dropdown-item text-dark" href="#">
                      tutorial
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-dark" href="#">
                     article
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-dark" href="#">
                     coding problems
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-dark" href="#">
                      learning videos
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#">
                  Jobs
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#">
                  Placements
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#">
                  Hire from Us
                </a>
              </li>
              <li class="nav-item text-dark">
                <a class="nav-link text-dark" href="#">
                  Refer & Earn
                </a>
              </li>
              <li class="nav-item dropdow text-dangern">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownAbout"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  class="dropdown-menu text-dark"
                  aria-labelledby="navbarDropdownAbout"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                    about us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      blogs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      in the news
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
            
              <button class="btn btn-outline-danger me-4  text-dark " type="submit">
                login
              </button>
              
              <a class="mm me-2  ">
              <img width="40px  " src="https://th.bing.com/th?id=OIP.i18S5hbENZf5sBwYOMm7UAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="" alt="..."/>
           </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
