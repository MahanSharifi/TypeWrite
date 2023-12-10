import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typewriter from 'typewriter-effect';
<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div></div>

<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('So Julia, I think we deserve some food. Are you a sushi hater or lover? I could get your number and we can discuss business, what do you think?'
    )
      
      .pauseFor(2)
      .start();
  }}
/>
    </div>
  )
}

export default App
