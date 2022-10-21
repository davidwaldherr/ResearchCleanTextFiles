import React from 'react';

function DownloadButton({text}) {

    function downloadText() {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <div>
            <button onClick={downloadText}>Download</button>
        </div>
    );
}

export default DownloadButton;