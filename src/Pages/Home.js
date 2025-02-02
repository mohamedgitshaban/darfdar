
import SwiperHome from "../Components/home/SwiperHome";
import SecAbout from "../Components/home/SectionAbout";
import ServicesSection from "../Components/home/ServicesSection";
import FeaturedProjects from "../Components/home/FeaturedProjects";
import OurTeam from "../Components/home/OurTeam";
import CustomerSay from "../Components/home/CustomerSay";
import Eventsection from "../Components/home/Eventsection";
import Clints from "../Components/home/Clints";
import Silder from "../Components/Silder";
import Video from "../Components/home/Video";
function Home(params) {


    return <>
     <SwiperHome />
     
     
     {/* <Silder content = {[
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
]}/> */}
     <SecAbout/>
    
     <Video/>
     <ServicesSection/>

     <FeaturedProjects/>
     <CustomerSay/>
     <OurTeam/>
     <Eventsection/>
     <Clints/>
    </>
}
export default Home;