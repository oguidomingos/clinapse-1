import aboutBg from "../../assets/aboutBg.png";
import coupleImg from "../../assets/couple.png";
import dividerImg from "../../assets/divider-large.svg";
import { Container, Content, Text, ImageArea } from "./style";

export default function AboutUs() {
  return (
    <Container background={aboutBg} id="about-us">
      <h1>Sobre Nós</h1>
      <img src={dividerImg} alt="Divider" />
      <Content>
        <Text>
          <span>Conheça um pouco sobre a nossa história</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dui tellus, fringilla eget aliquam nec, porta in purus. Integer sed
            mattis metus. Nulla blandit lobortis ipsum, vel mollis turpis
            sollicitudin eget. Suspendisse vitae nulla tellus. Nunc in erat ut
            enim accumsan porttitor. Duis in tempor felis, interdum sodales leo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dui tellus, fringilla eget aliquam nec, porta in purus. Integer sed
            mattis metus. Nulla blandit lobortis ipsum, vel mollis turpis
            sollicitudin eget. Suspendisse vitae nulla tellus. Nunc in erat ut
            enim accumsan porttitor. Duis in tempor felis, interdum sodales leo.
          </p>
        </Text>
        <ImageArea>
          <div>
            <img src={coupleImg} alt="Couple" />
          </div>
        </ImageArea>
      </Content>
    </Container>
  );
}
