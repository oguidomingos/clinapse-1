import styled from "styled-components";

export const ButtonArea = styled.section`
  display: flex;
  gap: 32px;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.section`
  color: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 620px;

  span {
    font-size: 1.8rem;
  }
  h1 {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    gap: 16px;
    span {
      font-size: 1.2rem;
    }
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export const Container = styled.main<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 128px;
  justify-content: space-between;
  height: 100vh;
  background: ${(props) => `url(${props.background})`} no-repeat center;
  background-size: cover;

  > span {
    text-transform: uppercase;
    color: #fafafa;
    font-size: 1.4rem;
    padding-bottom: 20px;
    align-self: center;

    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

    @keyframes floating {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 64px;

    > span {
      margin-top: 16px;
    }
  }
`;
