import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
function App() {

  const [click, setClick] = useState(0)
  return (
    <div>
      <Button name="disabled" disabled="true" />
      <br></br>
      <Button name="reset btn" type="reset" className="btn" />
      <br></br>
      <Button name="submit" type="submit" />
      <br></br>
      <Button name="large" className="large" />
      <br></br>
      <Button name="small"className="small"/><br></br>
      <Button name="medium"className="medium"
      /><br></br>
      <Button name="hover"className="hoverbtn"/><br></br>
      <Button name="click here :" click={click}
        className="countbtn"
        handleBtn={() => {
          setClick((click) => click + 1)
        }}
      /><br></br>


    </div>
  )
}

export default App
