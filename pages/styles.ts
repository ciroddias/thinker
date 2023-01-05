import styled from "styled-components";

export const ThemeTest = styled.div`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  color: ${({ theme }) => theme.colors["text-100"]};
`;
