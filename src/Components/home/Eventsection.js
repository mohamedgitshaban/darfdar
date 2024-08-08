import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Eventsection() {

  const { t } = useTranslation();
  return (
    <>
  	<section class="ftco-section bg-light mr-200">
			<div class="container">
				<div class="row justify-content-start">
          <div class="col-md-4 heading-section ">
          	<span class="subheading subheading-with-line" data-aos="fade-down" ><small class="pr-2 ">Events</small></span>
            <h2 class="mb-4" data-aos="fade-down" data-aos-delay="100">Recent Events</h2>
          </div>
        
        </div>	
				<div class="row">
          <div class="col-md-4 "data-aos="fade-down">
            <div class="blog-entry">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../../Assets/events/marce.png")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">MAR 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">LE MARCHE EVENT</a></h3>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 "data-aos="fade-down"data-aos-delay="100">
            <div class="blog-entry" data-aos-delay="100">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../../Assets/events/thedesign.jpg")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">JUNE 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">THE DESIGN SHOW</a></h3>
	              </div>
              </div>
            </div>
          </div>
        
        </div>
			</div>
		</section>
    </>

  );
}

