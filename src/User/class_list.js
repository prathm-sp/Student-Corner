import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import img2 from "../corousel_photo/img6.jpg";
import "./Class_list.css";
import axios from "../axios";

function Class_list() {
  const [data, setData] = useState();
  const history = useHistory();
  const category = localStorage.getItem("category");
  const cityType = localStorage.getItem("cityType");

  var [checkValues, setCheckValues] = useState({
    Ahmednagar: cityType == "Ahmednagar" ? true : false,
    Pune: cityType == "Pune" ? true : false,
    Delhi: cityType == "Delhi" ? true : false,
    Chennai: cityType == "Chennai" ? true : false,
    Kolkata: cityType == "Kolkata" ? true : false,
    Hyderabad: cityType == "Hyderabad" ? true : false,
    Mumbai: cityType == "Mumbai" ? true : false,
  });

  var [checkTypeValue, setcheckTypeValue] = useState({
    Parttime: false,
    Fulltime: false,
    Remote: false,
  });
  console.log(checkValues);
  var [number, setNumber] = useState();

  useEffect(() => {
    if (number) {
      localStorage.setItem("number", number);
      axios
        .get(`/class/category/pagination/${category}/3/${number}`)
        .then((res) => {
          console.log(res);
          setData(res.data.getbyactivity);
          var list = document.getElementsByClassName("page-item");
          console.log(list);
          list[number - 1].classList.add("active");
          list?.[number]?.classList?.remove?.("active");
          list?.[number - 2]?.classList?.remove?.("active");
          list?.[number - 3]?.classList?.remove?.("active");
          list?.[number + 1]?.classList?.remove?.("active");
          list?.[number + 2]?.classList?.remove?.("active");
          list?.[number + 3]?.classList?.remove?.("active");
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      var list = document.getElementsByClassName("page-item");
      console.log(list);
      var dtlNo = localStorage.getItem("number");

      if (!dtlNo) {
        axios
          .get(`/class/category/pagination/${category}/3/1`)
          .then((res) => {
            console.log(res);
            setData(res.data.getbyactivity);
            var list = document.getElementsByClassName("page-item");
            console.log(list);
            list[0].classList.add("active");
          })
          .catch((err) => {
            console.log(err.response);
          });
        localStorage.setItem("number", 1);

        setNumber(1);
      } else {
        var list = document.getElementsByClassName("page-item");
        console.log(list);
        axios
          .get(
            `/class/category/pagination/${category}/3/${localStorage.getItem(
              "number"
            )}`
          )
          .then((res) => {
            console.log(res);
            setData(res.data.getbyactivity);
            var list = document.getElementsByClassName("page-item");
            console.log(list);
            list[localStorage.getItem("number")].classList.add("active");
            list[localStorage.getItem("number") - 1].classList.add("active");
            list?.[localStorage.getItem("number")]?.classList?.remove?.(
              "active"
            );
            list?.[localStorage.getItem("number") - 2]?.classList?.remove?.(
              "active"
            );
            list?.[localStorage.getItem("number") - 3]?.classList?.remove?.(
              "active"
            );
            list?.[localStorage.getItem("number") + 1]?.classList?.remove?.(
              "active"
            );
            list?.[localStorage.getItem("number") + 2]?.classList?.remove?.(
              "active"
            );
            list?.[localStorage.getItem("number") + 3]?.classList?.remove?.(
              "active"
            );
          })
          .catch((err) => {
            console.log(err.response);
          });
        setNumber(dtlNo);
      }
    }
  }, [number]);

  useEffect(() => {
    const { activeCities, activeTypes } = getOnlyTrueValues();
    axios
      .get(`/class/category/filter/${category}`, {
        params: { citiesarr: activeCities, classtypearr: activeTypes },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.classtype);
      })
      .catch((err) => {
        console.log(err.response);
        axios
          .get(`/class/category/pagination/${category}/3/1`)
          .then((res) => {
            console.log(res);
            setData(res.data.getbyactivity);
          })
          .catch((err) => {
            console.log(err.response);
            axios
              .get(`/class/category/pagination/${category}/3/${number}`)
              .then((res) => {
                console.log(res);
                setData(res.data.getbyactivity);
              })
              .catch((err) => {
                console.log(err.response);
              });
          });
      });
  }, [checkValues, checkTypeValue]);

  const handleJobClick = (val) => {
    console.log("object");
    localStorage.setItem("classDetail", val);
    history.push("/Class_profile");
  };

  const getOnlyTrueValues = () => {
    const cities = Object.keys(checkValues);
    const activeCities = cities.filter(function (id) {
      return checkValues[id];
    });
    const Types = Object.keys(checkTypeValue);
    const activeTypes = Types.filter(function (id) {
      return checkTypeValue[id];
    });
    return { activeCities, activeTypes };
  };

  const handleCityFilterClick = (e) => {
    console.log(e.target.checked);
    setCheckValues({
      ...checkValues,
      [e.target.name]: e.target.checked,
    });
  };
  const handleTypeFilterClick = (e) => {
    console.log(e.target.name);
    setcheckTypeValue({
      ...checkTypeValue,
      [e.target.name]: e.target.checked,
    });
  };
  console.log(checkValues);
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
        {/* Job List Area Start */}
        <div className="job-listing-area  mt-5">
          <div className="container">
            <div className="row" style={{ marginLeft: "-72px" }}>
              {/* Left content */}
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="row">
                  <div className="col-12">
                    <div className="small-section-tittle2 mb-45">
                      <div className="ion">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="20px"
                          height="12px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(27, 207, 107)"
                            d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                          />
                        </svg>
                      </div>
                      <h4>Filter Class</h4>
                    </div>
                  </div>
                </div>
                {/* Job Category Listing start */}
                <div className="job-category-listing mb-50">
                  {/* single one */}
                  <div className="single-listing">
                    <div className="select-Categories  pb-50">
                      <div className="small-section-tittle2">
                        <h4>Sort By City</h4>
                      </div>
                      <label className="container">
                        Ahmednagar
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Ahmednagar ? true : false}
                          name="Ahmednagar"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Pune
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Pune ? true : false}
                          name="Pune"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Mumbai
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Mumbai ? true : false}
                          name="Mumbai"
                        />
                        <span className="checkmark" />
                      </label>

                      <label className="container">
                        kolkata
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Kolkata ? true : false}
                          name="Kolkata"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Chennai
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Chennai ? true : false}
                          name="Chennai"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Delhi
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Delhi ? true : false}
                          name="Delhi"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Hyderabad
                        <input
                          onChange={handleCityFilterClick}
                          type="checkbox"
                          checked={checkValues.Hyderabad ? true : false}
                          name="Hyderabad"
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    {/*  Select job items End*/}
                    {/* select-Categories start */}
                    <div className="select-Categories pt-20 pb-50">
                      <div className="small-section-tittle2">
                        <h4>Class Type</h4>
                      </div>
                      <label className="container">
                        Full Time
                        <input
                          onChange={handleTypeFilterClick}
                          type="checkbox"
                          checked={checkTypeValue.Fulltime ? true : false}
                          name="Fulltime"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Part Time
                        <input
                          onChange={handleTypeFilterClick}
                          type="checkbox"
                          checked={checkTypeValue.Parttime ? true : false}
                          name="Parttime"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Remote
                        <input
                          onChange={handleTypeFilterClick}
                          type="checkbox"
                          checked={checkTypeValue.Remote ? true : false}
                          name="Remote"
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    {/* select-Categories End */}
                  </div>

                  {/* <div className="single-listing">
                    <div className="small-section-tittle2">
                      <h4>Class Location</h4>
                    </div>
                  
                    <div className="select-job-items2">
                      <select name="cars" class="custom-select mb-3">
                        <option selected> Select </option>
                        <option value="volvo">1</option>
                        <option value="fiat">2</option>
                        <option value="audi">3</option>
                      </select>
                    </div>
                    
                  </div> */}
                  {/* single three */}
                </div>
                {/* Job Category Listing End */}
              </div>
              {/* Right content */}
              <div className="col-xl-9 col-lg-9 col-md-8">
                {/* Featured_job_start */}
                <section className="featured-job-area">
                  <div className="container">
                    {/* Count of Job list Start */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="count-job mb-35">
                          <span>{data?.length} Class found</span>
                          {/* Select job items start */}
                          {/* <div className="select-job-items">
                            <span>Sort by</span>
                            <select name="select">
                              <option value>None</option>
                              <option value>job list</option>
                              <option value>job list</option>
                              <option value>job list</option>
                            </select>
                          </div> */}
                          {/*  Select job items End*/}
                        </div>
                      </div>
                    </div>
                    {/* Count of Job list End */}
                    {/* single-job-content */}
                    {data?.map?.((item, index) => {
                      return (
                        <div
                          className="single-job-items mb-30"
                          onClick={() => {
                            handleJobClick(item?._id);
                          }}
                          key={index}
                        >
                          <div className="job-items">
                            <div className="company-img">
                              <a>
                                <img src={item?.image} alt="" />
                              </a>
                            </div>
                            <div className="job-tittle job-tittle2 ">
                              <a>
                                <h4>{item?.classname}</h4>
                              </a>
                              <ul>
                                <li>{item?.classtype}</li>
                                <li>
                                  <i className="fas fa-map-marker-alt" />
                                  {item?.city}
                                </li>
                                <li>Rs.{item?.fees}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* single-job-content */}
                  </div>
                </section>
                {/* Featured_job_end */}
              </div>
            </div>
          </div>
        </div>
        {/* Job List Area End */}
        {/*Pagination Start  */}
        <div className="pagination-area pb-115 text-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-wrap d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li
                        className="page-item"
                        onClick={() => {
                          setNumber(1);
                        }}
                      >
                        <a className="page-link">01</a>
                      </li>
                      <li
                        className="page-item"
                        onClick={() => {
                          setNumber(2);
                        }}
                      >
                        <a className="page-link">02</a>
                      </li>
                      <li
                        className="page-item"
                        onClick={() => {
                          setNumber(3);
                        }}
                      >
                        <a className="page-link">03</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">
                          <span className="ti-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Pagination End  */}
      </main>
    </div>
  );
}

export default Class_list;
