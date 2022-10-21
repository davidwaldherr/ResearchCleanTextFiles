import './App.css';
import Input from './input';
import DownloadButton from './DownloadButton';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1. Upload your text file here:
        </p>
        <Input />
        <p>
          2. Download your text file here:
        </p>
        <DownloadButton />
        {/* <Input /> */}
      </header>
    </div>
  );
}

export default App;
