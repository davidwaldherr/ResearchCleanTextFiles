import React from 'react';

function Input({onTextChange}) {
    const [text, setText] = React.useState("");
    
    // Write a Javascript function that accepts a var text input and splits it into a list containing the
    // lines in the input. The function should return the list.
    function splitText(text) {
        return text.split("\n");
    }

    function appendText(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
        var text = (e.target.result); // This is the text file  
        // Define content
        var content = splitText(text);
        // Strip each line of whitespace
        content = content.map(line => line.trim());
        // Remove empty lines
        content = content.filter(line => line !== "");
        // Iterate through the lines. If there is any instance of 2 or more consecutive spaces, replace it with a single space.
        for (var j = 0; j < content.length; j++) {
            content[j] = content[j].replace(/\s{2,}/g, ' ');
        }
        // Iterate through the list. If a line does not end with a ".", "!", or "."", or "?", append a period to the end of the line.
        for (var i = 0; i < content.length; i++) {
            if (content[i].endsWith(".") || content[i].endsWith("!") || content[i].endsWith("?")) {
                continue;
            } else {
                content[i] = content[i] + ".";
            }
        }
        // Join the list into a string and set the state of the text variable to the string.
        setText(content.join("\n"));
        onTextChange(content.join("\n"));
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