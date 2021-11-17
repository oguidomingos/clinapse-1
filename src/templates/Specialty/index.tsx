import specialtyBg from "../../assets/specialtyBg.png";

import { Container, MediaArea, Text } from "./style";

export default function Specialty() {
  return (
    <Container background={specialtyBg} id="specialty">
      <MediaArea>placeholder video</MediaArea>
      <Text>
        <h1>Especialidade</h1>
        <span>Temos uma vasta experiência no mercado</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          hendrerit non felis sed tempus. Nullam eget ex a enim rutrum ornare
          nec vel libero. Suspendisse vulputate augue quis sapien venenatis
          scelerisque. Donec risus risus, volutpat egestas erat ut, elementum
          euismod justo. Nullam eu fringilla nisl, id pulvinar mi. Donec ut
          interdum dolor. Nullam a nunc ultrices, pulvinar mauris vitae,
          pulvinar mi. In maximus sit amet lorem at molestie.
        </p>
      </Text>
    </Container>
  );
}
