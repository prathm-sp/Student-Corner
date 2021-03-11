import React from 'react'
import { Link } from "react-router-dom";
import Corousel from "./corousel"
import Programing from "../icon/programing.png";
import Hospital from "../icon/hospital.png";
import Technical from "../icon/technical.png"
import Sport from "../icon/sport.png"
import Cenimatics from "../icon/cenimatics .png"
import  Cooking from "../icon/cooking.png"
import  Perfermance from "../icon/perfermance.png"
import pp from "../corousel_photo/pp.jpg"
import "./Home_page.css"
import $ from 'jquery';

import Mumbai from "../City_icon/mumbai.png"
import Pune from "../City_icon/Pune.png"
import Kolkata from "../City_icon/kolkata.png"
import Hyderabad from "../City_icon/hyderabad.png"
import Delhi from "../City_icon/Delhi.png"
import Chennai from "../City_icon/chennai.png"
import Ahmednagar  from "../City_icon/Ahmednagar .png"

function Home() {


  $(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});



  return (
    <div>
        <div>
       
 <Corousel/>
 

 <div class="container mt-5   ">
	<div class="row">
  <div className="col-lg-12 mt-5">
            <div className="section-tittle text-center">
              
              <h2>Cities </h2>
            </div>
          </div>
		<div class=" city MultiCarousel col-md-12  wr " data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="item ">
                    <div class="pad15">
                    <img alt=".." src={Mumbai}/>
                    <p>Mumbai</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Hyderabad}/>
                       <p>Hyberabad </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15 ">
                    <img  class="mt-4 "alt=".." src={Pune}/>
                       <p className="pune" style={{marginTop:"10px"}}>Pune</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img class="mt-2 " alt=".." src={Chennai}/>
                    <p className="Chennai"  style={{marginTop:"10px"}}>Chennai </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Delhi}/>
                      <p>Delhi</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Kolkata}/>
                       <p className="mt-3"> kolkata</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Mumbai}/>
                    <p>Mumbai</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Hyderabad}/>
                       <p>Hyberabad </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15 ">
                    <img  class="mt-4 "alt=".." src={Pune}/>
                       <p className="pune" style={{marginTop:"10px"}}>Pune</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img class="mt-2 " alt=".." src={Chennai}/>
                    <p className="Chennai"  style={{marginTop:"10px"}}>Chennai </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Delhi}/>
                      <p>Delhi</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Kolkata}/>
                       <p className="mt-3"> kolkata</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src={Ahmednagar}/>
                       <p className="mt-1"> Ahmednagar</p>
                    </div>
                </div>
                
                
            </div>
            <button class="fa fa-chevron-left btn1 leftLst"></button>
            <button class="btn1  fa fa-chevron-right rightLst"></button>
           
        </div>
	</div>

</div>
 
  <main>
   
    {/* Our Services Start */}
    <div className="our-services ">
      <div className="container">
        {/* Section Tittle */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              
              <h2>Activities </h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-contnet-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
              <img src={Programing}/>
              </div>
              <Link to="/Recruiter_class_list">
              <div className="services-cap">
                <h5><a href="job_listing.html">Programing</a></h5>
                <span>(653)</span>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
              <img src={Hospital}/>
              </div>
              <div className="services-cap mt-1">
                <h5><a href="job_listing.html">Hospital</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
              <img src={Technical}/>
              </div>
              <div className="services-cap mt-1">
                <h5><a href="job_listing.html">Technical</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
              <img src={Sport}/>
              </div>
              <div className="services-cap mt-1">
                <h5><a href="job_listing.html">Sport</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion mt-2">
              <img src={Cenimatics}/>
              </div>
              <div className="services-cap mt-4">
                <h5><a href="job_listing.html">Cenimatics</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
              <img src={Cooking}/>
              </div>
              <div className="services-cap ">
                <h5><a href="job_listing.html">Cooking</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
            <div className="single-services text-center mb-30">
              <div className="services-ion ">
              <img src={Perfermance}/>
              </div>
              <div className="services-cap we  ">
                <h5><a href="job_listing.html">Perfermance</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-content" />
              </div>
              <div className="services-cap">
                <h5><a href="job_listing.html">Content Writer</a></h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container container1 aa  ">
     
      <div class="section" id="carousel">
      
          <div >
              <div class="col-md-10  col-lg-10 mr-auto ml-auto">

                 
                  <div class=" card-raised card-carousel">
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                        
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src={pp}
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
    
   
  
  </main>
  
</div>

    </div>
  )
}

export default Home
