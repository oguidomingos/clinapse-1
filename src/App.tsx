import { Container } from "./styles/AppStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./templates/Home";
import Services from "./templates/Services";
import AboutUs from "./templates/AboutUs";
import Specialty from "./templates/Specialty";
import Contact from "./templates/Contact";

export default function App() {
  return (
    <Container>
      <Home />
      <Services />
      <AboutUs />
      <Specialty />
      <Contact />
    </Container>
  );
}
