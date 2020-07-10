import React from 'react';
import './App.css';
//import Greet from './components/greet';
//import Welcome from './components/welcome';
//import Hello from './components/hello'
//import Message from './components/message'
//import Counter from './components/counter'
//import Functionclick from './components/functionclick'
//import Classclick from './components/classclick'
//import Eventbind from './components/eventbind'
//import Parentcomponent from './components/parentcomponent' 
//import Usergreeting from './components/usergreeting'
// import Namelist from './components/nameList'
//import Form from './components/form'
import LifecycleA from './components/lifecycleA'

function App() {
  return (
    <div className="App">

     <LifecycleA />
        
        {/*
          <Form />
        <Namelist />
        <Usergreeting />
        <Parentcomponent />
       {/* <Eventbind />
            */}
          {/* <Functionclick />
           <Classclick />
           /* /* < Counter />
            <Message />
           <Hello lastname=" Roy">
            <p>Your age is 22 Years</p>
          </Hello>
          <Greet name="abhishek" lastname=" kumar">
            <p>Your age is 31 Years</p>
          </Greet>
          <Greet name="Ram" lastname=" singh">
            <button>show</button>
          <p>
            Your Age is 32 Years
          </p></Greet>
          <Welcome name='one'/>
          <Welcome name='two' />
          <Welcome name='three' /> }  */}
    </div>
  );
}

export default App;
