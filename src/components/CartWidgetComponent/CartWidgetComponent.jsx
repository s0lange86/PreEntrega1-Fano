import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {
    return (
        <div style={{color:"white"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: "0.8em", fontSize:"1.1em"}}/>
            <span style={{fontWeight:700}}>5</span>
        </div>
    )
}

export default CartWidgetComponent