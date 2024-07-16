import { useState } from "react";
import './App.css';
import FeatureCard from "./ components/FeatureCard/FeatureCard"; 
import Login from "./ components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  return (
  <>
    <h1>Buy Stuff</h1>
{/*     <div style={{ display: "flex", justifyContent: "space-between" }}>
      <FeatureCard 
        title="Feature 1"
        description="Blah"
        />
      <FeatureCard 
        title="Feature 2"
        description="Blah Blah"
        />
      <FeatureCard 
        title="Feature 3"
        description="Blah Blah Blah"
        />
      </div> */}
      <Button count={count} setCount={setCount}/>
{/*      {isLoggedIn ? <p>Hello, User!</p> : <Login setIsLoggedIn={setIsLoggedIn} />} */}
    </>
  );
}

function Button({count, setCount}) {
  return <button onClick={() => setCount(count + 1)}>{count}</button>; 
}

export default App;
