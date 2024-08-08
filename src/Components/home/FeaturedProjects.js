import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Fancybox from "../Fancybox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturedProjects() {

  const { t } = useTranslation();
  useEffect(()=>{
	$(".allcategory").click(function(){
		$(".all").fadeIn("slow");
	});
	$(".Interiorcategory").click(function(){
		$(".Exteriorcategorydata").fadeOut("slow");
		$(".Landscapecategorydata").fadeOut("slow");
		$(".Interiorcategorydata").fadeIn("slow");
	});
	$(".Exteriorcategory").click(function(){
		$(".Exteriorcategorydata").fadeIn("slow");
		$(".Landscapecategorydata").fadeOut("slow");
		$(".Interiorcategorydata").fadeOut("slow");
	});
	$(".Landscapecategory").click(function(){
		$(".Exteriorcategorydata").fadeOut("slow");
		$(".Landscapecategorydata").fadeIn("slow");
		$(".Interiorcategorydata").fadeOut("slow");
	});
  },[])
  return (
    <>
     <section class="ftco-section ftco-no-pb">
	<div class="container">
		<div class="row justify-content-start mb-5 ">
	  <div class="col-md-4 heading-section ">
		  <span class="subheading subheading-with-line"><small class="pr-2 ">Projects</small></span>
		<h2 class="mb-4">Featured Projects</h2>
	  </div>
	  <div class="col-md-8 pl-md-5 heading-section ">
		  <div class="pl-md-4 border-line">
			  <p data-aos="zoom-out">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
			  <p class="category mt-5">
				<span class=" mr-2"><a className="active allcategory">All Work</a></span>
				<span class="mr-2"><a className="Interiorcategory ">Interior</a></span>
				<span class="mr-2"><a className="Exteriorcategory ">Exterior</a></span>
				<span class="mr-2"><a className="Landscapecategory ">Landscape</a></span>
			</p>
		  </div>
	  </div>
	</div>
	</div>
	<div class="container-wrap">
	<Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>		<div class="row no-gutters">
			<div class="col-md-6 col-lg-3 all Landscapecategorydata" data-aos="fade-down">
				<div class="project">
					<img src={require("../../Assets/background/0L5A1815.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Interior Design</span>
						<h3><a href="project.html">Office Interior Design</a></h3>
					</div>
					<a href={require("../../Assets/background/0L5A1815.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>

			<div class="col-md-6 col-lg-3 all Interiorcategorydata" data-aos="fade-down" data-aos-delay="100">
				<div class="project">
					<img src={require("../../Assets/background/0L5A1821.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Interior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/0L5A1821.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Exteriorcategorydata" data-aos="fade-down" data-aos-delay="200">
				<div class="project">
					<img src={require("../../Assets/background/anyweather.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Interior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/anyweather.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Landscapecategorydata"data-aos="fade-down" data-aos-delay="300">
				<div class="project">
					<img src={require("../../Assets/background/Edge-53.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Interior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/Edge-53.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Interiorcategorydata" data-aos="fade-down" >
				<div class="project">
					<img src={require("../../Assets/background/366232912_265389492913945_3174933927167270502_n.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Landscape Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/366232912_265389492913945_3174933927167270502_n.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Exteriorcategorydata" data-aos="fade-down" data-aos-delay="100">
				<div class="project">
					<img src={require("../../Assets/background/0L5A1832.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Exterior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/0L5A1832.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Landscapecategorydata" data-aos="fade-down"data-aos-delay="200">
				<div class="project">
					<img src={require("../../Assets/background/0L5A1826.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Exterior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/0L5A1826.jpg")} data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 all Exteriorcategorydata" data-aos="fade-down"data-aos-delay="300">
				<div class="project">
					<img src={require("../../Assets/background/0L5A1835.jpg")} class="img-fluid" alt="Colorlib Template"/>
					<div class="text">
						<span>Interior Design</span>
						<h3>Office Interior Design</h3>
					</div>
					<a href={require("../../Assets/background/0L5A1835.jpg")}  data-fancybox="gallery"class="icon image-popup d-flex justify-content-center align-items-center">
						<FontAwesomeIcon icon="fa-solid fa-expand" />
					</a>
				</div>
			</div>
		</div></Fancybox>
	</div>
</section>
    </>

  );
}

