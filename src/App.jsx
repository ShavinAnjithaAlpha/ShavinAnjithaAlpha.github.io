import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernView from './modern-view';
import ClassicView from './classic-view';
import FileSystemView from './file-system-view';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModernView />} />
        <Route path="/classic" element={<ClassicView />} />
        <Route path="/file-system" element={<FileSystemView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
