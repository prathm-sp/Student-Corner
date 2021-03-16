import React from 'react'
import "./Job_Dashboards.css"
function Job_Dashboards() {
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
                                                <span className="text-c-blue f-w-600">All User</span>
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
                                                <span className="text-c-pink f-w-600">Reject User</span>
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
                                                <span className=" text-c-green f-w-600">Accept User</span>
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
                                                <span className="text-c-yellow f-w-600">Process User </span>
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
                                                                            <h4 className="mb-1">Piyush Gambhir</h4>

                                                                        </td>
                                                                        <td>
                                                                            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                                                        </td>
                                                                        <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh", marginLeft: "25%", marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px" }} defaultValue="" />
                                                                            <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh", marginLeft: "9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px" }} defaultValue="" />
                                                                              <button type="button" class="btn btn-info btn-lg re ml-100" data-toggle="modal" data-target="#myModal" style={{ width: "20vh", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "blue", borderRadius: "12px" }}>View Resume</button>
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
                                                                        <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh", marginLeft: "25%", marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px" }} defaultValue="" />
                                                                            <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh", marginLeft: "9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px" }} defaultValue="" />
                                                                            <button type="button" class="btn btn-info btn-lg re ml-100" data-toggle="modal" data-target="#myModal" style={{ width: "20vh", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "blue", borderRadius: "12px" }}>View Resume</button>
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
                                                                        <td> <input type="submit" value="Accpet" className="btn re btn-primary " style={{ width: "20vh", height: "6vh", marginLeft: "25%", marginTop: "0px", fontSize: "15px", backgroundColor: "#8eb553", borderRadius: "12px" }} defaultValue="" />
                                                                            <input type="submit" value="Reject" className="btn re btn-primary " style={{ width: "20vh", marginLeft: "9%", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "#da2461", borderRadius: "12px" }} defaultValue="" />
                                                                            <button type="button" class="btn btn-info btn-lg re  ml-100" data-toggle="modal" data-target="#myModal" style={{ width: "20vh", height: "6vh", marginTop: "0px", fontSize: "15px", backgroundColor: "blue", borderRadius: "12px" }}>View Resume</button>
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


            <div id="myModal" class="modal fade " role="dialog">
                <div class="modal-dialog modal-lg">


                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          
                        </div>
                        <div class="modal-body">

                            <embed src="https://capd.mit.edu/sites/default/files/jobs/images/CAPDResume_Guide1.png"
                                frameborder="0" width="100%" height="auto"/>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job_Dashboards
