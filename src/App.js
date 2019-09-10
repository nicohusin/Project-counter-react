import React from 'react';
import Greeting from './components/greeting.js'
import './App.css';
import GreetingState from './components/greetingState.js'
import Counter from './components/counter'

function App() {
  return (
    <div>
      <section className='App'>
      <Greeting />
      </section>
      <section className='App'>
      <GreetingState/>
      </section>
      <section>
        <Counter />
      </section>
    </div>
      
    
  );
}

export default App;
