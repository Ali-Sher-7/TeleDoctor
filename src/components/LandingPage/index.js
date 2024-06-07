import React from "react";
import { Images } from "../../assits/Images";
import Header from "../../assits/genericComponents/Header";
import Footer from "../../assits/genericComponents/Footer";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <Header />
      <section className="section1 pb-5">
        <div className="container-fluid">
          <div className="backsize">
            <div className="row">
              <div className="col-sm-12 col-md-7">
                {" "}
                <h1 className="fw-bolder mb-3">
                  Consult a Dental anytime,anywhere
                </h1>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pellentesque aliquam ipsum, et fermentum tellus sodales
                  tincidunt.
                </p>
                <div className="buttons d-flex mb-2 mt-3">
                  <button className="rounded buttonsize text-white px-2 py-2 fs-5 ">
                    Ask a Doctor Online
                  </button>
                  <button className="secondbutton buttonsize text-white py-2 px-4 ml-2 rounded fs-5">
                    unlimited Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="row  pb-2 pt-3">
              <div className="col-12 col-sm-12 col-md-3">
                <Link className="text-dark link-lip fs-5">
                  <img src={Images.tick} className="pr-2" alt="" />
                  Lorem ipsum
                </Link>
              </div>
              <div className="col-sm-12 col-md-3">
                <Link className="text-dark fs-5 link-lip  backspace">
                  <img src={Images.tick} className="pr-2" alt="" />
                  Lorem ipsum
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <Link className="text-dark link-lip fs-5">
                  <img src={Images.tick} className="pr-2" alt="" />
                  Lorem ipsum
                </Link>
              </div>
              <div className="col-sm-12 col-md-3 ">
                <Link className="text-dark fs-5 link-lip backspace">
                  <img src={Images.tick} className="pr-2" alt="" />
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 p-5">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-5 d-flex justify-content-center">
              <div className="card border-0">
                <div className="card-body">
                  <h4 className=" fs-3">Features</h4>
                  <h1 className="card-title mainheading ">
                    Our Best Service And Quite Popular Online treatment
                  </h1>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis pellentesque aliquam ipsum, et fermentum tellus sodales
                    tincidunt. Vestibulum pharetra nunc et massa rutrum, sed
                    consectetur augue bibendum.
                  </p>
                  <button className="btn border rounded-pill">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-7 h-100 w-100 d-flex justify-content-center">
              <div className="row h-100 w-100">
                <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center cardcol">
                  <div className="card carddiv shadow h-100">
                    <div className="image mt-4 ml-4">
                      <img
                        src={Images.doctor}
                        className="card-img-top "
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title heading1 fw-bolder ">Dental</h4>
                      <p className="card-text cardpara"> Lorem ipsum</p>
                      <div className="d-flex align-items-center cardacchor">
                        <div>
                          <Link className="btn ">Explore More</Link>
                        </div>
                        <div>
                          <img src={Images.Arrow4} className="image2" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center cardcol">
                  <div className="card carddiv shadow h-100">
                    <div className="image mt-4 ml-4">
                      <img
                        src={Images.clipboard}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body w-100">
                      <h4 className="card-title heading1 fw-bolder">Reports</h4>
                      <p className="card-text cardpara ">Lorem ipsum</p>
                      <div className="d-flex align-items-center cardacchor ">
                        <div>
                          <Link className="btn ">Explore More</Link>
                        </div>
                        <div>
                          <img src={Images.Arrow4} className="image2" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center cardcol">
                  <div className="card carddiv shadow h-100">
                    <div className="image mt-4 ml-4">
                      {" "}
                      <img
                        src={Images.screen}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body w-100">
                      <h4 className="card-title heading1 fw-bolder">
                        Monitoring
                      </h4>
                      <p className="card-text cardpara">Lorem ipsum</p>
                      <div className="d-flex align-items-center">
                        <div>
                          <Link className="btn">Explore More</Link>
                        </div>
                        <div>
                          <img src={Images.Arrow4} className="image2" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="imgdiv mt-5">
                <img src={Images.doctor3} width="95%" alt="..." />
                <div>
                  <p className="section3p px-2 py-4">
                    20 years of Experience Doctors
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mt-4">
                <h5 className="mb-3">Online Consultation</h5>
                <h2 className="mb-4 fw-bold">CONSULT ONLINE DOCTORS</h2>
                <p>
                  Access expert medical advice from the comfort of your home
                  with our online doctor consultation services
                </p>
              </div>
              <div className="section3divcol px-4 pt-4 mt-4">
                <div className="hoverimgdiv">
                  <img
                    src={Images.query}
                    className="mt-2 hoverimg "
                    alt="..."
                  />
                  <img
                    src={Images.callQ}
                    className="mt-2 hoverimg2 "
                    alt="..."
                  />
                </div>
                <div className="ml-3">
                  <h3>Query Consultation</h3>
                  <p>
                    Ask a Doctor Online and get your medical concerns clarified
                    with the doctor's advise.
                  </p>
                </div>
              </div>
              <div className="section3flex">
                <div className="section3divcol px-4 pt-4 mt-4 centerdiv">
                  <div className="centerhoverdiv hoverimgdiv ">
                    <img
                      src={Images.chat}
                      className="mt-2 hoverimgcenter hoverimg"
                      alt="..."
                    />
                    <img
                      src={Images.chat2}
                      className="mt-2 hoverimg2"
                      alt="..."
                    />
                  </div>
                  <div className="ml-3">
                    <h3>Chat Consultation</h3>
                    <p>
                      Post unlimited follow-ups to the doctor for using our chat
                      services.{" "}
                    </p>
                  </div>
                </div>
                <div className="section3divcol px-4 pt-4 mt-4">
                  <div className="hoverimgdiv">
                    <img
                      src={Images.monitring}
                      className="mt-2 hoverimg"
                      alt="..."
                    />
                    <img
                      src={Images.lapgirl}
                      className="mt-2 hoverimg2"
                      alt="..."
                    />
                  </div>
                  <div className="ml-3">
                    <h3>Monitoring-al Doctor</h3>
                    <p>
                      Talk whit a doctor using our highly secured HIPAA
                      complained end-to-end online doctor monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4 p-5">
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="">
                <h5 className="fs-3 mb-3">Dental Specialties</h5>
                <h2 className=""> CONSULTING SPECIALTIES</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pellentesque aliquam ipsum,
                </p>
              </div>
              <div className="row mt-5 justify-content-center section4row">
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded mr-4 px-4 py-2 section4h6">
                  <div>
                    <img
                      src={Images.khansi}
                      className="imagesection4 pl-2"
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                    <h6 className=" ml-3 d-flex justify-content-center align-items-center">
                      Lorem ipsum
                    </h6>
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded  mr-4 px-4 py-2 section4col section4h6">
                  <div>
                    <img
                      src={Images.cheenk}
                      className="imagesection4 pl-2"
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fs-5 ml-2">Lorem ipsum</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-5 justify-content-center section4row">
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded mr-4 py-2 section4h6">
                  <div>
                    <img
                      src={Images.notes}
                      className="imagesection4 pl-3"
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fs-5 ml-2">Lorem ipsum</h6>
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded mr-4 px-4 py-2 section4col section4h6">
                  <div>
                    <img
                      src={Images.corona}
                      className="imagesectcion4 pl-2"
                      alt=""
                      yWW
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fs-5 ml-2">Lorem ipsum</h6>
                  </div>
                </div>
              </div>
              <div className="row mt-5 justify-content-center section4row">
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded mr-4 px-4 py-2 section4h6">
                  <div>
                    <img
                      src={Images.boy}
                      className="imagesection4 pl-2"
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fs-5 ml-2">Lorem ipsum</h6>
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-5 d-flex bg-white shadow rounded mr-4 px-4 py-2 section4col section4h6">
                  <div>
                    <img
                      src={Images.cheenk}
                      className="imagesection4 pl-2"
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fs-5 ml-2">Lorem ipsum</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-sm-12 col-md-6 d-flex justify-content-end align-items-end">
              {/* <div className="w-100 d-flex justify-content-end h-100">
        <div className="outer d-flex justify-content-end"></div></div>
          <div className="middle"> 
            
          </div> */}
              <img
                src={Images.threedivimg}
                className="threedivimage h-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section5 mx-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-sm-12 col-md-6 d-flex align-items-center p-0">
              <div className="outer5 rounded-circle ">
                <div className="middle5 rounded-circle">
                  <img
                    src={Images.mobiledoctor}
                    className="section5img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 p-0">
              <div className="mt-4">
                <h2 className="mb-4 sec5mainheading">
                  Downlowd the Dental app
                </h2>
              </div>
              <div className="d-flex justify-content-center align-items-start border-0">
                <div>
                  <img src={Images.play} className="mt-2 innerimg" alt="" />
                </div>
                <div className="ml-3 downloadapp">
                  <h4 className="">Monitoring Doctors</h4>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="d-flex justify-content-center align-items-start border-0 centerdiv">
                  <div>
                    <img src={Images.watch} className="mt-2 innerimg" alt="" />
                  </div>
                  <div className="ml-3 downloadapp">
                    <h4>24/7 Services</h4>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-start border-0">
                  <div>
                    <img
                      src={Images.calonder}
                      className="mt-2 innerimg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 downloadapp">
                    <h4>Appointment</h4>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="buttonsatlast d-flex downloadapp">
                <div className="">
                  <button className="btn-app ">
                    <img src={Images.playstore} alt="" className="play" />{" "}
                    Google Play
                  </button>
                  <button className="btn-app1">
                    <img src={Images.apple} alt="" className="apple" /> App
                    Store{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec6 ">
        <div className="container-fluid ">
          <h2> COMMON CONDITIONS WE TREAT</h2>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-3 sec6cardcol">
              <div className="card sec6card mb-2">
                <img
                  src={Images.ring}
                  className="sec6img"
                  width="30%"
                  alt="..."
                />
                <div className="card-body sec6cardbody">
                  <h5 className="card-title  text-center">Urgent Care</h5>
                  <div className="w-100 adiv">
                    <Link className="btn border rounded-pill mt-3 text-center">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 sec6cardcol">
              <div className="card sec6card mb-2">
                <img
                  src={Images.online}
                  className="sec6img"
                  width="30%"
                  alt="..."
                />
                <div className="card-body sec6cardbody">
                  <h5 className="card-title text-center">Online Therapy</h5>
                  <div className="w-100 adiv">
                    <Link className="btn border rounded-pill mt-3 text-center ml-2">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-md-6 col-lg-3 mb-2 sec6cardcol">
              <div className="card sec6card">
                <img
                  src={Images.computer}
                  className="sec6img"
                  width="30%"
                  alt="..."
                />
                <div className="card-body sec6cardbody">
                  <h5 className="card-title text-center ">Online Psychiatry</h5>
                  <div className="w-100 adiv">
                    <Link className="btn border rounded-pill mt-3 text-center ml-2">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 sec6cardcol">
              <div className="card sec6card mb-2">
                <img
                  src={Images.kit2}
                  className="d-flex justify-content-center sec6img"
                  width="30%"
                  alt="..."
                />

                <div className="card-body sec6cardbody">
                  <h5 className="card-title text-center ">Everyday Care</h5>
                  <div className="w-100 adiv">
                    <Link className="btn border rounded-pill mt-3 text-center ml-2 ">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec7">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="container-fluid">
                <div className="head">
                  <h5 className="fs-4">Question & Answer</h5>
                  <h1>Frequently asked Questions</h1>
                  <p className="w-75 mt-2 mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div>
                  <div className="mainshifteddiv">
                    <p>
                      <div
                        className="btn mr-1 w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div className=" d-flex justify-content-between parashow parashowbtn">
                          <div className="d-flex align-items-center h-100 w-100 justify-content-start">
                            <div className="numdiv mr-3 ml-3 ">01.</div>
                            <div>
                              <h3 className="mt-1 ">Is BachID safe?</h3>
                            </div>
                          </div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="collapse" id="collapseExample1">
                        <div className=" shiftedpara ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis pellentesque aliquam ipsum, et fermentum
                          tellus sodales tincidunt. Vestibulum pharetra nunc et
                          massa rutrum, sed consectetur augue bibendum.
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="mainshifteddiv">
                  <p>
                    <div
                      className="btn mr-1 w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className=" d-flex justify-content-between parashow parashowbtn">
                        <div className="d-flex align-items-center h-100 w-100 justify-content-start">
                          <div className="numdiv mr-3 ml-3 ">02.</div>
                          <div>
                            <h3 className="mt-1 ">How do you use BachID?</h3>
                          </div>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="collapse" id="collapseExample2">
                      <div className=" shiftedpara ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis pellentesque aliquam ipsum, et fermentum tellus
                        sodales tincidunt. Vestibulum pharetra nunc et massa
                        rutrum, sed consectetur augue bibendum.
                      </div>
                    </div>
                  </p>
                </div>
                <div className="mainshifteddiv">
                  <p>
                    <div
                      className="btn mr-1 w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className=" d-flex justify-content-between parashow parashowbtn">
                        <div className="d-flex align-items-center h-100 w-100 justify-content-start">
                          <div className="numdiv mr-3 ml-3 ">03.</div>
                          <div>
                            <h3 className="mt-1 ">
                              Are BachID staff qualified?
                            </h3>
                          </div>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="collapse" id="collapseExample3">
                      <div className=" shiftedpara ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis pellentesque aliquam ipsum, et fermentum tellus
                        sodales tincidunt. Vestibulum pharetra nunc et massa
                        rutrum, sed consectetur augue bibendum.
                      </div>
                    </div>
                  </p>
                </div>
                <div className="mainshifteddiv">
                  <p>
                    <div
                      className="btn mr-1 w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample4"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className=" d-flex justify-content-between parashow parashowbtn">
                        <div className="d-flex align-items-center h-100 w-100 justify-content-start">
                          <div className="numdiv mr-3 ml-3 ">04.</div>
                          <div>
                            <h3 className="mt-1 ">
                              How do i get started with BachID?
                            </h3>
                          </div>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="collapse" id="collapseExample4">
                      <div className=" shiftedpara ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis pellentesque aliquam ipsum, et fermentum tellus
                        sodales tincidunt. Vestibulum pharetra nunc et massa
                        rutrum, sed consectetur augue bibendum.
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <div className="ml-4 sec7imgdiv">
                <img src={Images.doctorxray} width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="article-h">
                <h5 className="art-h"> Our Blog </h5>
                <h2 className="ask">RECENT ARTICLES</h2>
                <p className="ask-p">
                  According to the 2019 AHIP Virtual care survey of health plans
                  are now turning to virtual care to make healthcare accessible
                  and affordable for medicare advantage and medicaid
                  populations. Deincare proven approach scale to provide high
                  quality comprehensive virtual care to more members
                </p>
                <button type="button" className="btn34 ">
                  {" "}
                  Explore More{" "}
                </button>
              </div>
            </div>
            <div className="col-xl-6">
              <img src={Images.hey} alt="" className="group169" />
            </div>
            <div className=" cardss">
              <div
                class="row g-1"
                style={{ marginLeft: "0", marginRight: "0" }}
              >
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="card51 ">
                    <p className="alter text-center">
                      Alternative Surgery Treatment For Knee Pain
                    </p>
                    <div className="text-center">
                      <button type="button" className="btn341 ">
                        {" "}
                        Dr. Mohiuddin{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="card512">
                    <p className="alter text-center">
                      Consult In Any Dermatology Problem With Our Experienced
                      Doctor
                    </p>
                    <div className="text-center">
                      <button type="button" className="btn341 ">
                        {" "}
                        Dr. Tawhida{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="card513">
                    <p className="alter text-center">
                      Meeting the Needs of Medicare and Medicaid Population
                    </p>
                    <div className="text-center">
                      <button type="button" className="btn341 ">
                        Dr. Ali Ahmad{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container-fluid">
          <div className="container ">
            <h2 className="text-center">WHAT OUR PATIENTS ARE SAYING</h2>
            <div className="bottomborder"></div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              pellentesque aliquam ipsum,
            </p>
          </div>

          <div className="container slidercontainer">
            <div className="cilender"></div>
            <div className="circle"></div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide slidermaindiv"
            >
              <div className="carousel-inner">
                <div className="carousel-item active slidercontent">
                  <div className="reviewimg">
                    <img src={Images.review} className="smallimg" alt="..." />
                  </div>

                  <div className="slider2div">
                    <div className="maincontent">
                      <p className="text-white">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Duis pellentesque aliquam ipsum, et fermentum
                        tellus sodales tincidunt. Vestibulum pharetra nunc et
                        massa rutrum,"
                      </p>
                      <h4>-VINELAND ELEMENTRY</h4>
                      <div className="starimg">
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slidercontent">
                  <div className="reviewimg">
                    <img src={Images.doctor3} className="smallimg" alt="..." />
                  </div>
                  <div className="slider2div">
                    <div className="maincontent">
                      <p className="text-white">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Duis pellentesque aliquam ipsum, et fermentum
                        tellus sodales tincidunt. Vestibulum pharetra nunc et
                        massa rutrum,"
                      </p>
                      <h4>-VINELAND ELEMENTRY</h4>
                      <div className="starimg">
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                        <img className="mr-2 starr" src={Images.star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators indicatorbutton">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active indicatorcircle"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
