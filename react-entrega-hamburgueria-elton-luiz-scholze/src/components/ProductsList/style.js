import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-top: 20px;

  @media (min-width: 768px) {
    max-width: 802px;
  }
`;

export const ContainerCards = styled.ul`
  display: flex;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  gap: 16px;
  overflow-x: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 802px;
  }
`;
