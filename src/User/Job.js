import React from "react";
import "./Job.css";
import Programing from "../icon/programing.png";
import Hospital from "../icon/hospital.png";
import Technical from "../icon/technical.png";
import Sport from "../icon/sport.png";
import Cenimatics from "../icon/cenimatics .png";
import Cooking from "../icon/cooking.png";
import job from "../corousel_photo/job.jpg";

function Job() {
  return (
    <div>
      <div class="container container1  mt-100 ">
        <div class="section" id="carousel">
          <div>
            <div class="col-md-12  col-lg-12 mr-auto ml-auto">
              <div class=" card-raised card-carousel">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={job} alt="First slide" />
                      <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container container1   ">
        <div class="section" id="carousel">
          <div>
            <div class="col-md-12  col-lg-12 mr-auto ml-auto">
              <div class=" card-raised card-carousel">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      {/* <img class="d-block w-100" src={img2}
                           alt="First slide"/> */}
                      <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="feature-cat-area pt-100" id="category">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10"> Job Categories</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img src={Programing} />
                  </a>
                  <p>Programing</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img src={Sport} />
                  </a>
                  <p>Sport</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img src={Technical} />
                  </a>
                  <p>Technology</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img src={Cenimatics} />
                  </a>
                  <p>Cenimatics</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img src={Hospital} />
                  </a>
                  <p>Hospital</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="single-fcat">
                  <a href="category.html">
                    <img style={{ height: "16.5vh" }} src={Cooking} />
                  </a>
                  <p>Cooking</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End feature-cat Area */}
        {/* Start post Area */}
        <section className="post-area section-gap">
          <div className="container">
            <div className="row justify-content-center d-flex">
              <div className="col-lg-4 sidebar ">
                <div className="single-slidebar ">
                  <h4>Jobs by Location</h4>
                  <ul className="cat-list">
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Pune </p>
                        <span>37</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Mumbai</p>
                        <span>57</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Ahmednagar</p>
                        <span>33</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Delhi</p>
                        <span>36</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>kolkata</p>
                        <span>47</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Hyberabad</p>
                        <span>27</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-content-between d-flex">
                        <p>Chennai</p>
                        <span>17</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 post-list">
                <ul className="cat-list ">
                  <li>
                    <a>Recent</a>
                  </li>
                  <li>
                    <a>Full Time</a>
                  </li>
                  <li>
                    <a>Remote</a>
                  </li>
                  <li>
                    <a>part Time</a>
                  </li>
                </ul>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns" >
                        <li>
                        <a type="button" data-toggle="modal" data-target="#myModal" >Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>
                            <span className="lnr lnr-heart" />
                          </a>
                        </li>
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/post.png" alt="" />
                    <ul className="tags">
                      <li>
                        <a>Art</a>
                      </li>
                      <li>
                        <a>Media</a>
                      </li>
                      <li>
                        <a>Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details">
                    <div className="title d-flex flex-row justify-content-between">
                      <div className="titles">
                        <a href="single.html">
                          <h4>Creative Art Designer</h4>
                        </a>
                        <h6>Premium Labels Limited</h6>
                      </div>
                      <ul className="btns">
                        <li>
                          <a>
                            <span className="lnr lnr-heart" />
                          </a>
                        </li>
                        <li>
                          <a>Apply</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address">
                      <span className="lnr lnr-map" /> 56/8, Panthapath
                      Dhanmondi Dhaka
                    </p>
                    <p className="address">
                      <span className="lnr lnr-database" /> 15k - 25k
                    </p>
                  </div>
                </div>
                <a
                  className="text-uppercase loadmore-btn mx-auto d-block"
                  href="category.html"
                >
                  Load More job Posts
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End post Area */}
      </div>
       <div id="myModal" class="modal fade " role="dialog">
                <div class="modal-dialog modal-lg">


                    <div class="modal-content">
                        
                        <div class="modal-body">

                        <div className="container-fluid " style={{marginTop:"-40px"}}>
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-12 col-md-12 col-lg-12 col-xl-9 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h2 id="heading">Upload Resume </h2>
                            <p>Fill all form field to go to next step</p>
                            <form id="msform">
                                {/* progressbar */}
                                <ul id="progressbar" className="progressbar">
                                    <li className="active"  id="personal"><strong>Personal Information </strong></li>
                                    <li id="payment"><strong>Upload Resume</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                </ul>
                                 <br /> {/* fieldsets */}
                                <fieldset>
                                    <div className="form-card">
                                        <div className="row">
                                            <div className="col-7">
                                                <h2 className="fs-title"> Personal Information:</h2>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 1 - 3</h2>
                                            </div>
                                        </div> <label className="fieldlabels">First Name: *</label> <input type="text" name="fname" placeholder="First Name" /> <label className="fieldlabels">Last Name: *</label> <input type="text" name="lname" placeholder="Last Name" />
                                    </div> <input type="button" name="next" className="next action-button" defaultValue="Next" />
                                </fieldset>
                       
                                <fieldset>
                                    <div className="form-card">
                                        <div className="row">
                                            <div className="col-7">
                                                <h2 className="fs-title">Resume Upload:</h2>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 2 - 3</h2>
                                            </div>
                                        </div>
                                        <label className="fieldlabels">Upload Your Resume:</label>
                                        <input type="file" name="pic" accept="image/*" />

                                    </div>  <input type="button" name="next" className="next action-button" defaultValue="Submit" /> <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                                </fieldset>
                                <fieldset>
                                    <div className="form-card">
                                        <div className="row">
                                            <div className="col-7">
                                                <h2 className="fs-title">Finish:</h2>
                                            </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 3 - 3</h2>
                                            </div>
                                        </div> <br /><br />
                                        <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                                        <div className="row justify-content-center">
                                            <div className="col-3"> <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" /> </div>
                                        </div> <br /><br />
                                        <div className="row justify-content-center">
                                            <div className="col-7 text-center">
                                                <h5 className="purple-text text-center">You Have Successfully Upload Your Resume </h5>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Job;
