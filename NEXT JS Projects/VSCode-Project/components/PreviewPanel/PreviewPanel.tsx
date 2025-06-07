"use client";  
import { FileItem } from '@/types/files';  
import * as S from './PreviewPanel.style';  

type PreviewPanelProps = {  
  file: FileItem | null;  
};  

export default function PreviewPanel({ file }: PreviewPanelProps) {  
  if (!file) {  
    return <S.EmptyState>Select a file to preview</S.EmptyState>;  
  }  

  return (  
    <S.PanelContainer>  
      <S.Header>  
        <S.FileNameText>{file.name}</S.FileNameText>  
        {file.extension && <S.ExtensionBadge>.{file.extension}</S.ExtensionBadge>}  
      </S.Header>  
      <S.ContentPanel>{file.content || "No content available"}</S.ContentPanel>  
    </S.PanelContainer>  
  );  
}  