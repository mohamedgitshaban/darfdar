import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fancybox from "./Fancybox";

export default function DoneProjects(params) {
    

    return<>
   <section class="ftco-section bg-light mr-100">
    	<div class="container">
    		<div class="row justify-content-start mb-5 pb-2">
          <div class="col-md-4 heading-section ">
          	<span class="subheading subheading-with-line" data-aos="fade-right" ><small class="pr-2 bg-light">Projects</small></span>
            <h2 class="mb-4" data-aos="fade-right" data-aos-delay="100">Done Projects</h2>
          </div>
          <div class="col-md-8 pl-md-5 heading-section ">
          	<div class="pl-md-4 border-line" data-aos="fade-right" data-aos-delay="200">
	          	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          	</div>
          </div>
        </div>
    	</div>
    	<div class="container">
		<Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>	
    		<div class="row">
    			<div class="col-md-6 col-lg-3 ">
    				<div class="project">
	    				<img src={require("../Assets/background/Edge-137.jpg")} class="img-fluid" alt="Colorlib Template"/>
	    				<div class="text">
	    					<span>Interior Design</span>
	    					<h3><a href="project.html">Office Interior Design</a></h3>
	    				</div>
	    				<a href={require("../Assets/background/Edge-137.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
	    					<FontAwesomeIcon icon="fa-solid fa-expand" />
	    				</a>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-3 ">
    				<div class="project">
	    				<img src={require("../Assets/background/Edge-137.jpg")} class="img-fluid" alt="Colorlib Template"/>
	    				<div class="text">
	    					<span>Interior Design</span>
	    					<h3>Office Interior Design</h3>
	    				</div>
	    				<a href={require("../Assets/background/Edge-137.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
	    					<FontAwesomeIcon icon="fa-solid fa-expand" />
	    				</a>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-3 ">
    				<div class="project">
	    				<img src={require("../Assets/background/Edge-137.jpg")} class="img-fluid" alt="Colorlib Template"/>
	    				<div class="text">
	    					<span>Interior Design</span>
	    					<h3>Office Interior Design</h3>
	    				</div>
	    				<a href={require("../Assets/background/Edge-137.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
	    					<FontAwesomeIcon icon="fa-solid fa-expand" />
	    				</a>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-3 ">
    				<div class="project">
	    				<img src={require("../Assets/background/Edge-137.jpg")} class="img-fluid" alt="Colorlib Template"/>
	    				<div class="text">
	    					<span>Interior Design</span>
	    					<h3>Office Interior Design</h3>
	    				</div>
	    				<a href={require("../Assets/background/Edge-137.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
	    					<FontAwesomeIcon icon="fa-solid fa-expand" />
	    				</a>
    				</div>
    			</div>
    	</div></Fancybox>
        </div>
    </section>
    </>
}