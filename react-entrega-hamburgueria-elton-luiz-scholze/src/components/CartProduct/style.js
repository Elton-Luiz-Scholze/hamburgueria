import styled from "styled-components";

export const CardCart = styled.li`
  position: relative;
  display: flex;
  align-items: initial;
  gap: 1rem;
  height: 100px;
  width: 300px;
  padding: 10px;
  background-color: var(--grey-0);

  img {
    width: 70px;
    height: 70px;
    background-color: var(--grey-20);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 68px;
    gap: 10px;

    h2 {
      font-weight: 700;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      color: var(--grey-50);
    }

    span {
      font-weight: 400;
      font-size: 12px;
    }
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    height: max-content;
    border: none;
    background-color: var(--grey-0);
    cursor: pointer;
  }
`;
