import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import DoList from './components/test/DoList';
import DoList2 from './components/test/DoList2';

const logo = require('./logo.svg');

function App() {
  const thirdName = 'peng';
  return (
    <div className='App'>
      <Header name={'NJ'} age={10} />
      <Header name='KUan' age={2} />
      <Header name={thirdName} />
      <DoList items={[1, 2, 4, 4]} />
    </div>
  );
}

export default App;