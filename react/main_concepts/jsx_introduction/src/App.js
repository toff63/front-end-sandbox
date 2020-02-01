import React from 'react';
import './App.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

function App() {
    return (
        <div>
        <h1>Hello, {formatName(user)}</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default App;
