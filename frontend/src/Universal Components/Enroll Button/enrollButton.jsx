import {Link} from "react-router-dom";
import "./enrollButton.css"
import { useNavigate } from "react-router-dom";

function EnrollButton(props){
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(props.link);
    console.log(props.link)
  }

  return (
      <>
      <button className="enroll-button" onClick={handleClick}>
        <div className="enroll-button-link">
          {props.text}
        </div>  
      </button>

    </>
  )
}    

export default EnrollButton