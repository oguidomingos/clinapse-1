import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #fafafa;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-height: 120px;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;
