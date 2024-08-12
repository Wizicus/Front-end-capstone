import Header from "../components/Header";
import {Nav} from "../components/Nav";
import Footer from "../components/Footer";
import Specials from "../components/Specials";
import Testimonials from '../components/Testimonials';
import Description from '../components/Description';

function HomePage() {
    return (
      <>
        <Header></Header>
        <Specials/>
        <Testimonials/>
        <Description/>
      </>
    );
  }
  
  export default HomePage;