
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import FullProject from '../Components/FullProject';
export default function Products(params) {
    
    const { t } = useTranslation();
    return<>
    <section class="hero-wrap hero-wrap-2" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Projects</h1>
          </div>
        </div>
      </div>
    </section>
		
	<FullProject/>
    </>
}