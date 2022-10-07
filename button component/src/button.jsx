import './button.css'

function button(props) {
    return (
        <div> 
            <button onClick={() => console.log("clicked")}></button>
        </div>
    )
}
export default button;