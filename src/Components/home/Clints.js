import { useTranslation } from "react-i18next";
import { Autoplay ,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
export default function Clints() {

  const { t } = useTranslation();

  const [cc,Setcc]=useState(4);
useEffect(()=>{
  if(window.innerWidth>900){
  Setcc(4);
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
      Setcc(5);
    }
    else if(window.innerWidth>900){
      Setcc(4);
    }
    else if(window.innerWidth>600){
      Setcc(3);
    }
    else{
      Setcc(1);
    }
  }
  return (
    <>
 	<section class="ftco-section ftco-client mr-200">
			<div class="container">
				<div class="row justify-content-start ">
          <div class="col-md-4 heading-section ">
          	<span class="subheading subheading-with-line"><small class="pr-2 ">Clients</small></span>
            <h2 class="mb-4">Our CLients</h2>
          </div>
          <div class="col-md-8 pl-md-5 heading-section ">
          	<div class="pl-md-4 border-line">
	          	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          	</div>
          </div>
        </div>
        <div class="row clint">
          <div class="col-md-12 ">
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


<SwiperSlide><img src={require("../../Assets/brand/inoxfera.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/mkdmmk.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/pomdor.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/serdanelli.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/faraana.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/shg.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/poggenpohl.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/bosch.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/fagor.png")}/></SwiperSlide>      
<SwiperSlide><img src={require("../../Assets/brand/giellesse.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/kohler.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/AKSProfil.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Crown.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Lotte.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Radianz.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/staron.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/tarkett.png")} className='img'/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/cristal-bronze.png")} /></SwiperSlide>

</Swiper>
          </div>
        </div>
			</div>
		</section>
    </>

  );
}

