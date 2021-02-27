import React from 'react'
import "./corousel.css";
import nn from "../corousel_photo/nn.jpg"


function corousel() {
    return (
       
      <div class="container container1  mt-5 ">
     
      <div class="section" id="carousel">
      
          <div >
              <div class="col-md-10  col-lg-10 mr-auto ml-auto">

                 
                  <div class=" card-raised card-carousel">
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                        
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src={nn}
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

    )
}

export default corousel
