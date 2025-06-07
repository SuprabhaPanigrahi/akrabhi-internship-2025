interface Theme {
  colors: {
    background: string;
    sidebar: string;
    text: string;
    textSecondary: string;
    border: string;
    folder: string;
    file: string;
    extension: string;
    hover: string;
  };
  fonts: {
    monospace: string;
  };
}

export const theme: Theme = {
  colors: {
    background: '#1e1e1e',
    sidebar: '#252526',
    text: '#d4d4d4',
    textSecondary: '#858585',
    border: '#252526',
    folder: '#4EC9B0',
    file: '#9CDCFE',
    extension: '#CE9178',
    hover: '#2A2D2E',
  },
  fonts: {
    monospace: "'Consolas', monospace",
  },
};

// This is needed for TypeScript to recognize the theme in styled components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}