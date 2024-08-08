
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
export default function Silder (props) {
   
      return<div>
         <Slider className="slider-wrapper">
        {props.content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            
          >
            <div class="slider-item ">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row d-md-flex  slider-text  align-items-center justify-content-end" data-scrollax-parent="true">
          	<div class="one-third order-md-last img " style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}>
          		<h3 class="vr">Architecture Firm</h3>
          	</div>
	          <div class="one-forth d-flex  align-items-center " data-scrollax=" properties: { translateY: '70%' }">
	          	<div class="text">
		            <h1 class="mb-4">We Love <br/>Modern Designs</h1>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		            <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">View our works</a></p>
	            </div>
	          </div>
        	</div>
        </div>
      </div>
          </div>
        ))}
      </Slider>
      </div>

  }
  
