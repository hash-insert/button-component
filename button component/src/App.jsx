import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import button from './button'

function App() {
 
    return (
      <div className='App'>
        <form>
        <button 
        type="submit"
        className='submit'>
        Submit
        </button>
        <button 
        type="reset"
        className='reset'>
        Reset
        </button>
        <button type='default'
        className='default'>
        Default
        </button>
        <button type='large'
        className='large'>
        Large
        </button>
        <button type='small'
        className='small'>
          Small
        </button>
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
        </form>
      </div>
    )

}



export default App;
