import styled from "styled-components";

export const Menu = styled.nav`
  background: #802936;
  color: #fafafa;
  max-height: 140px;
  display: flex;
  padding: 32px 0;
  justify-content: space-evenly;

  span {
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }

  @media (max-width: 768px) {
    gap: 32px;
    padding: 32 16px;
    justify-content: stretch;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;

    > span {
      width: 100%;
      min-width: 120px;
      text-align: center;
      font-size: 1rem;
      &:first-child {
        margin: 0 8px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: pink;
`;
