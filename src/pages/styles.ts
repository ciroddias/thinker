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
  margin: 1rem auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 20rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    margin: 1rem 0;
  }
`;
