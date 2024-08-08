
function Contact () {
    return ( 
   <>
       <section class="hero-wrap hero-wrap-2" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Contact Us</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-section contact-section bg-light mr-50">
      <div class="container">
        <div class="row d-flex  contact-info">
          <div class="col-md-12 mb-4" >
            <h2 class="h4">Contact Information</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3" data-aos="fade-down">
            <p><span>Address:</span> 95 Abu Bakr Al Seddek ST., Safir Square, Heliopolis.</p>
          </div>
          <div class="col-md-3" data-aos="fade-down" data-aos-delay="200">
            <p><span>Phone:</span> <a href="tel://+201090029220">+201090029220</a></p>
          </div>
          <div class="col-md-3" data-aos="fade-down" data-aos-delay="400">
            <p><span>Email:</span> <a href="mailto:info@staronegypt.com.eg">marketing@darfadar.com</a></p>
          </div>
         
        </div>
      </div>
    </section>
		<section class="ftco-section ftco-no-pt ftco-no-pb contact-section ">
			<div class="container-wrap">
				<div class="row d-flex align-items-stretch no-gutters">
					<div class="col-md-6 p-5 order-md-last">
						<form action="#">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject"/>
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
              </div>
            </form>
					</div>
					<div class="col-md-6 d-flex align-items-stretch">
                    <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.924376911253!2d31.34239922567082!3d30.09635207489755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815e440c05a61%3A0xd0091722519af836!2sStaron%20Egypt!5e0!3m2!1sar!2seg!4v1699351179055!5m2!1sar!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</section>
   </> );
}

export default Contact ;