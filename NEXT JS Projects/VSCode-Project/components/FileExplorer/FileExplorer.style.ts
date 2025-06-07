import styled from 'styled-components';

export const ExplorerContainer = styled.div`
  display: flex;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SidebarHeader = styled.div`
  padding: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FileTree = styled.div`
  flex: 1;
  padding: 8px;
  overflow-y: auto;
`;