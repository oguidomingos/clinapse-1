import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";
import reviewsBg from "../../assets/reviewsBg.png";
import mailImg from "../../assets/mail.svg";
import divider from "../../assets/divider-white.svg";

import { Container, EmailArea, TextArea, Social } from "./style";
import Button from "../../components/Button";

export default function Contact() {
  return (
    <Container background={reviewsBg}>
      
      <img src={divider} alt="" />
      <h1>Contato</h1>
      <EmailArea>
        <img src={mailImg} alt="E-mail" />

        <TextArea>
          <span>Autoconhecimento gera liberdade!</span>
          <h2>Receba dicas e descontos para lidar melhor com lorem ipsum</h2>

          <form>
            <input type="text" placeholder="Seu melhor e-mail..." />
            <Button type="submit">Quero receber dicas e descontos</Button>
          </form>
        </TextArea>
      </EmailArea>

      <Social>
        <h1>Redes Sociais</h1>
        <div>
          <a href="https://whatsapp.com.br">
            <BsWhatsapp />
            Whatsapp
          </a>
          <a href="https://facebook.com.br">
            <BsFacebook />
            Facebook
          </a>
          <a href="https://instagram.com.br">
            <BsInstagram />
            Instagram
          </a>
          <a href="https://linkedin.com.br">
            <BsLinkedin />
            LinkedIn
          </a>
        </div>
      </Social>
    </Container>
  );
}
