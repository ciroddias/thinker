import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  vertical-align: center;
`;

export const LoginCard = styled.form`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: auto 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors["card-200"]};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
