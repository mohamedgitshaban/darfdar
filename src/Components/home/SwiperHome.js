
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useEffect } from "react"
import $ from 'jquery';
export default function SwiperHome (props) {
  useEffect(()=>{
    var windowHeight = $(window).height();
    $('.slider-wrapper').height(windowHeight);
    // $('.one-third').height(windowHeight);
})
      return<div>
         <Slider  nextButton={<svg   version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xmlSpace="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>} previousButton={
 <svg   version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
 viewBox="0 0 330 330" xmlSpace="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>
}    className="slider-wrapper ">
         

<div class="slider-item ">

<div class="container-flu">
<div class="row d-md-flex  slider-text  align-items-center " >
<div class="one-third order-md-last img " style={{backgroundImage:`url(${require("../../Assets/background/Edge-46.jpg")})`}}>
  
</div>
<div class="one-forth d-flex  align-items-center " data-scrollax=" properties: { translateY: '70%' }">
  <div class="text">
    <h1 class="mb-4">WHO WE ARE</h1>
    <p>Darfadar is an innovative brand in Egypt offering 
customizable and durable window and door systems, 
including casement, sliding, folding, and more</p>
    <br/>
  </div>
</div>
</div>
</div>
</div>


<div class="slider-item ">
<div class="container-flu">
<div class="row d-md-flex  slider-text  align-items-center " >
<div class="one-third order-md-last img " style={{backgroundImage:`url(${require("../../Assets/background/anyweather.jpg")})`}}>
  
</div>
<div class="one-forth d-flex  align-items-center " data-scrollax=" properties: { translateY: '70%' }">
  <div class="text">
    <h1 class="mb-4">WHO WE ARE</h1>
    <p>We cater to 
both homes and offices, providing competitive prices and 
a range of sizes. Darfadar’s laminated profile production 
line uses high-quality, weather-resistant color film to match 
interior design. </p>
    <br/>-
  </div>
</div>
</div>
</div>
</div>

<div class="slider-item ">

<div class="container-flu">
<div class="row d-md-flex  slider-text  align-items-center " >
<div class="one-third order-md-last img " style={{backgroundImage:`url(${require("../../Assets/background/anyweather1.jpg")})`}}>
  
</div>
<div class="one-forth d-flex  align-items-center " data-scrollax=" properties: { translateY: '70%' }">
  <div class="text">
    <h1 class="mb-4">WHO WE ARE</h1>
    <p>We offer a remarkable 10-year warranty and are certified 
environmentally friendly with a 100% heavy metal-free 
manufacturing process by EPD according to ISO:14025 
standards from IBU EPD in Germany.
</p>
    <br/>-
  </div>
</div>
</div>
</div>
</div>

      </Slider>
      </div>

  }
  
