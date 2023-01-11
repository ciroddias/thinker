import styled from "styled-components";

export const Container = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.main};
  margin: 0.1rem 0 0.9rem;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin: 2rem 0;
`;

export const Interactions = styled.footer`
  display: flex;
`;

interface AgreedProps {
  agreed: boolean;
}

export const Agreed = styled.a<AgreedProps>`
  display: flex;
  align-items: center;
  color: ${({ agreed, theme }) => (agreed ? theme.colors.secondary : "")};
  margin-right: 1rem;

  svg {
    margin-right: 0.1rem;
  }
`;

interface Deviated {
  deviated: boolean;
}

export const Deviated = styled.a<Deviated>`
  display: flex;
  align-self: center;
  color: ${({ deviated, theme }) => (deviated ? theme.colors.secondary : "")};

  svg {
    margin-right: 0.1rem;
  }
`;
