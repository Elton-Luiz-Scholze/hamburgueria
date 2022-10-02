import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 330px;
  border: 2px solid var(--grey-20);
  border-radius: 8px;

  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 45%;
    background-color: var(--grey-0);
  }
  img {
    width: 170px;
    height: 100%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 55%;
  padding: 20px;

  h2 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-50);
  }

  span {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  background-color: var(--color-primary);
  color: var(--white);
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
