import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 1rem;
  font-size: 0.8rem;
  margin: 1rem auto;

  input,
  button {
    margin: 0.5rem 0;
  }
`;
