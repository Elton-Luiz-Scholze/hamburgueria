import styled from "styled-components";

export const ContainerCart = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: max-content;
  margin: 0 auto;
  border-radius: 8px;

  & > h3 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    padding: 16px;
    color: var(--white);
    background-color: var(--color-primary);
    border-radius: 8px 8px 0 0;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  gap: 16px;
  margin-bottom: 20px;
  background-color: var(--grey-0);
  border-radius: 0 0 8px 8px;

  & > h3 {
    font-weight: 700;
    font-size: 1.125rem;
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--grey-50);
  }
`;

export const FullCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  max-height: 380px;
  overflow-y: auto;
`;
