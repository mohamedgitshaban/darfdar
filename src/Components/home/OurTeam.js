import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function OurTeam() {

  const { t } = useTranslation();
  return (
    <section class="ftco-section mr-200">
    <div class="container">
        <div class="row justify-content-center ">
  <div class="col-md-7 heading-section ">
      <span class="subheading subheading-with-line"data-aos="fade-right"><small class="pr-2 ">Expert Team</small></span>
    <h2 class="mb-4"data-aos="fade-right" data-aos-delay="100">Our  Team</h2>
  </div>
</div>	
        <div class="row">
            <div class="col-md-6 col-lg-3 "data-aos="fade-up">
                <div class="staff">
                    <div class="img" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}></div>
                    <div class="text px-4 pt-4">
                        <h3>John Wilson</h3>
                        <span class="position mb-2">Co-Founder / CEO</span>
                        <div class="faded">
                            <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            
          </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 "data-aos="fade-up"data-aos-delay="200">
                <div class="staff">
                    <div class="img" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}></div>
                    <div class="text px-4 pt-4">
                        <h3>David Smith</h3>
                        <span class="position mb-2">Achitect</span>
                        <div class="faded">
                            <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            
          </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 "data-aos="fade-up"data-aos-delay="400">
                <div class="staff">
                    <div class="img" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}></div>
                    <div class="text px-4 pt-4">
                        <h3>David Smith</h3>
                        <span class="position mb-2">Achitect</span>
                        <div class="faded">
                            <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            
          </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 "data-aos="fade-up"data-aos-delay="600">
                <div class="staff">
                    <div class="img" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}></div>
                    <div class="text px-4 pt-4">
                        <h3>David Smith</h3>
                        <span class="position mb-2">Achitect</span>
                        <div class="faded">
                            <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                           
          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

