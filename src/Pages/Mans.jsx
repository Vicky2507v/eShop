import { NavLink } from "react-router-dom"
import { useCart } from "./CartContext"

export const products = [
    { img: "/Images/new-hoodie-removebg.png", alt: "white-hoodie", price: "$150", details: "Clean, minimal, and ultra-soft — this white hoodie adds effortless style to any outfit." },
    { img: "/Images/newShoes.png", alt: "spots-shoes", price: "$530", details: "Lightweight and durable — built for performance, comfort, and everyday adventures." },
    { img: "/Images/shop1.png", alt: "green-hoodie", price: "$540", details: "A bold touch of comfort — cozy warmth meets streetwear style in this green hoodie." },
    { img: "/Images/newWinterSweater.png", alt: "winter-sweater", price: "$600", details: "Stay warm in timeless fashion — soft knit design with a perfect winter feel." },
    { img: "/Images/menWatch.png", alt: "watch", price: "$876", details: "Timeless elegance meets modern design — precise, stylish, and built to keep you ahead of every moment." },
    { img: "/Images/sunglasses.png", alt: "sunglasses", price: "$955", details: "Sharp looks, clear vision — elevate your vibe with premium UV-protected shades." },
    { img: "/Images/touserMen.png", alt: "trouser", price: "$750", details: "Perfect fit, all-day comfort — smart trousers made for work or weekend wear." },
    { img: "/Images/new1.png", alt: "party-shoes", price: "$955", details: "Dress to impress — sleek design and luxury comfort for every celebration." },
    { img: "/Images/shop6.png", alt: "orange-hoodie", price: "$1000", details: "Made with high-quality fabric and a relaxed fit, this orange hoodie offers the perfect balance of comfort and confidence. Ideal for casual days or chilly nights." },
    { img: "/Images/shop4.png", alt: "white-hoodie", price: "$950", details: "Soft, versatile, and effortlessly cool — your go-to essential for every season." },
    { img: "/Images/newBlueJeans.png", alt: "red-shoes", price: "$680", details: "Bold and confident — take every step in style with these standout red kicks." },
    { img: "/Images/blackJeans.png", alt: "black-baggy-pant", price: "$600", details: "Street-style ready — relaxed, trendy, and made for unmatched comfort." },

]

export const Mans = () => {

    const { addToCart } = useCart();

    return (
        <>
            <div className="main-product-grid">
                {
                    products.map((item, i) => (
                        <div key={i} className="card">

                            <div className="main-product-img">
                                <img src={item.img} alt={item.alt}></img>
                            </div>

                            <div className="main-product-details">
                                <p>{item.details}</p>
                                <p>Price: - {item.price}</p>

                                <NavLink to={`/categories/man/${i}`}>
                                    SHOP NOW
                                </NavLink>

                                <button onClick={() => addToCart(item)}>Add to Cart </button>

                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}















