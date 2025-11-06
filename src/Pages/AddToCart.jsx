import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"
import { FaArrowLeft } from "react-icons/fa";

export const AddToCart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const navigate = useNavigate();

    const handleGoBackButton = () => {
        navigate(-1);
    }

    

    if (cartItems.length === 0) {
        return (
            <>
                <div className="back-button">
                    <FaArrowLeft onClick={() => { handleGoBackButton() }} />
                </div>
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p> currently your cart is empty, start shopping now !! </p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="cart-container">

                <div className="back-button">
                    <FaArrowLeft onClick={() => { handleGoBackButton() }} />
                </div>

                <div className="cart-item">
                    {
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-card">
                                <img src={item.img} alt={item.alt} width={100}></img>
                                <div className="cart-details">
                                    <h4>{item.details}</h4>
                                    <p className="cart-price">Price: <span> {item.price} </span></p>
                                    <p>Qty: <strong>{item.quantity}</strong></p>

                                    <button onClick={() => removeFromCart(item.alt)} className="remove-btn">Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
            </div>
        </>
    )
}