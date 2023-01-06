import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors["card-100"]};
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
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

export const CommentField = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
