import React from 'react';
import './App.css';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
//import FRParentInput from './components/FRParentInput';
//import PortalsDemo from './components/PortalsDemo';
//import RefsDemo from './components/RefsDemo';
//import Focusfile from './components/Focusfile';
// import Fragmentdemo from './components/fragmentdemo';
// import Column from './components/Column';
//import PureComp from './components/PureComp';
//import ParentComp from './components/ParentComp';
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
//import LifecycleA from './components/lifecycleA'

function App() {
  return (
    <div className="App">
        <ClickCounter name="Prince" />
        <HoverCounter  name="Prince"/>
        {/*
         <ErrorBoundary>
        <Hero heroName="superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="joker"/>
        </ErrorBoundary>
        <PortalsDemo />
        <FRParentInput />
        <Focusfile />
         <RefsDemo />
        <ParentComp />
        <Fragmentdemo />
       <Column />
     <LifecycleA />
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
