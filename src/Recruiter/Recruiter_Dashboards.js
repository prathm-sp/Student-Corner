import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Recruiter_Dashboards.css";
import { toast } from "react-toastify";
toast.configure();

function Dashboards() {
  const token = localStorage.getItem("token");
  var [data, setData] = useState();
  var [reqUrl, setReqUrl] = useState("pending");
  console.log(reqUrl);
  useEffect(() => {
    if (!token) return null;
    if (reqUrl == "pending") {
      axios
        .get(`/class/student/list/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setData(res.data.application);
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
  }, [reqUrl]);

  const handleClick = (val, id) => {
    console.log(val, id);
    if (val == "Accept") {
      axios
        .get(`/class/accepted/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          toast.success(`Student Accepted`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (val == "Reject") {
      axios
        .get(`/class/rejected/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          toast.success(`Student Rejected`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
                    className="col-md-6 col-xl-3"
                    className="col-md-6 col-xl-3"
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
                        <h4>49</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-blue f-16 icofont icofont-tag m-r-10" />
                            All
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div
                    className="col-md-6 col-xl-3"
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
                        <h4>23</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-pink f-16 icofont icofont-tag m-r-10" />
                            All
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div
                    className="col-md-6 col-xl-3"
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
                        <h4>45</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-green f-16 icofont icofont-tag m-r-10" />
                            All
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}

                  {/* card1 end */}

                  <div className="col-md-12 col-xl-12 ">
                    <div
                      className="card project-task "
                      style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}
                    >
                      <div className="col-xl-12 col-md-12">
                        <div className="card Recent-Users">
                          <div
                            className="card-header"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <h5> Users</h5>
                            <h5
                              style={{
                                position: "relative",
                                left: "-17vw",
                              }}
                            >
                              {" "}
                              User Email
                            </h5>
                            <h5
                              style={{
                                position: "relative",
                                left: "-21vw",
                              }}
                            >
                              {" "}
                              User Mobile No.
                            </h5>
                            <h5
                              style={{
                                position: "relative",
                                left: "-36vw",
                              }}
                            >
                              {" "}
                              Class Name
                            </h5>
                          </div>
                          <div className="card-block px-0 py-3">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <tbody>
                                  {data?.map?.((item) => (
                                    <tr className="unread">
                                      <td>
                                        <i
                                          class="fa fa-user-circle "
                                          style={{ fontSize: "40px" }}
                                          aria-hidden="true"
                                        ></i>
                                      </td>
                                      <td>
                                        <h4 className="mb-1">
                                          {item?.applicantid?.email}
                                        </h4>
                                      </td>
                                      <td>
                                        <h6 className="text-muted">
                                          <i className="fas fa-circle text-c-green f-10 m-r-15" />
                                          {item?.applicantid?.mobile}
                                        </h6>
                                      </td>
                                      <td>
                                        <h4 className="mb-1">
                                          <i className="fas fa-circle text-c-green f-10 m-r-15" />
                                          {item?.classid?.classname}
                                        </h4>
                                      </td>
                                      <td>
                                        {reqUrl == "accepted" ? (
                                          <input
                                            onClick={() => {
                                              handleClick("Reject", item?._id);
                                            }}
                                            type="submit"
                                            value="Reject"
                                            className="btn re btn-primary "
                                            style={{
                                              width: "20vh",
                                              marginLeft: "9%",
                                              height: "6vh",
                                              marginTop: "0px",
                                              fontSize: "15px",
                                              backgroundColor: "#da2461",
                                              borderRadius: "12px",
                                            }}
                                            defaultValue=""
                                          />
                                        ) : reqUrl == "rejected" ? (
                                          <input
                                            onClick={() => {
                                              handleClick("Accept", item?._id);
                                            }}
                                            type="submit"
                                            value="Accpet"
                                            className="btn re btn-primary "
                                            style={{
                                              width: "20vh",
                                              height: "6vh",
                                              marginLeft: "25%",
                                              marginTop: "0px",
                                              fontSize: "15px",
                                              backgroundColor: "#8eb553",
                                              borderRadius: "12px",
                                            }}
                                            defaultValue=""
                                          />
                                        ) : reqUrl == "pending" ? (
                                          <>
                                            <input
                                              onClick={() => {
                                                handleClick(
                                                  "Accept",
                                                  item?._id
                                                );
                                              }}
                                              type="submit"
                                              value="Accpet"
                                              className="btn re btn-primary "
                                              style={{
                                                width: "20vh",
                                                height: "6vh",
                                                marginLeft: "25%",
                                                marginTop: "0px",
                                                fontSize: "15px",
                                                backgroundColor: "#8eb553",
                                                borderRadius: "12px",
                                              }}
                                              defaultValue=""
                                            />
                                            <input
                                              onClick={() => {
                                                handleClick(
                                                  "Reject",
                                                  item?._id
                                                );
                                              }}
                                              type="submit"
                                              value="Reject"
                                              className="btn re btn-primary "
                                              style={{
                                                width: "20vh",
                                                marginLeft: "9%",
                                                height: "6vh",
                                                marginTop: "0px",
                                                fontSize: "15px",
                                                backgroundColor: "#da2461",
                                                borderRadius: "12px",
                                              }}
                                              defaultValue=""
                                            />
                                          </>
                                        ) : null}
                                        {/* <input
                                          onClick={() => {
                                            handleClick("Accept", item?._id);
                                          }}
                                          type="submit"
                                          value="Accpet"
                                          className="btn re btn-primary "
                                          style={{
                                            width: "20vh",
                                            height: "6vh",
                                            marginLeft: "25%",
                                            marginTop: "0px",
                                            fontSize: "15px",
                                            backgroundColor: "#8eb553",
                                            borderRadius: "12px",
                                          }}
                                          defaultValue=""
                                        />
                                        <input
                                          onClick={() => {
                                            handleClick("Reject", item?._id);
                                          }}
                                          type="submit"
                                          value="Reject"
                                          className="btn re btn-primary "
                                          style={{
                                            width: "20vh",
                                            marginLeft: "9%",
                                            height: "6vh",
                                            marginTop: "0px",
                                            fontSize: "15px",
                                            backgroundColor: "#da2461",
                                            borderRadius: "12px",
                                          }}
                                          defaultValue=""
                                        /> */}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
