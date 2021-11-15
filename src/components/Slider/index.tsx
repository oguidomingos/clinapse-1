import { useRef } from "react";
import SlickSlider from "react-slick";

import { Container, Carousel, TextArea } from "./style";

interface ISlider {
  currentSlide: {
    position: number;
    name: string;
    media?: string;
  };
}

export default function Slider({ currentSlide }: ISlider) {
  const sliderRef = useRef<SlickSlider>(null);

  if (currentSlide) {
    sliderRef.current?.slickGoTo(currentSlide.position);

    if (currentSlide.media) {
      sliderRef.current?.slickPause();
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Carousel ref={sliderRef} {...settings}>
        <div>
          <TextArea>
            <h1>Diagnóstico Neuropsicológico</h1>
            <span>Profissionais presentes no seu cotidiano</span>
            <p>
              é uma prática clínica desenvolvida fora dos espaços tradicionais
              de tratamento (consultórios) e que acontece no contexto de vida de
              quem é acompanhado, utilizando o cotidiano como território
              privilegiado para suas experiências e intervenções.
            </p>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Psicologia Clínica</h1>
            <span>Profissionais presentes no seu cotidiano</span>
            <p>
              é uma prática clínica desenvolvida fora dos espaços tradicionais
              de tratamento (consultórios) e que acontece no contexto de vida de
              quem é acompanhado, utilizando o cotidiano como território
              privilegiado para suas experiências e intervenções.
            </p>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Reabilitação Cognitiva</h1>
            <span>Profissionais presentes no seu cotidiano</span>
            <p>
              é uma prática clínica desenvolvida fora dos espaços tradicionais
              de tratamento (consultórios) e que acontece no contexto de vida de
              quem é acompanhado, utilizando o cotidiano como território
              privilegiado para suas experiências e intervenções.
            </p>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Acompanhamento terapêutico</h1>
            <span>Profissionais presentes no seu cotidiano</span>
            <p>
              é uma prática clínica desenvolvida fora dos espaços tradicionais
              de tratamento (consultórios) e que acontece no contexto de vida de
              quem é acompanhado, utilizando o cotidiano como território
              privilegiado para suas experiências e intervenções.
            </p>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Saúde Mental e Bem-estar</h1>
            <span>Profissionais presentes no seu cotidiano</span>
            <p>
              é uma prática clínica desenvolvida fora dos espaços tradicionais
              de tratamento (consultórios) e que acontece no contexto de vida de
              quem é acompanhado, utilizando o cotidiano como território
              privilegiado para suas experiências e intervenções.
            </p>
          </TextArea>
        </div>
      </Carousel>
    </Container>
  );
}
