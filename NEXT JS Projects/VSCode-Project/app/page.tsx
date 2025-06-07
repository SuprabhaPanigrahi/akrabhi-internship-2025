"use client";
import * as S from './page.styles';
import FileExplorer from '@/components/FileExplorer/FileExplorer';

export default function Home() {
  return (
    <S.MainContainer>
      <S.ContentContainer>
        <S.Title>VS Code File Explorer</S.Title>
        <FileExplorer />
      </S.ContentContainer>
    </S.MainContainer>
  );
}