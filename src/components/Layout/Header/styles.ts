import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;
