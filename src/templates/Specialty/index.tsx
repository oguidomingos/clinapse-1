import specialtyBg from "../../assets/specialtyBg.png";

import { Container, MediaArea, Text } from "./style";

export default function Specialty() {
  return (
    <Container background={specialtyBg} id="specialty">
      
      <Text>
        <h1>Sobre nós</h1>
        <span>A Clinapse surgiu com o intuito de unir duas áreas da psicologia:</span>
        <p>
        a psicologia clínica e a neuropsicologia, que em conjunto, possuem grande potencial no tratamento de pessoas
    com déficits neurológicos e cognitivos que impactuam na sua qualidade de vida e consequentemente de suas familias. Por isso, a metodologia utilizada na Clinapse promove técnicas
    que oferecem tratamentos completamente personalizados e adaptados ao paciente e a família. Dessa forma, o propósito da Clinapse é proporcionar o autoconhecimento, a
    autonomia, a independência e a reinserção do paciente no seu cotidiano.

        </p>
      </Text>
    </Container>
  );
}
