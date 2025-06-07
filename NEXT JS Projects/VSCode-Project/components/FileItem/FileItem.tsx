"use client";
import { useState } from "react";
import type { FileItem } from "@/types/files";
import * as S from './FileItem.styles';

type FileItemProps = {
    item: FileItem;
    depth: number;
    onSelect: (File: FileItem) => void;
};

export default function FileItem({ item, depth, onSelect}: FileItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.FileItemContainer depth={depth}>
            <S.FileRow type={item.type} 
            onClick={() => {
                if(item.type === 'folder') setIsOpen(!isOpen);
                else onSelect(item);
            }}
        >
            {item.type === 'folder' ? (isOpen ? '📂' : '📁') : '📄'}
            <S.FileName>
                {item.name}
                {item.type === 'file' && <S.FileExtension>.{item.extension}</S.FileExtension>}
            </S.FileName>
        </S.FileRow>
        {isOpen && item.children && (
            <div>
                {item.children.map((child) => (
                    <FileItem 
                        key={child.id}
                        item={child}
                        depth={depth + 1}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        )}
        </S.FileItemContainer>
    );
}
