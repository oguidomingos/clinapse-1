import styled from "styled-components";

export const ImageArea = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 100%;
  padding: 156px 244px;

  div {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 41, 55, 0.7);

    img {
      width: 78%;
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

  span,
  p {
    font-size: 1.6rem;
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
  /* background: purple; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div<{ background?: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => `url(${props.background})`} no-repeat center;
  background-size: cover;
  padding: 64px 0;

  overflow: hidden;

  h1 {
    padding-left: 64px;
    font-size: 2.8rem;
    color: #802936;
  }

  img {
    width: 20%;
    height: 40px;
  }

  @media (max-width: 768px) {
    h1 {
      padding-left: 24px;
    }
    img {
      width: 80%;
    }
  }
`;
