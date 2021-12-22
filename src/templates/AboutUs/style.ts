import styled from "styled-components";
import ShowMore from 'react-show-more-button';

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 100%;
  padding: 156px 244px;
  padding-top: 0;
  position: relative;
  top: -80px;

  div {
    width: 600px;
    height: 600px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
      width: 150%;
      height: 100%;
      object-fit: contain;
      margin-right: 22px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 64px;
  min-width: 602px;
  max-width: 1100px;
  width: 100%;
  span {
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    padding-top: 10px;
    font-size: 1.1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;
    min-width: 0;

    span,
    p {
      font-size: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div<{ background?: string }>`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 64px 0 64px 32px;
  top: 6vh;

  overflow: hidden;

  h1 {
    padding-left: 60px;
    font-size: 2.8rem;
    color: #802936;
    padding-top: 10%;
  }

  > img {
    position: absolute;
    top: 8%;
    width: 30%;
    height: 40px; 
    left: -5%;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    
    img {
      width: 80%;
      left: -30%;
    }
  }
  
  @media (max-width: 768px) {
    top: 8vh;
    padding: 64px 0 64px 0;
    h1 {
      padding-left: 24px;
    }
    img {
      width: 60%;
      top: 4%;
    }
  }
`;
