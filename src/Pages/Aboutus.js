import { useTranslation } from "react-i18next";
import SecAbout from "../Components/home/SectionAbout";
import CustomerSay from "../Components/home/CustomerSay";
import Projectsnum from "../Components/home/Projectsnum";

export default function AboutUs() {
    const { t } = useTranslation();

  
    return<>
    <section class="hero-wrap hero-wrap-2" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 519188 text-center">
            <h1 class="mb-2 bread">About Us</h1>
          </div>
        </div>
      </div>
    </section>
		
    <SecAbout/>


    <Projectsnum/>

    <CustomerSay/>
    </>
}