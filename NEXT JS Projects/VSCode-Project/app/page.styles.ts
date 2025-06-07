import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: 100vh;
  padding: 32px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  font-size: 1.5rem;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;