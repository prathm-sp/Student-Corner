import React, { useEffect, useState } from "react";
import "./user_Dashboards.css";
import axios from '../axios'

function Dashboards() {
  let token = localStorage.getItem('token')
  var [reqUrl, setReqUrl] = useState("pending");
  var [count, setCount] = useState()
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(('/class/my/subscribed/classes'), { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log('res = ', res)
        setData(res.data.myclasses)
      })
      .catch((err) => {
        console.log('err = ', err.response)
      })
  }, [])

  useEffect(() => {
    if (!token) return null;
    // axios.get('/class/my/subscribed/classes', { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => {
    //     console.log(res)
    //     setData(res.data.myclasses)
    //   })
    //   .catch((err) => {
    //     console.log(err.response)
    //   })
    if (reqUrl == "pending") {
      axios
        .get(`/class/my/subscribed/classes/Applied`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setData(res.data.myclasses);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .get(`/class/student/list/${reqUrl}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setData(res.data.application);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [reqUrl, count]);


  return (
    <div>
      <div className="pcoded-content mt-100">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="page-body">
                <div className="row">
                  {/* card1 start */}
                  <div
                    className="col-md-6 col-xl-4"
                    className="col-md-6 col-xl-4"
                    onClick={() => {
                      setReqUrl("pending");
                    }}
                  >
                    <div
                      className="card widget-card-1 "
                      style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}
                    >
                      <div className="card-block-small">
                        <i className="fa fa-list bg-c-blue card1-icon" />
                        <span className="text-c-blue f-w-600">Pending</span>
                        <h4>{count?.pending}</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-blue f-16 icofont icofont-tag m-r-10" />
                            Pending Classes

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div
                    className="col-md-6 col-xl-4"
                    onClick={() => {
                      setReqUrl("rejected");
                    }}
                  >
                    <div
                      className="card widget-card-1"
                      style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}
                    >
                      <div className="card-block-small">
                        <i className="fa fa-window-close bg-c-pink card1-icon" />
                        <span className="text-c-pink f-w-600">Rejected</span>
                        <h4>{count?.rejected}</h4>

                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-pink f-16 icofont icofont-tag m-r-10" />
                            Rejected Classes

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div
                    className="col-md-6 col-xl-4"
                    onClick={() => {
                      setReqUrl("accepted");
                    }}
                  >
                    <div
                      className="card widget-card-1"
                      style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}
                    >
                      <div className="card-block-small">
                        <i className=" fa fa-check bg-c-green card1-icon" />
                        <span className=" text-c-green f-w-600">Accepted</span>
                        <h4>{count?.accepted}</h4>

                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-green f-16 icofont icofont-tag m-r-10" />
                            Accepted Classes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}

                  <div className="col-md-12 col-xl-12 ">
                    <div
                      className="card project-task "
                      style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}
                    >
                      <div className="card-block  p-b-10">
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Class name</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data?.map?.((item) => (
                                <tr>
                                  <td>
                                    <div
                                      className="single-job-items "
                                      style={{ width: "85vw" }}
                                    >
                                      <div className="job-items">
                                        <div className="company-img">
                                          <a>
                                            <img
                                              src={item?.classid?.image}
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                        <div className="job-tittle job-tittle2">
                                          <a>
                                            <h4>{item?.classid?.classname}</h4>
                                          </a>
                                          <ul>
                                            <li>{item?.classid?.activities}</li>
                                            <li>
                                              <i className="fas fa-map-marker-alt ml-10" />
                                              {item?.classid?.city}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {reqUrl == 'pending' ? (
                                        <input
                                          type="submit"
                                          value={item?.status}
                                          className="btn re btn-primary btn-block"
                                          style={{
                                            width: "30vh",
                                            height: "7vh",
                                            marginTop: "30px",
                                            fontSize: "15px",
                                            backgroundColor: "#8eb553",
                                            borderRadius: "12px",
                                          }}
                                          defaultValue=""
                                        />
                                      ) : (
                                          <input
                                            type="submit"
                                            value={item?.status}
                                            className="btn re btn-primary btn-block"
                                            style={{
                                              width: "30vh",
                                              height: "7vh",
                                              marginTop: "30px",
                                              fontSize: "15px",
                                              backgroundColor: "#8eb553",
                                              borderRadius: "12px",
                                            }}
                                            defaultValue=""
                                          />
                                        )}

                                    </div>
                                  </td>
                                </tr>
                              ))}

                              <tr>
                                <td>
                                  <div
                                    className="single-job-items  "
                                    style={{ width: "85vw" }}
                                  >
                                    <div className="job-items">
                                      <div className="company-img">
                                        <a>
                                          <img
                                            src="assets/img/icon/job-list3.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <a>
                                          <h4>Digital Marketer</h4>
                                        </a>
                                        <ul>
                                          <li>Creative Agency</li>
                                          <li>
                                            <i className="fas fa-map-marker-alt ml-10" />
                                            pune
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <input
                                      type="submit"
                                      value="Rejected"
                                      className="btn re btn-primary btn-block"
                                      style={{
                                        width: "30vh",
                                        height: "7vh",
                                        fontSize: "15px",
                                        marginTop: "30px",
                                        backgroundColor: "#ea5c7e",
                                        borderRadius: "12px",
                                      }}
                                      defaultValue=""
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div
                                    className="single-job-items "
                                    style={{ width: "85vw" }}
                                  >
                                    <div className="job-items">
                                      <div className="company-img">
                                        <a>
                                          <img
                                            src="assets/img/icon/job-list3.png"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <a>
                                          <h4>Digital Marketer</h4>
                                        </a>
                                        <ul>
                                          <li>Creative Agency</li>
                                          <li>
                                            <i className="fas fa-map-marker-alt ml-10" />
                                            pune
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <input
                                      type="submit"
                                      value="Process"
                                      className=" btn re btn-primary btn-block"
                                      style={{
                                        width: "30vh",
                                        height: "7vh",
                                        fontSize: "15px",
                                        marginTop: "30px",
                                        backgroundColor: "rgb(246 181 76)",
                                        borderRadius: "12px",
                                      }}
                                      defaultValue=""
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data widget End */}
                </div>
              </div>
            </div>
            <div id="styleSelector"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
