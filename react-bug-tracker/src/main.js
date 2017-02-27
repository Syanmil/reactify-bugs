import React from 'react';
import ReactDOM from 'react-dom';

import { MainHeader, Form } from './components';

class App extends React.Component {
  render(){
    return (
      <div>
        <MainHeader />
        <Form />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
