import React from 'react';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

class Welcome1 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

function App() {
  return (
    <div>
    <Welcome name="John" />
    <Welcome1 name="Elliott" />
    </div>
  )
}
export default App;
