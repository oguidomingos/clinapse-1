import Header from "../../components/Header";
import homeBg from "../../assets/homeBg.png";

import { Container, Content, ButtonArea } from "./style";
import LinkButton from "../../components/LinkButton";

export default function Home() {
  const phoneNumber = "5561981223602";

  return (
    <Container background={homeBg}>
      <Header />
      <Content>
        <span>Valorizando a Longevidade</span>
        <h1>
          Receba suporte psicológico no seu dia-a-dia. Especialização Geriátrica
        </h1>
        <ButtonArea>
          <LinkButton
            title="Agende sua consulta"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero agendar uma consulta`}
          />

          <LinkButton
            title="Fale Conosco"
            variant="outlined"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero saber mais sobre seus serviços`}
          />
        </ButtonArea>
      </Content>
      <span> Nossos Serviços ↓</span>
    </Container>
  );
}
