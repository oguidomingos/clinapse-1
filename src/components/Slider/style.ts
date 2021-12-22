import Slider from "react-slick";
import styled from "styled-components";
import sliderBg from "../../assets/sliderBg.png";

export const ImageArea = styled.section`
  position: absolute;
  right: 5%;
  top: 0;
  display: grid;
  grid-template-areas:
    "main second"
    "main third";

  grid-row-gap: 32px;
  grid-column-gap: 32px;

  img {
    object-fit: contain;

    

  }

  

  @media (min-width: 1920px) {
    right: 15%;
    .main {
      max-width: 500px;
    }
  }

  @media (min-width: 1366px) and (max-width: 1440px) {
    display: flex;
    max-width: 100vh;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    top: 80%;
    right: 15%;
    

    img {
      max-width: 480px;
    }
  }

  @media (min-width: 725px) and (max-width: 1366px) {
    margin: 0 auto;
    display: flex;
    top: 30%;
    width: 100%;
    

    img {
      max-width: 240px;
      max-height: 240px;
      position: relative;

    }
  }

  @media (max-width: 725px) {
    display: flex;
    max-width: 100vh;
    flex-wrap: wrap;
    justify-content: flex-start;
    top: 60%;

    img {
      max-width: 120px;
      max-height: 120px;
    }
  }
`;

export const TextArea = styled.section`
  display: flex;
  flex-direction: column !important;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 2.6rem;
    color: #242424;
  }
  span {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.1rem;
    color: #242424;
  }

  @media (max-width: 1366px) {
    max-width: 700px;
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
  height: 100%;
  width: 100%;
  display: flex;

  div {
    position: relative;
    color: #fafafa;
    padding: 32px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      color: #802936;
    }
  }

  button {
    margin: 0 60px;
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
  background-size: cover;
  background-color: white;

  @media (max-width: 1366px) {
    height: 92%;
  }
`;

export const ButtonArea = styled.section`
  display: flex;
  gap: 20px;
  position: relative;
  top: 2.5rem;
  margin: 0 auto;
  
  a {
    text-decoration: none;
    color: #000;
    max-width: 280px;
    width: 100%;
    top: 3rem;
    text-align: left;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    border-color: #802936;

  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SmContainer = styled.section`
  display: flex;
  position: relative;
  top: 1.5rem;

  a {
    text-decoration:none;
    color: #000;
    max-width: 150px;
    text-align: center;
    width: 100%;
    border: solid 1px #242424;

  }
` 
