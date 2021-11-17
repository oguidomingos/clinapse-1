import { useRef } from "react";
import SlickSlider from "react-slick";

import { Container, Carousel, TextArea, ImageArea } from "./style";

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
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

          <ImageArea>
            <img
              className="main"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo1"
            />
            <img
              className="second"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo2"
            />
            <img
              className="third"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo3"
            />
          </ImageArea>
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

          <ImageArea>
            <img
              className="main"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo1"
            />
            <img
              className="second"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo2"
            />
            <img
              className="third"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo3"
            />
          </ImageArea>
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

          <ImageArea>
            <img
              className="main"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo1"
            />
            <img
              className="second"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo2"
            />
            <img
              className="third"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo3"
            />
          </ImageArea>
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

          <ImageArea>
            <img
              className="main"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo1"
            />
            <img
              className="second"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo2"
            />
            <img
              className="third"
              src="https://images.unsplash.com/photo-1637176473226-4772830471b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
              alt="Photo3"
            />
          </ImageArea>
        </div>
      </Carousel>
    </Container>
  );
}
