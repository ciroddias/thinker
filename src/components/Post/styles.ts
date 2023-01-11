import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;

  .create-branch-label {
    font-size: 0.8rem;
    display: block;
    margin: 1rem 0 0.5rem;
  }

  .open-discussion {
    display: block;
    margin: 1rem 0;
    text-decoration: none;
    width: fit-content;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin: 2rem 0;
`;

export const Interactions = styled.footer`
  margin: 1rem 0;
  display: flex;
`;

interface InterestedProps {
  interested: boolean;
}

export const Interest = styled.a<InterestedProps>`
  cursor: pointer;
  color: ${({ interested, theme }) =>
    interested ? theme.colors.secondary : ""};
  margin-right: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin: 0 0.2rem;
  }
`;

export const Replies = styled.a`
  display: flex;
  align-items: center;
`;

export const BestReplyLabel = styled.small`
  color: ${({ theme }) => theme.colors.main};
`;

export const ArgumentField = styled.textarea`
  background-color: ${({ theme }) => theme.colors["card-200"]};
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
`;
