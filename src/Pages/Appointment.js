import { useTranslation } from "react-i18next";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Appointment() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();

  }, [])
return ( <>

    <div class="container-wrap mt-5">
				<div class="row d-flex align-items-stretch no-gutters">
        
					<div class="col-md-6 justify-content-center p-5 ">
          <h2 class="h4 mr-5">Make An Appointment</h2>
						<form action="#">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject"/>
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
              </div>
            </form>
					</div>
					<div data-aos="zoom-in" class="col-md-5 p-md-5 img img-2" style={{backgroundImage:`url(${require("../Assets/background/0L5A1820.jpg")})`}}>
				</div>
				</div>
			</div>
      <section class="ftco-section contact-section bg-light mr-100">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4" >
            <h2 class="h4">Contact Information</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3" data-aos="fade-down">
            <p><span>Address:</span> 95 Abu Bakr Al Seddek ST., Safir Square, Heliopolis.</p>
          </div>
          <div class="col-md-3" data-aos="fade-down" data-aos-delay="200">
            <p><span>Phone:</span> <a href="tel://+201090029220">+201090029220</a></p>
          </div>
          <div class="col-md-3" data-aos="fade-down" data-aos-delay="400">
            <p><span>Email:</span> <a href="mailto:info@staronegypt.com.eg">info@staronegypt.com.eg</a></p>
          </div>
          <div class="col-md-3" data-aos="fade-down" data-aos-delay="600">
            <p><span>Website</span> <a href="#">yoursite.com</a></p>
          </div>
        </div>
      </div>
    </section>
    </> );
}

export default Appointment;