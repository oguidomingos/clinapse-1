import aboutBg from "../../assets/aboutBg.png";
import coupleImg from "../../assets/couple.png";
import dividerImg from "../../assets/divider-large.svg";
import { Container, Content, Text, ImageArea } from "./style";

export default function AboutUs() {
  return (
    <Container background={aboutBg} id="about-us">
      <h1>Como entregamos valor</h1>
      <img src={dividerImg} alt="Divider" />
      <Content>
        <Text>
          <span>Para nós, um atendimento humanizado, acolhedor e acompanhado de uma visão global sobre a situação de cada pessoa são os pilares para conseguirmos a confiança de nossos pacientes e, consequentemente, o êxito nos tratamentos.</span>

          <p>
          Por isso, nosso trabalho envolve não apenas o idoso, mas a família e os cuidadores que possuem uma relação próxima com o mesmo. Dessa forma, nossa missão é fazer com que a complexidade mental do indivíduo seja compreendida, facilitando assim, a convivência, o entendimento e buscando a reinserção do idoso em seu seio familiar. Além do tratamento neuropsicológico, que procura estagnar o avanço de doenças, oferecemos também, em conjunto, a atuação da psicoterapia e do Acompanhamento Terapêutico, a fim de que o paciente tenha sua saúde mental como uma grande aliada nesse processo.

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
