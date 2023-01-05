import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0.5rem 1rem;
`;

export const Thinker = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0 0.5rem;
    color: white;
  }
`;

export const SearchBarWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    background-color: ${({ theme }) => theme.colors["card-100"]};
    align-items: center;
    padding: 0.5rem;

    input {
      background: none;
      margin-left: 0.5rem;
      border: none;
      height: 100%;

      :focus {
        outline: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 0.5rem;

    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;
