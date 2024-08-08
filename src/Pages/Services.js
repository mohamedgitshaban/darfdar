
import DoneProjects from "../Components/DoneProjects";
import ServicesSection from "../Components/home/ServicesSection";

export default function Services(params) {
    return<>
       <section class="hero-wrap hero-wrap-2" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Services</h1>
          </div>
        </div>
      </div>
    </section>
		
	<ServicesSection/>
		{/* <DoneProjects/> */}
    

    </>
}