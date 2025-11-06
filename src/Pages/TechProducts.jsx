import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useCart } from "./CartContext"

// export the variable so TechProductDetails can fetch the details from here.
export const products = [
    { img: "/Images/gaming-laptop.png", alt: "gaming-laptop", price: "$250", details: "Unleash next-level performance — powered for speed, precision, and ultimate gaming domination." },
    { img: "/Images/gaming-mouse.png", alt: "gaming-mouse", price: "$550", details: "Engineered for precision and comfort — customizable buttons and ultra-responsive sensors for every move." },
    { img: "/Images/GPU.png", alt: "GPU", price: "$5550", details: "Experience stunning visuals and seamless gameplay — power your PC with cutting-edge graphics performance." },
    { img: "/Images/ipad.png", alt: "ipad", price: "$650", details: "Work, create, and play anywhere — sleek design meets powerful performance in every tap." },
    { img: "/Images/headphone-removebg.png", alt: "headphone", price: "$776", details: "Crystal-clear sound, deep bass, and all-day comfort — immerse yourself in pure audio bliss." },
    { img: "/Images/gamingCpu.png", alt: "gaming-gpu", price: "$950", details: "Push the limits — ultra-fast frame rates, realistic ray tracing, and performance built for pro gamers." },
    { img: "/Images/iphone.png", alt: "iphone", price: "$950", details: "Innovation in your hands — lightning-fast performance, brilliant display, and a camera that captures life perfectly." },
    { img: "/Images/sound-system.png", alt: "sound-system", price: "$990", details: "Feel the power of premium sound — rich bass, clear vocals, and surround experience for your home." },
    { img: "/Images/gaming-remote.png", alt: "gaming-remote", price: "$350", details: "Precision control meets comfort — dominate every match with a responsive, ergonomic gaming remote." },
]

export const TechProducts = () => {

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

                                <NavLink to={`/categories/tech-products/${i}`}>
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















