import {Link} from "react-router-dom";
import "./enrollButton.css"

function enrollButton(props){
    return (
        <>
        <div className="enroll-button">
          <Link to={props.link} className="enroll-button-link">
            {props.text}
          </Link>  
        </div>
      </>
    )
}    

export default enrollButton