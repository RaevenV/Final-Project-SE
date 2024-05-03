import EnrollButton from "../Enroll Button/enrollButton"
import "./moduleCart.css"

function moduleCart (props){
    return(
        <>
        <div className="module-cart-container">
             <img src={props.img} alt="" className="module-picture"/>
             <div className="module-cart-detail">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
                <div className="module-cart-footer">
                    <img src="rating-star.png" alt="" className="rating-star"/>
                    <div className="enroll-button-wrapper">
                        <EnrollButton link="/" text="Enroll"/>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default moduleCart