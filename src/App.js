import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './router/index'

class App extends React.Component{
  render(){
    return (
        <div className="App">
          <Router />
        </div>
    )
  }
}
export default App;
