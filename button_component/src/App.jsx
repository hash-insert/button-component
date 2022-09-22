import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [click, setClick] = useState(0)
  const [typing, setTyping] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
     
      <Button 
      name="disabled"
     
      disabled="true"
      />
      <Button 
      name="reset btn"
     type="reset"
      
      className="btn"

      />
      <Button 
      name="submit"
     type="submit"
      />
       <Button 
      name="large"
     className="large"
      />
        <Button 
      name="small"
     className="small"
      />
        <Button 
      name="medium"
     className="medium"
      />
        <Button 
      name="hover"
     className="btn1"
     
      />
         <Button 
      name="click here :"
      click= {click}
     className="btn2"
    handleBtn= {()=>{
      setClick((click) => click + 1)
    console.log(click)}}
   />
   
      
    </div>
  )
}

export default App
