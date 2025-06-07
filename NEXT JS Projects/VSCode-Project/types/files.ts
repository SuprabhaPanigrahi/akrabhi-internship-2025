export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  extension?: string;
  content?: string;  // Added for file previews and ? makes it optional 
}



