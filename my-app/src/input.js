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
        // Iterate through the lines. If there is any instance of 2 or more consecutive spaces, replace it with a single space.
        for (var j = 0; j < content.length; j++) {
            content[j] = content[j].replace(/\s{2,}/g, ' ');
        }
        // Iterate through the lines. Remove all duplicate lines.
        for (var q = 0; q < content.length; q++) {
            for (var k = q + 1; k < content.length; k++) {
                if (content[q] === content[k]) {
                    content.splice(k, 1);
                }
            }
        }
        // // Iterate through the list. If a line does not end with a ".", "!", or "."", or "?", append the next line to it.
        // for (var w = 0; w < content.length; w++){
        //     for (var l = 0; l < content.length; l++) {
        //         if (content[l].slice(-1) !== "." && content[l].slice(-1) !== "!" && content[l].slice(-1) !== "?" && content[l].slice(-1) !== "\"") {
        //             content[l] = content[l] + " " + content[l + 1];
        //             content.splice(l + 1, 1);
        //         }
        //     }
        // }
        // Iterate through the list. If a line does not end with a ".", "!", or "."", or """, or "?", append a period to the end of the line.
        for (var i = 0; i < content.length; i++) {
            if (content[i].endsWith(".") || content[i].endsWith("!") || content[i].endsWith("?") || content[i].endsWith("\"")) {
                continue;
            } else {
                content[i] = content[i] + ".";
            }
        }
        // // If the line contains over 12 periods in it, create a new line after every 12th period.
        // function periodCheck(list) {
        //     var count = 0;
        //     var newList = [];
        //     for (var x = 0; x < list.length; x++) {
        //       if (list[x] === '.') {
        //         count++;
        //       }
        //       if (count === 10) {
        //         newList.push(list.slice(0, x + 1));
        //         list = list.slice(x + 1);
        //         count = 0;
        //         x = -1;
        //       }
        //     }
        //     if (list.length) {
        //       newList.push(list);
        //     }
        //     return newList;
        // }
        // periodCheck(content);
        // Remove empty lines
        content = content.filter(line => line !== "");
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