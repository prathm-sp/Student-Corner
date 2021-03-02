import React from 'react'
import "./Recruiter_Dashboards.css"
function Dashboards() {
  return (
    <div>
      <div className="pcoded-content mt-100">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="page-body">
                <div className="row">
                  {/* card1 start */}
                  <div className="col-md-6 col-xl-3">
                    <div className="card widget-card-1 " style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}>
                      <div className="card-block-small">
                        <i className="fa fa-list bg-c-blue card1-icon" />
                        <span className="text-c-blue f-w-600">All</span>
                        <h4>49</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-blue f-16 icofont icofont-tag m-r-10" />All
                                    </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div className="col-md-6 col-xl-3">
                    <div className="card widget-card-1" style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}>
                      <div className="card-block-small">
                        <i className="fa fa-window-close bg-c-pink card1-icon" />
                        <span className="text-c-pink f-w-600">Reject</span>
                        <h4>23</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-pink f-16 icofont icofont-tag m-r-10" />All
                                    </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div className="col-md-6 col-xl-3">
                    <div className="card widget-card-1" style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}>
                      <div className="card-block-small">
                        <i className=" fa fa-check bg-c-green card1-icon" />
                        <span className=" text-c-green f-w-600">Accept</span>
                        <h4>45</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-green f-16 icofont icofont-tag m-r-10" />All
                                    </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}
                  {/* card1 start */}
                  <div className="col-md-6 col-xl-3">
                    <div className="card widget-card-1" style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}>
                      <div className="card-block-small">
                        <i className="fas fa-sync  bg-c-yellow card1-icon" />
                        <span className="text-c-yellow f-w-600">Process</span>
                        <h4>56</h4>
                        <div>
                          <span className="f-left m-t-10 text-muted">
                            <i className="text-c-yellow f-16 icofont icofont-refresh m-r-10" />Just update
                                    </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card1 end */}

                  <div className="col-md-12 col-xl-12 ">
                    <div className="card project-task " style={{ boxShadow: "0 1px 11px 0 rgba(0, 0, 0, 0.12)" }}>
                      <div className="col-xl-12 col-md-12">
                        <div className="card Recent-Users">
                          <div className="card-header">
                            <h5> Users</h5>
                          </div>
                          <div className="card-block px-0 py-3">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <tbody>
                                <tr className="unread">
                                    <td><i class="fa fa-user-circle " style={{ fontSize: "40px" }} aria-hidden="true"></i></td>
                                    <td>
                                      <h4 className="mb-1">Jatin Udasi</h4>

                                    </td>
                                    <td>
                                      <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                    </td>
                                    <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh",marginLeft:"25%",  marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px"}} defaultValue="" />
                                    <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh",marginLeft:"9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px"}} defaultValue="" />
                                     </td>
                                  </tr>

                                  <tr className="unread">
                                    <td><i class="fa fa-user-circle " style={{ fontSize: "40px" }} aria-hidden="true"></i></td>
                                    <td>
                                      <h4 className="mb-1">Jatin Udasi</h4>

                                    </td>
                                    <td>
                                      <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                    </td>
                                    <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh",marginLeft:"25%",  marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px"}} defaultValue="" />
                                    <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh",marginLeft:"9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px"}} defaultValue="" />
                                     </td>
                                  </tr>

                                  <tr className="unread">
                                    <td><i class="fa fa-user-circle " style={{ fontSize: "40px" }} aria-hidden="true"></i></td>
                                    <td>
                                      <h4 className="mb-1">Jatin Udasi</h4>

                                    </td>
                                    <td>
                                      <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                    </td>
                                    <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh",marginLeft:"25%",  marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px"}} defaultValue="" />
                                    <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh",marginLeft:"9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px"}} defaultValue="" />
                                     </td>
                                  </tr>

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
  )
}

export default Dashboards
