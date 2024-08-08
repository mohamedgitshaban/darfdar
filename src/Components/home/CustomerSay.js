import { useTranslation } from "react-i18next";
import { Autoplay ,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from "react";
export default function CustomerSay() {
	const [cc,Setcc]=useState(1);
	useEffect(()=>{
		if(window.innerWidth>900){
		Setcc(3);
	  }
	  else if(window.innerWidth>700){
		Setcc(3);
	  }
	  else if(window.innerWidth>600){
		Setcc(2);
	  }
	  else{
		Setcc(1);
	  }
	  },[])
	  useEffect(()=>{
	   
		window.addEventListener('resize', handleWindowResize);
	  
		},[window.innerWidth])
		const handleWindowResize=()=>{
		  if(window.innerWidth>1100){
			Setcc(3);
		  }
		  else if(window.innerWidth>900){
			Setcc(3);
		  }
		  else if(window.innerWidth>600){
			Setcc(2);
		  }
		  else{
			Setcc(1);
		  }
		}
  const { t } = useTranslation();
  return (
    <>
     <section class="ftco-section testimony-section mr-200 ">
  <div class="container">
	<div class="row justify-content-center ">
	  <div class="col-md-7 heading-section ">
		  <span class="subheading subheading-with-line"><small class="pr-2 bg-light">Testimony</small></span>
		<h2 class="mb-4">Our satisfied customer says</h2>
	  </div>
	</div>
	<div class="row ">
	  <div class="col-md-12">
	  <Swiper 
  slidesPerView={cc}
  centeredSlides={true}
  pagination={{
    clickable: true,
    
  }}
  autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    
  loop
  navigation={false}
  modules={[ Autoplay,Navigation ]}
  className="mySwiper-1"
>


<SwiperSlide> <div class="item">
			<div class="testimony-wrap p-4 pb-5">
			  <div class="user-img mb-5" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}>
				
			  </div>
			  <div class="text">
				<p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="pl-5">
					<p class="name">Garreth Smith</p>
					<span class="position">CEO Founder of Commercial Building</span>
				</div>
			  </div>
			</div>
		  </div></SwiperSlide>
		  <SwiperSlide> 		  <div class="item">
			<div class="testimony-wrap p-4 pb-5">
			  <div class="user-img mb-5" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}>
				
			  </div>
			  <div class="text">
				<p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="pl-5">
					<p class="name">Garreth Smith</p>
					<span class="position">CEO Founder of Interior Design</span>
				  </div>
			  </div>
			</div>
		  </div></SwiperSlide>
		  <SwiperSlide> 	 <div class="item">
			<div class="testimony-wrap p-4 pb-5">
			  <div class="user-img mb-5" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}>
				
			  </div>
			  <div class="text">
				<p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="pl-5">
					<p class="name">Garreth Smith</p>
					<span class="position">System Analyst</span>
				  </div>
			  </div>
			</div>
		  </div></SwiperSlide>
		  <SwiperSlide> 		 <div class="item">
			<div class="testimony-wrap p-4 pb-5">
			  <div class="user-img mb-5" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}>
				
			  </div>
			  <div class="text">
				<p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="pl-5">
					<p class="name">Garreth Smith</p>
					<span class="position">Exterior Designer</span>
				  </div>
			  </div>
			</div>
		  </div></SwiperSlide>
		  <SwiperSlide> 		 <div class="item">
			<div class="testimony-wrap p-4 pb-5">
			  <div class="user-img mb-5" style={{backgroundImage:`url(${require("../../Assets/background/pexels-dinielle-de-veyra-4195342.jpg")})`}}>
				
			  </div>
			  <div class="text">
				<p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="pl-5">
					<p class="name">Garreth Smith</p>
					<span class="position">Landscape Designer</span>
				  </div>
			  </div>
			</div>
		  </div></SwiperSlide>
</Swiper>
	  </div>
	</div>
  </div>
</section>
    </>

  );
}

