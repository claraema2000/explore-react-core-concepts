import './App.css'
import Counter from './Counter';
import Users from './users';
import Friends from './Friends';


function App() {
  function handleClick(){
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert("Second button clicked")
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts - 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Second Clicked</button>
      <button onClick={() => {alert('Third Clicked')}}>Third Click</button>
      {/* It's tricky */}
      <button onClick={() => addToFive(10)}>Fourth Click</button>
    </>
  )
}

export default App
