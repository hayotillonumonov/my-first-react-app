// style
import "./Modal.css"

function Modal(props) {
  console.log(props);
  return (
     
    <div className="modal-backdrop">
        <div className="modal">
           {props.children}
        </div>
    </div>
  )
}

export default Modal