"use client";
import { useState } from 'react';
import { FileItem } from '@/types/files';
import FileItemComponent from '../FileItem/FileItem';
import PreviewPanel from '../PreviewPanel/PreviewPanel';
import * as S from './FileExplorer.style';

const sampleFiles: FileItem[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'components',
        type: 'folder',
        children: [
          { 
            id: '3', 
            name: 'Button', 
            type: 'file', 
            extension: 'tsx',
            content: `import React from 'react';\n\ntype ButtonProps = {\n  children: React.ReactNode;\n};\n\nexport function Button({ children }: ButtonProps) {\n  return <button>{children}</button>;\n}`
          },
          { 
            id: '4', 
            name: 'Card', 
            type: 'file', 
            extension: 'tsx',
            content: `import React from 'react';\n\nexport function Card() {\n  return <div className="card">Card</div>;\n}`
          }
        ]
      },
      { 
        id: '5', 
        name: 'App', 
        type: 'file', 
        extension: 'tsx',
        content: `function App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}`
      }
    ]
  },
  {
    id: '6',
    name: 'public',
    type: 'folder',
    children: [
      { 
        id: '7', 
        name: 'index', 
        type: 'file', 
        extension: 'html',
        content: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>`
      }
    ]
  },
  { 
    id: '8', 
    name: 'package', 
    type: 'file', 
    extension: 'json',
    content: `{\n  "name": "my-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.0.0"\n  }\n}`
  }
];

export default function FileExplorer() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  const handleFileSelect = (file: FileItem) => {
    if (file.type === 'file') setSelectedFile(file);
  };

  return (
    <S.ExplorerContainer>
      <S.Sidebar>
        <S.SidebarHeader>EXPLORER</S.SidebarHeader>
        <S.FileTree>
          {sampleFiles.map((item) => (
            <FileItemComponent 
              key={item.id} 
              item={item} 
              depth={0}
              onSelect={handleFileSelect}
            />
          ))}
        </S.FileTree>
      </S.Sidebar>
      <PreviewPanel file={selectedFile} />
    </S.ExplorerContainer>
  );
}