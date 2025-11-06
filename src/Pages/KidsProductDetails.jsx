import { useNavigate, useParams } from "react-router-dom";
import { products } from "./kids";
import { CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";


export const KidsProductDetails = () => {

    const { productId } = useParams();
    const finalDetails = products[productId];
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    if (!finalDetails) {
        return (
            <section className="detail-page-wrapper">

                <div className="product-not-found">
                    <h2>product Not found</h2>
                    <p>Sorry, we couldn't find the product you're looking for.</p>
                </div>

            </section>
        )
    }

    return (
        <>
            <section className="detail-page-wrapper">

                <div className="goBack-btn" onClick={handleGoBack}>
                    <FaArrowAltCircleLeft />
                </div>


                <div className="product-card">
                    <div className="product-img">
                        <img src={finalDetails.img} alt={finalDetails.alt || finalDetails.details}></img>
                    </div>

                    <div className="product-detail">
                        <p className="detail-price">{finalDetails.details}</p>
                        <p className="detail-name">{finalDetails.price}</p>

                    </div>

                    <div className="add-to-cart">
                        Add to Cart<CiShoppingCart size={24} />
                    </div>

                </div>
            </section>

            <section className="other">

                <div className="other-details">

                    <div className="emi-section">
                        <GiCash /> <br />
                        <p> Quick pay in 3 EMIs </p>
                    </div>

                    <div className="free-shipping-section">
                        <CiDeliveryTruck /><br />
                        <p>Free Shipping Above 999$</p>
                    </div>

                    <div className="cash-on-delivery">
                        <FaIndianRupeeSign /><br />
                        <p>Cash on Delivery available</p>
                    </div>

                    <div className="customer-care">
                        < RiCustomerService2Fill /><br />
                        <p> 100% Genuine Brand New & Genuine </p>
                    </div>

                </div>
            </section>

        </>
    )
}