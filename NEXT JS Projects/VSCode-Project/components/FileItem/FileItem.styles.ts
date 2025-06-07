import styled from 'styled-components';

export const FileItemContainer = styled.div<{ depth: number }>`
  padding-left: ${({ depth }) => depth * 16}px;
`;

export const FileRow = styled.div<{ type: 'file' | 'folder' }>`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  color: ${({ type, theme }) => 
    type === 'folder' ? theme.colors.folder : theme.colors.file};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const FileName = styled.span`
  margin-left: 4px;
  font-family: ${({ theme }) => theme.fonts.monospace};
`;

export const FileExtension = styled.span`
  color: ${({ theme }) => theme.colors.extension};
  margin-left: 4px;
`;