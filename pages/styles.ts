import styled from "styled-components";

export const ThemeTest = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
`;
