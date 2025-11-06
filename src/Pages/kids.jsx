import { NavLink } from "react-router-dom"
import { useCart } from "./CartContext"

export const products = [
    { img: "/Images/kidShitShort.png", alt: "short-shirt", price: "$150", details: "Clean, minimal, and ultra-soft — this white hoodie adds effortless style to any outfit." },
    { img: "/Images/kidShoes.png", alt: "purple-shoes", price: "$330", details: "Lightweight and durable — built for performance, comfort, and everyday adventures." },
    { img: "/Images/kidFrock.png", alt: "white-frock", price: "$450", details: "A bold touch of comfort — cozy warmth meets streetwear style in this green hoodie." },
    { img: "/Images/kid-suit.png", alt: "suit", price: "$500", details: "Stay warm in timeless fashion — soft knit design with a perfect winter feel." },
    { img: "/Images/kid-sunglasses.png", alt: "sunglasses", price: "$666", details: "Timeless elegance meets modern design — precise, stylish, and built to keep you ahead of every moment." },
    { img: "/Images/kid-shoes.png", alt: "branded-shoes", price: "$1500", details: "Sharp looks, clear vision — elevate your vibe with premium UV-protected shades." },
    { img: "/Images/new3.png", alt: "cap", price: "$870", details: "Perfect fit, all-day comfort — smart trousers made for work or weekend wear." },
    { img: "/Images/new2.png", alt: "bag", price: "$720", details: "Dress to impress — sleek design and luxury comfort for every celebration." },
    { img: "/Images/pink-frock.png", alt: "pink-frock", price: "$190", details: "Made with high-quality fabric and a relaxed fit, this orange hoodie offers the perfect balance of comfort and confidence. Ideal for casual days or chilly nights." },
    { img: "/Images/kidShoesPink.png", alt: "pink-shoes", price: "$258", details: "Made with high-quality fabric and a relaxed fit, this orange hoodie offers the perfect balance of comfort and confidence. Ideal for casual days or chilly nights." },

]

export const Kids = () => {

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
                                
                                <NavLink to={`/categories/kids/${i}`}>
                                    SHOP NOW
                                </NavLink>

                                <button onClick={() => addToCart(item)}>Add to Cart</button>

                            </div>



                        </div>
                    ))
                }
            </div>
        </>
    )
}















