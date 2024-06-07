import React from "react";
import { Images } from "../Images";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-3 firsthalf">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <div className="d-flex contactdiv">
                    <div className="d-flex mr-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-telephone text-white pr-1 fontsize"></i>
                      </div>
                      <div>
                        {" "}
                        <Link
                          href="tel:+1234567890"
                          className="text-white fontsize "
                        >
                          {" "}
                          +1234567890
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex px-3 border-end border-start">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-envelope text-white pr-1 fontsize"></i>
                      </div>
                      <div className="">
                        <Link
                          href="mailto:info@example.com"
                          className="text-white fontsize"
                        >
                          {" "}
                          Info@batchid.se
                        </Link>
                      </div>
                    </div>

                    <div className="d-flex ml-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-geo-alt text-white pr-1 fontsize"></i>
                      </div>
                      <div className="">
                        <Link className="text-white fontsize"> Sweden</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-end  ">
              <div className="align-items-center pr-md-5 d-flex contactdiv2">
                <div className=" text-md-end text-center mt-md-0 mt-2">
                  <Link className="btn me-md-2 signintext">Sign In</Link>
                </div>
                <div className=" text-md-start text-center mt-md-0 mt-2">
                  <Link className="btn text-white registercolor">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-md navbar-light border">
        <div>
          <Link to={"/"} className="navbar-brand">
            <img src={Images.Frame} alt="Logo" className="logoimg" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 d-flex justify-content-center">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fontfamily"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About us
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item">Lorem ipsum</Link>
                <Link className="dropdown-item">Lorem ipsum</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item">Lorem ipsum</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fontfamily"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact us
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item">Lorem ipsum</Link>
                <Link className="dropdown-item">Lorem ipsum</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item">Lorem ipsum</Link>
              </div>
            </li>

            {/* <!-- Other navbar items here --> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 rounded-pill searchIcon"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
