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
      <p>Text File Processor</p>
      <Input onTextChange={onTextChange} />
      <DownloadButton text={text} />
    </div>
  );
}

export default App;