import React from "react";
import { Images } from "../Images";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="firstfooter d-flex justify-content-center align-items-center">
        <div className="container-fluid px-5">
          <div className="row ">
            <div className="col-sm-6 col-md-8">
              <p className="text-white ffpara h-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                pellentesque aliquam ipsum
              </p>
            </div>
            <div className="col-sm-6 col-md-4 d-flex justify-content-center align-items-center">
              <Link className="text-white h-100 fflink text-center">
                Lorem ipsum
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="secondfooter px-4 py-4">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-sm-12 mb-4 col-md-4">
              <div className="card ">
                <Link>
                  <img
                    src={Images.logo2}
                    className="card-img-top logoimg2 mb-4"
                    alt="..."
                  />
                </Link>
                <div className="">
                  <p className="card-text mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pellentesque aliquam ipsum, et fermentum tellus sodales
                    tincidunt. Vestibulum pharetra nunc et massa rutrum,
                  </p>
                  <div className="mb-2">
                    <Link>About Us</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">Our Providers</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">Careers</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">Medicare</Link>
                  </div>
                  <div>
                    <Link className="pb-2">How it works</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-5 d-flex justify-content-center "
              id="sfcenterdiv"
            >
              <div className="card">
                <div className="">
                  <h5 className="scolhead mb-4">Learn more</h5>
                  <div className="mb-2">
                    <Link>Solution for your Orgnization</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">Contact Us</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">FAQ's</Link>
                  </div>
                  <div className="mb-2">
                    <Link className="pb-2">Blog</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-end">
              <div className="card">
                <h5 className="scolhead mb-4">Help</h5>
                <div className="mb-2">
                  <Link>Privacy Policy</Link>
                </div>
                <div className="mb-2">
                  <Link to={"/TermsAndCondition"} className="pb-2">
                    Terms And Condition
                  </Link>
                </div>
                <div className="mb-2">
                  <Link className="pb-2">Corporate Wellness</Link>
                </div>
                <div className="mb-2">
                  <Link className="pb-2">Refund Policy</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-end align-items-end">
            <ul className=" list-unstyled d-flex justify-content-end align-items-end">
              <li>
                <Link className="text-white mr-2">
                  <img src={Images.camra} width="30" alt="" />{" "}
                </Link>
              </li>

              <li>
                <Link className="text-white mr-2">
                  <img src={Images.facebook} width="30" alt="" />
                </Link>
              </li>

              <li className="">
                <Link className="text-white mr-2">
                  <img src={Images.linkedin} width="30" alt="" />
                </Link>
              </li>

              <li className="">
                <Link className="text-white mr-2">
                  <img src={Images.utube} width="30" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="lastfooter d-flex justify-content-center align-items-end">
        <div className="container-fuid">
          <p className="lfpara h-100 text-center">
            © 2024 Dental On Demand by Included Health, Inc. All rights
            reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
