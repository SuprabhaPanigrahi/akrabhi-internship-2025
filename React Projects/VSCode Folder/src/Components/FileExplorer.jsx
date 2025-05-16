import { useState } from 'react';
import { FiFolder, FiFile, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import './FileExplorer.css';

export const FileExplorer = () => {
    
  const fileStructure = {
    name:"My-Project",
    type:"folder",
    children:[
      {
        name:"src",
        type:"folder",
        children:[
          {
            name:"components",
            type:"folder",
            children:[
            {name:"button.jsx",type:"file"},
            {name:"card.jsx",type:"file"}]
          },
          {
            name:"App.jsx",
            type:"file"
          },
          {
            name:"index.css",
            type:"file"
          }
        ]
      },
      {
        name:"public",
        type:"folder",
        children:{name:"index.html",type:"file"}
      },
      {
        name:"package.json",
        type:"file"
      },
      {
        name:"README.md",
        type:"file"
      }
    ]
  };

  const [openFolders, setOpenFolders] = useState({});

  // Toggle folder open/close
  const toggleFolder = (folderPath) => {
    setOpenFolders(prev => ({
      ...prev,
      [folderPath]: !prev[folderPath]
    }));
  };

  // Render file/folder items recursively
  const renderItem = (item, path = '') => {
    const currentPath = `${path}/${item.name}`;
    
    if (item.type === 'file') {
      return (
        <div key={currentPath} className="file-item">
          <FiFile className="file-icon" />
          <span className="item-name">{item.name}</span>
        </div>
      );
    }

    // Folder rendering
    return (
      <div key={currentPath} className="folder-wrapper">
        <div 
          className="folder-item"
          onClick={() => toggleFolder(currentPath)}
        >
          {openFolders[currentPath] ? 
            <FiChevronDown className="chevron-icon" /> : 
            <FiChevronRight className="chevron-icon" />}
          <FiFolder className="folder-icon" />
          <span className="item-name">{item.name}</span>
        </div>
        
        {openFolders[currentPath] && item.children && (
          <div className="folder-contents">
            {item.children.map(child => renderItem(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="file-explorer">
      <div className="explorer-header">
        <h3>EXPLORER</h3>
      </div>
      <div className="file-tree">
        {renderItem(fileStructure)}
      </div>
    </div>
  );
};

export default FileExplorer;
