import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer () {
    const { t } = useTranslation();

    return ( <>
      <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md" data-aos="fade-down-right">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Darfadar</h2>
              <p>Darfadar is an innovative brand in Egypt offering 
customizable and durable window and door systems, 
including casement, sliding, folding, and more.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li class=""><a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                <li class=""><a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
                <li class=""><a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md" data-aos="fade-up-right">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><Link to="/"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Home</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />About</Link></li>
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Services</Link></li>
                <li><Link to="/Products"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Projects</Link></li>
                <li><Link to="/Contact"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Contact</Link></li>

                <li><a href = {require("../Assets/pdf/darfadarcatalogue.pdf")} target = "_blank"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Catalogue</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md" data-aos="fade-up-left">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
              <ul class="list-unstyled">
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Architectural Design</Link></li>
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Interior Design</Link></li>
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Exterior Design</Link></li>
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Lighting Design</Link></li>
                <li><Link to="/Services"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />AutoCAD Service</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-md" data-aos="fade-up-left">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">group</h2>
              <ul class="list-unstyled">
                <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />XYZ group</a></li>
                 </ul>
            </div>
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Companies</h2>
              <ul class="list-unstyled">
                <li><a href="https://staronegypt.com.eg/"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Staron Egypt</a></li>
                <li><a href="https://kitchen-boutique.net/"><FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mr-2" />Kitchen Boutiqe</a></li>
              </ul>
            </div>
          </div>
        
        </div>
        
      </div>
    </footer>
            
    </>
     );
}

export default Footer ;