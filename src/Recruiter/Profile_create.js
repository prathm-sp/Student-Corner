import React from 'react'
import "./Profile_create.css";
import $ from 'jquery';

function Profile_create() {


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

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-12 col-md-12 col-lg-12 col-xl-9 text-center p-0 mt-3 mb-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
              <h2 id="heading">Profile_create </h2>
              <p>Fill all form field to go to next step</p>
              <form id="msform">
                {/* progressbar */}
                <ul id="progressbar">
                  <li className="active" id="personal"><strong>Personal</strong></li>
                  <li id="personal"><strong>Class Information</strong></li>
                  <li id="payment"><strong>Image</strong></li>
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
                        <h2 className="steps">Step 1 - 4</h2>
                      </div>
                    </div> <label className="fieldlabels">First Name: *</label> <input type="text" name="fname" placeholder="First Name" /> <label className="fieldlabels">Last Name: *</label> <input type="text" name="lname" placeholder="Last Name" /> 
                  </div> <input type="button" name="next" className="next action-button" defaultValue="Next" />
                </fieldset>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Class Information:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 2 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Activities Name: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> Select Activities</option>
                      <option value="">Sport</option>
                      <option value="">Programing</option>
                      <option value="">Technical</option>
                      <option value="">Cenimatics</option>
                      <option value="">Hospital</option>
                      <option value="">Cooking</option>
                      <option value="">Perfermance</option>
                    </select  >
                    <label className="fieldlabels">Class Category: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> Select Category </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      
                    </select  >
                    <label className="fieldlabels"> Vacancy: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> No of Vacancy </option>
                      <option value="">1 </option>
                      <option value="">2 </option>
                      <option value="">3 </option>
                      <option value="">4 </option>
                      <option value="">5 </option>
                      <option value="">6 </option>
                      <option value="">7 </option>
                      <option value="">8 </option>
                      <option value="">9 </option>
                      <option value="">10 </option>
                      
                    </select  >
                    <label className="fieldlabels">Class Name: *</label> <input type="text" name="Class_name" placeholder="Class Name" /> <label className="fieldlabels">Address: *</label> <input type="text" name="lname" placeholder="Address" />
                    <label className="fieldlabels">Cities: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> Select Cities</option>
                      <option value="">Mumbai</option>
                      <option value="">Hyberabad</option>
                      <option value="">Pune</option>
                      <option value="">Chennai</option>
                      <option value="">Delhi</option>
                      <option value="">kolkata</option>
                      <option value="">Ahmednagar</option>
                    </select  >
                    <label className="fieldlabels">Class Type: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> Select Type</option>
                      <option value="">Full Time</option>
                      <option value="">Part Time</option>
                      <option value="">Remote</option>
                    </select  >
                    <label className="fieldlabels">Class Fess: *</label> <input type="no" name="no" placeholder="Class Fess" />
                    <label className="fieldlabels"> class Duration: *</label>
                    <select class="custom-select select mb-3">
                      <option selected> class Duration</option>
                      <option value="">1 Months</option>
                      <option value="">2 Months</option>
                      <option value="">3 Months</option>
                      <option value="">4 Months</option>
                      <option value="">5 Months</option>
                      <option value="">6 Months</option>
                      <option value="">7 Months</option>
                      <option value="">8 Months</option>
                      <option value="">9 Months</option>
                      <option value="">10 Months</option>
                      <option value="">11 Months</option>
                      <option value="">12 Months</option>
                    </select  >
                    
                    <div class="row">
                      <div class="col-sm-12 form-group">
                        <div class="row">
                          <div class="col-sm-12 form-group">

                            <label className="fieldlabels"> Class Information:*</label>
                            <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="2"></textarea>
                          </div>
                        </div>

                        <label className="fieldlabels"> Class Description:*</label>
                        <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="2"></textarea>
                      </div>
                    </div> <div class="row">
                      <div class="col-sm-12 form-group">

                        <label className="fieldlabels"> Required Knowledge, Skills, and Abilities: *</label>
                        <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="5"></textarea>
                      </div>
                    </div>
                   

                  </div> <input type="button" name="next" className="next action-button" defaultValue="Next" /> <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                </fieldset>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Image Upload:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 3 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Upload Your Photo:</label>
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
                        <h2 className="steps">Step 4 - 4</h2>
                      </div>
                    </div> <br /><br />
                    <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                    <div className="row justify-content-center">
                      <div className="col-3"> <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" /> </div>
                    </div> <br /><br />
                    <div className="row justify-content-center">
                      <div className="col-7 text-center">
                        <h5 className="purple-text text-center">You Have Successfully Profile</h5>
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

export default Profile_create
