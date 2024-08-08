import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Projectsnum from "./Projectsnum";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ServicesSection() {

  const { t } = useTranslation();
  return (
    <>
    <section class="ftco-services ">
	<div class="container services-2">

	<div class="row justify-content-start mt-5 py-5">
	  <div class="col-md-4 heading-section ">
		<h2 class="mb-4">Our Services</h2>
		<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
	  </div>
	  <div class="col-md-8 ">
		  <div class="row d-flex">
			  <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
				  <div class="media block-6 services services-2 d-block bg-light p-4 mb-4">
				  <div class="icon d-flex justify-content-center align-items-center">
				  <FontAwesomeIcon icon="fa-solid fa-layer-group" />
				  </div>
				  <div class="media-body p-2 mt-3">
					<h3 class="heading">Design</h3>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
				  </div>
				</div>
			  </div>
			  <div class="col-md-6 d-flex align-items-stretch"data-aos="fade-up" data-aos-delay="100">
				  <div class="media block-6 services services-2 d-block bg-light p-4 mb-4">
				  <div class="icon d-flex justify-content-center align-items-center">
				  <FontAwesomeIcon icon="fa-solid fa-layer-group" />
				  </div>
				  <div class="media-body p-2 mt-3">
					<h3 class="heading">Industrial Design</h3>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
				  </div>
				</div>
			  </div>
			  <div class="col-md-6 d-flex align-items-stretch"data-aos="fade-up">
				  <div class="media block-6 services services-2 d-block bg-light p-4 mb-4">
				  <div class="icon d-flex justify-content-center align-items-center">
				  <FontAwesomeIcon icon="fa-solid fa-layer-group" />
				  </div>
				  <div class="media-body p-2 mt-3">
					<h3 class="heading">Architecture Support</h3>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
				  </div>
				</div>
			  </div>
			  <div class="col-md-6 d-flex align-items-stretch"data-aos="fade-up" data-aos-delay="100">
				  <div class="media block-6 services services-2 d-block bg-light p-4 mb-4">
				  <div class="icon d-flex justify-content-center align-items-center">
				  <FontAwesomeIcon icon="fa-solid fa-layer-group" />
				  </div>
				  <div class="media-body p-2 mt-3">
					<h3 class="heading">Renovation</h3>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
				  </div>
				</div>
			  </div>
		  </div>
	  </div>
	</div>
		</div>
	<Projectsnum/>

		<div class="container mt-5 py-5">
			<div class="row justify-content-start ">
	  <div class="col-md-4 heading-section ">
		<h2 class="mb-4">Our Work Flow</h2>
	  </div>
	
	</div>
			<div class="row">
	  <div class="col-md-4 d-flex align-self-stretch " data-aos="fade-up" >
		<div class="media block-6 services d-block">
		  <div class="icon d-flex justify-content-center align-items-center">
		  <FontAwesomeIcon icon="fa-solid fa-pen-nib" />
		  </div>
		  <div class="media-body p-2 mt-3">
			<h3 class="heading">Perfectly Design</h3>
			<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
		  </div>
		</div>      
	  </div>
	  <div class="col-md-4 d-flex align-self-stretch " data-aos="fade-up" data-aos-delay="100">
		<div class="media block-6 services d-block">
		  <div class="icon d-flex justify-content-center align-items-center">
		  <FontAwesomeIcon icon="fa-regular fa-clock" />
		  </div>
		  <div class="media-body p-2 mt-3">
			<h3 class="heading">Carefully Planned</h3>
			<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
		  </div>
		</div>    
	  </div>
	  <div class="col-md-4 d-flex align-self-stretch " data-aos="fade-up" data-aos-delay="200">
		<div class="media block-6 services d-block">
		  <div class="icon d-flex justify-content-center align-items-center">
		  <FontAwesomeIcon icon="fa-solid fa-layer-group" />
		  </div>
		  <div class="media-body p-2 mt-3">
			<h3 class="heading">Smartly Execute</h3>
			<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
		  </div>
		</div>      
	  </div>
	</div></div>
	</section>


    </>

  );
}

