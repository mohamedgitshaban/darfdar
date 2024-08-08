
import $ from 'jquery';
import { useEffect } from "react";
function Events() {

    return (
<>

<section class="hero-wrap hero-wrap-2" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Our Events</h1>
          </div>
        </div>
      </div>
    </section>
		
		<section class="ftco-section mr-200">
			<div class="container">
				<div class="row">
          <div class="col-lg-12">
          	<div class="row">
			  <div class="col-md-4 "data-aos="fade-down">
            <div class="blog-entry">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../Assets/events/marce.png")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">MAR 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">LE MARCHE EVENT</a></h3>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 "data-aos="fade-down"data-aos-delay="100">
            <div class="blog-entry" data-aos-delay="100">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../Assets/events/thedesign.jpg")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">JUNE 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">THE DESIGN SHOW</a></h3>
	              </div>
              </div>
            </div>
          </div>
		         
          	</div>
          	<div class="row no-gutters my-5">
		          <div class="col text-center">
		            <div class="block-27">
		              <ul>
		                <li><a href="#">&lt;</a></li>
		                <li class="active"><span>1</span></li>
		                <li><a href="#">2</a></li>
		                <li><a href="#">3</a></li>
		                <li><a href="#">4</a></li>
		                <li><a href="#">5</a></li>
		                <li><a href="#">&gt;</a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
          </div>

          {/* <div class="col-lg-4 sidebar ">
            <div class="sidebar-box ">
            	<h3>Category</h3>
              <ul class="categories">
                <li><a href="#">Interior Design <span>(6)</span></a></li>
                <li><a href="#">Exterior Design <span>(8)</span></a></li>
                <li><a href="#">Industrial Design <span>(2)</span></a></li>
                <li><a href="#">Landscape Design <span>(2)</span></a></li>
              </ul>
            </div>

            <div class="sidebar-box ">
              <h3>Popular Articles</h3>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> Oct. 04, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> Oct. 04, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> Oct. 04, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-box ">
              <h3>Tag Cloud</h3>
              <ul class="tagcloud m-0 p-0">
                <a href="#" class="tag-cloud-link">House</a>
                <a href="#" class="tag-cloud-link">Office</a>
                <a href="#" class="tag-cloud-link">Land</a>
                <a href="#" class="tag-cloud-link">Building</a>
                <a href="#" class="tag-cloud-link">Table</a>
                <a href="#" class="tag-cloud-link">Intrior</a>
                <a href="#" class="tag-cloud-link">Exterior</a>
              </ul>
            </div>

            <div class="sidebar-box ">
            	<h3>Archives</h3>
              <ul class="categories">
              	<li><a href="#">December 2018 <span>(30)</span></a></li>
              	<li><a href="#">Novemmber 2018 <span>(20)</span></a></li>
                <li><a href="#">September 2018 <span>(6)</span></a></li>
                <li><a href="#">August 2018 <span>(8)</span></a></li>
              </ul>
            </div>


            <div class="sidebar-box ">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div> */}
        </div>
			</div>
		</section>
    
</>
    );
  }
  
  export default Events;
  