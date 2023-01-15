import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  margin: 1rem;
`;

export const LoginCard = styled.form`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors["card-200"]};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    display: block;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors["text-100"]};
  }

  a {
    margin: 1rem auto;
  }
`;
