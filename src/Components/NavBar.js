
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Languagecheack from './Languagecheack';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

function NavBar() {
    const { t } = useTranslation();
	useEffect(()=>{
		$(".nav-link").click(function(){
			$(".nav-link").removeClass("active");
			$(this).addClass("active");
			
		  });
		  $(".nav-link").on('click',function(){
			$(".navbar-toggler").addClass("collapsed");
			$(".navbar-collapse").removeClass("show");
			window.scrollTo({
				top:0,
				behavior: 'smooth'
			});});

			$(".list-unstyled a").on('click',function(){
				window.scrollTo({
					top:0,
					behavior: 'smooth'
				});});
	},[])

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to="/"><img src={require("../Assets/logo/1-02.png")}/></Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		  <FontAwesomeIcon icon="fa-solid fa-bars" /> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item "><Link to="/" className="nav-link active">Home</Link></li>
	        	<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
	        	<li className="nav-item"><Link to="/Products" className="nav-link">Projects</Link></li>
	        	<li className="nav-item"><Link to="/Services" className="nav-link">Services</Link></li>
	        	<li className="nav-item"><Link to="/Event" className="nav-link">Events</Link></li>
	        	<li className="nav-item"><Link to="/Appointment" className="nav-link">Appointment</Link></li>
	          <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
			  
	        </ul>
			
	      </div>
		  <div className='patternback'>
			<div className='patternwhite'></div>
		  <div className='pattern img'></div>
		  </div>
	    </div>
		
	  </nav>
    </>
  );
}

export default NavBar;