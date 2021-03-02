import React from 'react'
import img2 from "../corousel_photo/img5.png"
function Class_profile() {
    return (
        <div>
            
            <div class="container container1  mt-100 ">
     
     <div class="section" id="carousel">
     
         <div >
             <div class="col-md-10  col-lg-10 mr-auto ml-auto">

                
                 <div class=" card-raised card-carousel">
                     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                       
                       <div class="carousel-inner">
                         <div class="carousel-item active">
                           <img class="d-block w-100" src={img2}
                           alt="First slide"/>
                           <div class="carousel-caption d-none d-md-block">
                            
                           </div>
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
                        <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                      </div>
                      <div className="job-tittle">
                        <a href="#">
                          <h4>Digital Marketer</h4>
                        </a>
                        <ul>
                          <li>Creative Agency</li>
                          <li><i className="fas fa-map-marker-alt" />Pune</li>
                          <li>Rs.3000</li>
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
                      <p>It is a long established fact that a reader will beff distracted by vbthe creadable content of a page when looking at its layout. The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess normal distribution of letters, as opposed to using, Content here content here making it look like readable.</p>
                    </div>
                    <div className="post-details2  mb-50">
                      {/* Small Section Tittle */}
                      <div className="small-section-tittle">
                        <h4>Required Knowledge, Skills, and Abilities</h4>
                      </div>
                      <ul>
                        <li>System Software Development</li>
                        <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                        <li>Research and code , libraries, APIs and frameworks</li>
                        <li>Strong knowledge on software development life cycle</li>
                        <li>Strong problem solving and debugging skills</li>
                      </ul>
                    </div>
                    <div className="post-details2  mb-50">
                      {/* Small Section Tittle */}
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
                    </div>
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
                     
                      <li>Location : <span>Pune</span></li>
                      <li>Vacancy : <span>02</span></li>
                     
                      <li>Class fess :  <span>Rs.3000  6 Months</span></li>
                     
                    </ul>
                    <div className="apply-btn2">
                      <a href="#" className="btn">Apply Now</a>
                    </div>
                  </div>
                  <div className="post-details4  mb-50">
                    {/* Small Section Tittle */}
                    <div className="small-section-tittle">
                      <h4>Class Information</h4>
                    </div>
                    <span>Colorlib</span>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <ul>
                      <li>Name: <span>....... </span></li>
                     
                      <li>Email: <span>Xyz@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* job post company End */}
        </main>
        </div>
    )
}

export default Class_profile
