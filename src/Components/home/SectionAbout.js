import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";
function SecAbout() {

  const { t } = useTranslation();
  return (
    <>
     	<section class="ftco-section bg-light ">
		<div class="container">
			<div class="row no-gutters">
				<div data-aos="zoom-in" class="col-md-5 p-md-5 img img-2" style={{backgroundImage:`url(${require("../../Assets/background/366232912_265389492913945_3174933927167270502_n.jpg")})`}}>
				</div>
				<div class="col-md-7 wrap-about pb-md-5 ">
		  <div class="heading-section mb-5 pl-md-5">
			  <div class=" ml-md-5">
				  <span class="subheading subheading-with-line"><h2 data-aos="zoom-in" class="mb-4">Why us </h2></span>
			</div>
		  </div>
		  <div class="pl-md-5 ml-md-5 mb-5" data-aos="fade-down">
						<p>Windows are a great option if you’re looking for new double or triple 
glazing to help insulate your home.</p>
					</div>
					
<div class="heading-section mb-5 pl-md-5">
			  <div class="ml-md-5">
				  <span class=" subheading-with-line"><h2 data-aos="zoom-in" class="mb-4">Here are some of the key benefits: </h2></span>
			</div>
		  </div>
		  <div class="pl-md-5 ml-md-5 mb-5" data-aos="fade-down"><p>
<br/>- Very easy to maintain and clean.
<br/>- Naturally warm material and the multi-chambered frames of UPVC are great for insulation.
<br/>- Lightweight material, which makes UPVC double or triple glazed windows quick and easy to install.
<br/>- Can last up to 20 years in great condition, meaning your investment will be one that lasts. 
<br/>- They will also not lose their colour or fade at all during their lifespan.
<br/>- There are also a wide variety of colour choices.
<br/>- We guarantee all our UPVC windows for 10 years – they won’t rot, they won’t peel, they won’t warp.
<br/>- It does not rot, rust, blister, or flake, and is not affected by salt corrosion</p>
						<p><a href="#" class="btn-custom">Learn More <span class="ion-ios-arrow-forward"></span></a></p></div>
				</div>
			</div>
		</div>
	</section>

    </>

  );
}

export default SecAbout;