import React from 'react'
import "./user_Dashboards.css"
function Dashboards() {
  return (
    <div>
      <div className="pcoded-content">
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
                      <div className="card-header">


                      </div>
                      <div className="card-block p-b-10">
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr >
                                <th >Class name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="single-job-items ">
                                    <div className="job-items">
                                      <div className="company-img">
                                        <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <a href="#">
                                          <h4>Digital Marketer</h4>
                                        </a>
                                        <ul>
                                          <li>Creative Agency</li>
                                          <li><i className="fas fa-map-marker-alt ml-10" />Athens, Greece</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <input type="submit" value="Accpet" className="btn re btn-primary btn-block" style={{ width: "30vh", height: "7vh", marginTop: "30px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px"}} defaultValue="" />
                                  </div>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="single-job-items ">
                                    <div className="job-items">
                                      <div className="company-img">
                                        <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <a href="#">
                                          <h4>Digital Marketer</h4>
                                        </a>
                                        <ul>
                                          <li>Creative Agency</li>
                                          <li><i className="fas fa-map-marker-alt ml-10"  />Athens, Greece</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <input type="submit" value="Reject" className="btn re btn-primary btn-block" style={{ width: "30vh", height: "7vh",  fontSize: "15px", marginTop: "30px", backgroundColor: "#ea5c7e", borderRadius: "12px" }} defaultValue="" />
                                  </div>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="single-job-items ">
                                    <div className="job-items">
                                      <div className="company-img">
                                        <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                      </div>
                                      <div className="job-tittle job-tittle2">
                                        <a href="#">
                                          <h4>Digital Marketer</h4>
                                        </a>
                                        <ul>
                                          <li>Creative Agency</li>
                                          <li><i className="fas fa-map-marker-alt ml-10" />Athens, Greece</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <input type="submit" value="Process" className=" btn re btn-primary btn-block" style={{ width: "30vh", height: "7vh", fontSize: "15px", marginTop: "30px", backgroundColor: "rgb(246 181 76)", borderRadius: "12px" }} defaultValue="" />
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
            <div id="styleSelector">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboards
