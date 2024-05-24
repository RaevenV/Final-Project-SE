import EnrollButton from "../Enroll Button/enrollButton"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./moduleCart.css"

function ModuleCart (props){

    return(
        <>
        <div className="module-cart-container">
             <img src={props.img} alt="" className="module-picture"/>
             <div className="module-cart-detail">
                <div className="module-cart-title">{props.title}</div>
                <div className="module-cart-description">{props.description}</div>
                <div className="module-cart-footer">
                    <img src="rating-star.png" className="rating-star"/>
                    <div className="enroll-button-wrapper">
                        <EnrollButton link={props.link} text="Enroll" />
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default ModuleCart