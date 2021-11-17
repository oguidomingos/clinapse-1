import styled from "styled-components";

export const Text = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  color: #fafafa;
  text-align: right;

  h1 {
    font-size: 5rem;
  }
  span {
    font-size: 1.8rem;
    color: #cf465b;
  }
  p {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const MediaArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
`;

export const Container = styled.div<{ background: string }>`
  position: relative;
  background: ${(props) => `url(${props.background})`} no-repeat center;
  background-size: cover;
  display: flex;
  height: 100vh;
  gap: 96px;
  padding: 86px 256px;

  @media (max-width: 1440px) {
    padding: 96px;
    gap: 32px;
    background-size: 110% 100%;
  }

  @media (max-width: 1024px) {
    background-size: cover;
  }

  @media (max-width: 1024px) {
    padding: 32px;
    flex-direction: column-reverse;
    background-size: cover;
  }
`;
