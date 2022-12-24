import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';
import assetsImage from './Assets/img.jpeg';

function App() {
  const handler = () => {
    console.log('КНОПКА БЫЛА НАЖАТА');
  };

  return (
    <div className="App">
      <CounterComponent title={'Orange'} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} />

    <button onClick={handler}>PUSH ME</button>

      <Input />

      <img src={assetsImage} alt="img" />

      <img src={'/images/img.jpeg'} alt="img" />

      <div className="example">HELLO WORLD</div>
    </div>
  );
}

export default App;
