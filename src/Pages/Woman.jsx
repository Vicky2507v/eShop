import { NavLink } from "react-router-dom"
import { useCart } from "./CartContext"

export const products = [
    { img: "/Images/Girl-hoodie-1.png", alt: "girl-pink-hoodie", price: "$250", details: "Soft, cozy, and cute — this pink hoodie keeps you warm in style with a relaxed fit and plush comfort." },
    { img: "/Images/p4.png", alt: "girl-black-hoodie", price: "$550", details: "Bold and effortless — a sleek black hoodie that pairs perfectly with any casual or sporty look." },
    { img: "/Images/skirt.png", alt: "skirt", price: "$5550", details: "Chic and flowy — designed for comfort and confidence, perfect for daily wear or casual outings." },
    { img: "/Images/womenJacket.png", alt: "women-Jacket", price: "$650", details: "Stay warm and stylish — crafted with premium fabric for a modern, elegant outerwear statement." },
    { img: "/Images/womenMiddie.png", alt: "women-midy", price: "$776", details: "Graceful and modern — this midi dress blends comfort and charm for every occasion." },
    { img: "/Images/womenCoat.png", alt: "women-Coat", price: "$950", details: "Tailored sophistication meets all-day comfort — elevate your outfit with this beautifully crafted women’s coat." },
    { img: "/Images/womenSaree_2.png", alt: "womenSaree_2", price: "$950", details: "Elegance redefined — beautifully draped with intricate detailing, perfect for festive and formal wear." },
    { img: "/Images/featured1.png", alt: "purple-shoes", price: "$990", details: "Step into confidence — trendy purple sneakers that add a vibrant pop to any outfit." },
    { img: "/Images/womenKurta_.png", alt: "kurta", price: "$350", details: "Classic meets comfort — a stylish kurta made from breathable fabric for timeless ethnic charm." },
]

export const Woman = () => {

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

                                <NavLink to={`/categories/womans/${i}`}>
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















