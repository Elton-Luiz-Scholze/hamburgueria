import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 16px;
  gap: 16px;
  background-color: var(--grey-0);

  p {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 2px solid var(--grey-20);
  }
`;
