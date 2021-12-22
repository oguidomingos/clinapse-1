import { useRef, useState, useEffect } from 'react'
import SlickSlider from 'react-slick'

import {
  Container,
  Carousel,
  TextArea,
  ImageArea,
  ButtonArea,
  SmContainer
} from './style'
import LinkButton from '../LinkButton'
import ShowMore from 'react-show-more-button'

interface ISlider {
  currentSlide: {
    position: number
    name: string
    media?: string
  }
}

export default function Slider({ currentSlide }: ISlider) {
  const sliderRef = useRef<SlickSlider>(null)
  const phoneNumber = '5561981223602'
  const [showMore, setShowMore] = useState(false)

  if (currentSlide) {
    sliderRef.current?.slickGoTo(currentSlide.position)

    if (currentSlide.media) {
      sliderRef.current?.slickPause()
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    slidesToScroll: 1
  }

  const extraContent1 = (
    <div>
      <p>
        A partir dos resultados desses testes, é possível
        identificar/compreender as funções cerebrais preservadas e comprometidas
        do idoso e definir o melhor tratamento para buscar a estabilização ou
        até mesmo a redução de déficits neuropsicológicos apresentados em cada
        caso.
      </p>
    </div>
  )
  return (
    <Container>
      <Carousel ref={sliderRef} {...settings}>
        <div>
          <TextArea>
            <h1>Avaliação Neuropsicológico para Idosos</h1>
            <span>
              Trata-se de um procedimento que utiliza testes cognitivos que
              possuem o objetivo de identificar alterações comportamentais e
              estabelecer o perfil neuropsicológico de cada paciente.
            </span>
            <p>
              A partir dos resultados desses testes, é possível
              identificar/compreender as funções cerebrais preservadas e
              comprometidas do idoso e definir o melhor tratamento para buscar a
              estabilização ou até mesmo a redução de déficits neuropsicológicos
              apresentados em cada caso.
            </p>
            
          <ButtonArea>
            <LinkButton
              title="Agende sua consulta"
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero agendar uma consulta`}
            />
          </ButtonArea>
          </TextArea>

        </div>
        
        <div>
          <TextArea>
            <h1>Reabilitação Neurocognitiva</h1>
            <span>
              Consiste em um tratamento não medicamentoso, em que são oferecidas
              oficinas direcionadas para cada paciente e sua família, com a
              intenção de facilitar a compreensão das dificuldades cognitivas,
              comportamentais ou emocionais apresentadas pelo idoso.
            </span>
            <p>
              O procedimento inclui oficinas de atenção, memória, cálculo e
              linguagem em um conjunto de técnicas personalizadas para cada
              paciente de acordo com sua necessidade. Dessa forma, a
              reabilitação neurocognitiva apresenta-se como uma estratégia
              cientificamente comprovada e busca recuperar a autonomia, a
              independência e a facilitação do convívio com o paciente ao longo
              do tratamento.
            </p>
            <ButtonArea>
              <LinkButton
                title="Agende sua consulta"
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero agendar uma consulta`}
              />
            </ButtonArea>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Psicologia Clínica</h1>
            <span>
              Método conduzido por um(a) psicólogo(a) que tem como foco a
              promoção da saúde mental em um ambiente seguro e acolhedor.
            </span>
            <p>
              Por meio da psicoterapia, é possível alcançar o alívio do
              sofrimento psíquico, de angústias, medos, traumas e outros
              construtos que estejam impedindo seu bem-estar. Este serviço é
              oferecido para adultos e idosos e pode ser realizado
              individualmente ou em grupo.
            </p>
          <ButtonArea>
            <LinkButton
              title="Agende sua consulta"
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero agendar uma consulta`}
            />
          </ButtonArea>
          </TextArea>
        </div>
        <div>
          <TextArea>
            <h1>Acompanhamento terapêutico</h1>
            <span>
              Trata-se de uma psicoterapia realizada fora do espaço clínico, ou
              seja, em um ambiente que o paciente se sinta confortável.
            </span>
            <p>
            A proposta do Acompanhamento Terapêutico é de atender ao paciente fora da clínica,  o atendimento acontece no seu cotidiano: em casa, na rua, na padaria, no shopping,  no mercado, cursos... conforme a necessidade do sujeito.  
            O foco está em promover a autonomia que foi perdida em algum aspecto ou em evitar essa perda. A fim de ampliar os recursos internos e externos na tentativa de potencializar, resgatar e facilitar o processo de reinserção do sujeito dentro do contexto familiar, social ou profissional.  De maneira que a sua singularidade possa comparecer e que este venha a circular de forma mais saudável.
            A indicação é feita conforme planejamento terapêutico avaliado.
            </p>
          <ButtonArea>
            <LinkButton
              title="Agende sua consulta"
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, quero agendar uma consulta`}
            />
          </ButtonArea>
          </TextArea>

        </div>
      </Carousel>
    </Container>
  )
}
