import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';

export default function Projectsnum() {

  const { t } = useTranslation();
  return (
    <>
    <section class="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage:`url(${require("../../Assets/background/Edge-53.jpg")})`}} >
	<div class="container">
		<div class="row d-md-flex align-items-center justify-content-center">
			<div class="col-lg-10">
				<div class="row d-md-flex align-items-center">
			  <div class="col-md d-flex justify-content-center counter-wrap " data-aos="fade-up">
				<div class="block-18">
				  <div class="text">
					<strong  data-number="18"><CountUp class="number" end={40}   duration={2.75} delay={5}/></strong>
					<span>Years of Experienced</span>
				  </div>
				</div>
			  </div>
			  <div class="col-md d-flex justify-content-center counter-wrap "data-aos="fade-up" data-aos-delay="100">
				<div class="block-18">
				  <div class="text">
					<strong  data-number="351"><CountUp class="number" end={1510}   duration={2.75} delay={5}/></strong>
					<span>Happy Clients</span>
				  </div>
				</div>
			  </div>
			  <div class="col-md d-flex justify-content-center counter-wrap "data-aos="fade-up" data-aos-delay="200">
				<div class="block-18">
				  <div class="text">
					<strong  data-number="564"><CountUp class="number" end={1550}   duration={2.75}delay={5}/></strong>
					<span>Finished Projects</span>
				  </div>
				</div>
			  </div>
			  <div class="col-md d-flex justify-content-center counter-wrap "data-aos="fade-up"data-aos-delay="300">
				<div class="block-18">
				  <div class="text">
					<strong  data-number="300"><CountUp class="number" end={7}   duration={2.75} delay={5}/></strong>
					<span>Working Days</span>
				  </div>
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

