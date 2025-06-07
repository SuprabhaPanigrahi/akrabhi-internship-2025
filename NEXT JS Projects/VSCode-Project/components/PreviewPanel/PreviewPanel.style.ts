import styled from 'styled-components';

export const PanelContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  overflow: auto;
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Header = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
`;

export const FileNameText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ExtensionBadge = styled.span`
  margin-left: 8px;
  padding: 2px 6px;
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 3px;
  font-size: 0.8em;
`;

export const ContentPanel = styled.div`
  padding: 12px;
  font-family: ${({ theme }) => theme.fonts.monospace};
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;