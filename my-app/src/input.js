import React from 'react';

function Input({onTextChange}) {
    const [text, setText] = React.useState("");
    
    function appendText(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
        var text = (e.target.result); // This is the text file
        text = "Hello there.\n" + text;
        setText(text); // This is the new text file
        onTextChange(text);
        };

        reader.readAsText(file); // read the file
    }

    return (
        <div>
            <input type="file" onChange={appendText} />
        </div>
    );
}

export default Input;