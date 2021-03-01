import React from 'react'
import "./Create_job_profile.css";
import $ from 'jquery';

function Create_job_profile() {



    $(document).ready(function () {

        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function () {

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            setProgressBar(++current);
        });

        $(".previous").click(function () {

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            setProgressBar(--current);
        });

        function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
                .css("width", percent + "%")
        }

        $(".submit").click(function () {
            return false;
        })

    });
    return (
        <div>

            <div className="container-fluid mt-100">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-12 col-md-12 col-lg-12 col-xl-9 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h2 id="heading">Profile_create </h2>
                            <p>Fill all form field to go to next step</p>
                            <form id="msform">
                                {/* progressbar */}
                                <ul id="progressbar" className="progressbar">
                                    <li className="active"  id="personal"><strong>Personal Information </strong></li>
                                    <li id="payment"><strong>Upload Resume</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                </ul>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100} />
                                </div> <br /> {/* fieldsets */}
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



        </div>
    )
}

export default Create_job_profile
