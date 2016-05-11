import React from 'react';
import ReactDOM from 'react-dom';

class ReactReadingTime extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "container"},
        "Morningstar react page"
      )
    );
  }
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));