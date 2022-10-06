import React from 'react'
import './Button.css';
function Button(props) {
  return (

    <div>
    <button className={props.className} type={props.type} disabled={props.disabled} onClick={props.handleBtn}>{props.name}{props.typing}{props.click}</button>
</div>
  )
}

export default Button