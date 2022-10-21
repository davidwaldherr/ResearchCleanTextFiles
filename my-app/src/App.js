import React from 'react';
import './App.css';
import Input from './input';
import DownloadButton from './DownloadButton';

function App() {

  const [text, setText] = React.useState("");
  
  function onTextChange(text) {
    setText(text);
  }

  return (
    <div className="App">
      <h1>Text File Processor</h1>
      <p>
        Insert text file to process.
      </p>
      <Input onTextChange={onTextChange} />
      <DownloadButton text={text} />
    </div>
  );
}

export default App;