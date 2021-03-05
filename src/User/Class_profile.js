import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import img2 from "../corousel_photo/img5.png";
function Class_profile() {
  const [data, setData] = useState();
  const history = useHistory();
  useEffect(() => {
    let classDetail = localStorage.getItem("classDetail");
    if (!classDetail) history.push("/");
    const token = localStorage.getItem("token");
    const handleClick = () => {
      axios
        .get(`/class/${classDetail}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    handleClick();
  }, []);

  return (
    <div>
      <div class="container container1  mt-100 ">
        <div class="section" id="carousel">
          <div>
            <div class="col-md-10  col-lg-10 mr-auto ml-auto">
              <div class=" card-raised card-carousel">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={img2} alt="First slide" />
                      <div class="carousel-caption d-none d-md-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* job post company Start */}
        <div className="job-post-company mt-5">
          <div className="container">
            <div className="row justify-content-between">
              {/* Left Content */}
              <div className="col-xl-7 col-lg-8">
                {/* job single */}
                <div className="single-job-items mb-50">
                  <div className="job-items">
                    <div className="company-img company-img-details">
                      <a href="#">
                        <img src={data?.class?.image} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="#">
                        <h4>{data?.class?.classname}</h4>
                      </a>
                      <ul>
                        <li>{data?.class?.classtype}</li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          {data?.class?.city}
                        </li>
                        <li>Rs.{data?.class?.fees}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* job single End */}
                <div className="job-post-details">
                  <div className="post-details1 mb-50">
                    {/* Small Section Tittle */}
                    <div className="small-section-tittle">
                      <h4>Class Description</h4>
                    </div>
                    <p>{data?.class?.classdescription}</p>
                  </div>
                  <div className="post-details2  mb-50">
                    {/* Small Section Tittle */}
                    <div className="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                    {data?.class?.classinformation}
                  </div>
                  {/* <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      <li>3 or more years of professional design experience</li>
                      <li>Direct response email experience</li>
                      <li>Ecommerce website design experience</li>
                      <li>Familiarity with mobile and web apps preferred</li>
                      <li>Experience using Invision a plus</li>
                    </ul>
                  </div> */}
                </div>
              </div>
              {/* Right Content */}
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Class Overview</h4>
                  </div>
                  <ul>
                    <li>
                      Location : <span>{data?.class?.city}</span>
                    </li>
                    <li>
                      Vacancy : <span>{data?.class?.vacancy}</span>
                    </li>

                    <li>
                      Class fess :{" "}
                      <span>
                        Rs.{data?.class?.fees} {data?.class?.duration} months
                      </span>
                    </li>
                  </ul>
                  <div className="apply-btn2">
                    {data?.subscribed == "Rejected" ? (
                      <a href="#" className="btn">
                        Rejected
                      </a>
                    ) : data?.subscribed == "Apply" ? (
                      <a href="#" className="btn">
                        Apply
                      </a>
                    ) : data?.subscribed == "Applied" ? (
                      <a href="#" className="btn">
                        Applied
                      </a>
                    ) : data?.subscribed == "Confirmed" ? (
                      <a href="#" className="btn">
                        Confirmed
                      </a>
                    ) : null}
                  </div>
                </div>
                {/* <div className="post-details4  mb-50">
                  <div className="small-section-tittle">
                    <h4>Class Information</h4>
                  </div>
                  <span>Colorlib</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <ul>
                    <li>
                      Name: <span>....... </span>
                    </li>

                    <li>
                      Email: <span>Xyz@gmail.com</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* job post company End */}
      </main>
    </div>
  );
}

export default Class_profile;
