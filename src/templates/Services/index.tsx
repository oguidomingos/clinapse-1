import { useState } from "react";
import Slider from "../../components/Slider";

import { Container, Menu } from "./style";

const sliderItems = [
  { position: 0, name: "Diagnóstico Neuropsicológico" },
  { position: 1, name: "Psicologia Clínica" },
  { position: 2, name: "Reabilitação Cognitiva" },
  { position: 3, name: "Acompanhamento terapêutico" },
  { position: 4, name: "Saúde Mental e Bem-estar" },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(sliderItems[0]);

  return (
    <Container>
      <Menu>
        {sliderItems.map((item) => (
          <span
            key={item.position}
            onClick={() => setCurrentSlide({ ...item })}
          >
            {item.name}
          </span>
        ))}
      </Menu>

      <Slider currentSlide={currentSlide} />
    </Container>
  );
}
