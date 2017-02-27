import React from 'react';
import ReactDOM from 'react-dom';

import { MainHeader, Form, List, Footer } from './components';

class App extends React.Component {
  render(){
    return (
      <div>
        <MainHeader />
        <Form />
        <List />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
