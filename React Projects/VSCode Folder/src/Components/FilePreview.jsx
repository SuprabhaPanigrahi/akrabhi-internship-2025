import { useState } from 'react';
import './FilePreview.css';

// Sample file content data
const fileContents = {
  'App.js': `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;`,
  
  'index.js': `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`
};

const FilePreview = ({ activeFile }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`file-preview ${darkMode ? 'dark' : 'light'}`}>
      <div className="preview-header">
        <h3>{activeFile || 'Select a file'}</h3>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      
      {activeFile && (
        <pre className="file-content">
          {fileContents[activeFile] || '// File content will appear here'}
        </pre>
      )}
    </div>
  );
};

export default FilePreview;