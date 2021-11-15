import styled from "styled-components";

export const Social = styled.div`
  align-self: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 32px;
  }

  div {
    margin-top: 8px;
    display: flex;
    gap: 64px;
    width: 100%;
    align-items: flex-start;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #fafafa;
      font-weight: 700;
      font-size: 1.4rem;
      gap: 8px;
      transition: filter 0.2s;

      svg {
        margin-bottom: 4px;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  @media (max-width: 768px) {
    align-self: flex-start;
    div {
      gap: 16px;
      flex-direction: column;
    }
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  color: #000;
  padding: 32px;

  h2 {
    font-size: 2.5rem;
  }

  form {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    input {
      border: 0;
      background: #d7a4ae;
      width: 100%;
      height: 52px;
      border-radius: 8px;
      padding: 0 16px;

      &::placeholder {
        color: #fafafa;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 16px;
    form {
      margin-top: 0;
      input {
        border: 0;
        background: #d7a4ae;
        height: 52px;
        border-radius: 8px;
      }
    }
  }
`;

export const EmailArea = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 16px 32px;
  gap: 32px;
  margin: 0 auto;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    padding: 16px;
    gap: 16px;
    flex-direction: column;
    align-items: center;

    form {
      padding: 32px 0;
      input {
        border: 0;
        background: #d7a4ae;
        border-radius: 8px;
      }
    }

    img {
      width: 128px;
      height: 128px;
    }
  }
`;

export const Container = styled.div<{ background: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  background: ${(props) => `url(${props.background})`} no-repeat center;
  background-size: cover;
  color: #fafafa;
  padding: 64px 128px;

  > img {
    width: 360px;
    height: 360px;
    position: absolute;
    transform: rotate(90deg);
    left: 0;
    bottom: 58%;
  }

  > h1 {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    padding: 16px;
    h1 {
      font-size: 2.5rem;
    }

    > img {
      display: none;
    }
  }
`;
