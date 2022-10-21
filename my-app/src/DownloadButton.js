import React from 'react'; 

class DownloadButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
    }
   
    handleClick = () => {
      this.setState({ loading: true }, () => {
        const file = new Blob(['Hello, world!'], { type: 'text/plain' });
        const a = document.createElement('a');
        const url = URL.createObjectURL(file);
        a.href = url;
        a.download = 'hello-world.txt';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          this.setState({ loading: false });
        }, 100);
      });
    };
   
    render() {
      return (
        <button onClick={this.handleClick} disabled={this.state.loading}>
          {this.state.loading ? 'Loading...' : 'Download'}
        </button>
      );
    }
  }

export default DownloadButton;