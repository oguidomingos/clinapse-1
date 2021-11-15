import Slider from "react-slick";
import styled from "styled-components";
import sliderBg from "../../assets/sliderBg.png";

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;

  h1 {
    font-size: 2.6rem;
  }
  span {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    gap: 16px;
    h1 {
      font-size: 1.6rem;
    }
    span {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Carousel = styled(Slider)`
  height: 90%;
  width: 100%;
  display: flex;

  div {
    color: #fafafa;
    padding: 32px;
    height: 100%;
    display: flex;
    justify-content: center;

    span {
      color: #cf465b;
    }
  }

  button {
    margin: 0 80px;
    z-index: 99;
  }

  @media (max-width: 768px) {
    div {
      padding: 16px;
    }

    button {
      margin: 0 32px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 92%;
  background: url(${sliderBg}) no-repeat center;
  background-size: cover;

  @media (max-width: 1366px) {
    height: 92%;
  }
`;
