import './App.css';
import Input from './input';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Upload your text file here:
        </p>
        <Input />
        <p>
          Click submit to upload and process the file.
        </p>
        <button onClick={(e) => console.log("submitted")}>Submit</button>
      </header>
    </div>
  );
}

export default App;
