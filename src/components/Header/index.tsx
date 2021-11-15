import logoImg from "../../assets/logo.svg";

import { Container, Actions } from "./style";

export default function Header() {
  const links = [
    ["#specialty", "Especialidades"],
    ["#about-us", "Sobre Nós"],
  ];
  return (
    <Container>
      <Actions>
        {links.map(([link, label]) => (
          <a key={link} href={link}>
            {label}
          </a>
        ))}
      </Actions>
      <img src={logoImg} alt="Clinapse" />
    </Container>
  );
}
