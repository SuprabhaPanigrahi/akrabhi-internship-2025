import {FileExplorer} from './Components/FileExplorer';
import FilePreview from './Components/FilePreview'

const App = () => {
  return (
    <div className="app-container">
      <FilePreview />
      <FileExplorer />
    </div>
  );
};

export default App;
