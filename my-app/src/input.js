// input.js
// This component is a simple input field that allows the user to upload a text file.
// The appendText function is called on the file upload event.
// Then, the Input function returns the new text file to the App function.
//

import React from 'react';

function Input() {
    const [text, setText] = React.useState("");
    
    function appendText(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
        var text = (e.target.result); // This is the text file
        var lines = text.split('\n');

        for (var i = 0; i < lines.length; i++) {
            // after every period, add a space
            lines[i] = lines[i].replace('.', '. ');
            lines[i] = " ".join(lines[i].split());
            // Strip the line
            lines[i] = lines[i].strip();
            // if the line does not end with a period, delete every character after the last period
            if (!lines[i].endswith('.')) {
                lines[i] = lines[i].substring(0, lines[i].lastIndexOf('.') + 1);
            }
        }
        // Join the lines back together
        text = lines.join('\n');
        
        setText(text); // This is the new text file
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