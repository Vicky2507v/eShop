import { NavLink } from "react-router-dom"

export const Home = () => {

    const newArrival = [
        { img: "./Images/p8.png", alt: "multicolor-hoodie", price: "150$", details: "Designed with a blend of comfort and creativity, this multicolor hoodie features soft fleece fabric, durable stitching, and a relaxed fit that makes it perfect for daily wear" },
        { img: "./Images/GPU.png", alt: "gpu", price: "1500$", details: "Built on advanced architecture, the latest GPU redefines performance with higher clock speeds, efficient cooling, and support for real-time ray tracing — perfect for gamers, streamers, and 3D creators." },
        { img: "./Images/shop6.png", alt: "orange-hoodie", price: "125$", details: "Made with high-quality fabric and a relaxed fit, this orange hoodie offers the perfect balance of comfort and confidence. Ideal for casual days or chilly nights." },
        { img: "./Images/oven.png", alt: "oven", price: "150$", details: "Featuring smart controls, multiple power levels, and a spacious interior — this microwave oven combines performance and convenience for effortless cooking." },
        { img: "./Images/new3.png", alt: "cap", price: "15$", details: "Complete your look with this versatile head cap — a perfect blend of style, comfort, and attitude" },
        { img: "./Images/womenCoat.png", alt: "new-winter-coat", price: "190$", details: "Tailored sophistication meets all-day comfort — elevate your outfit with this beautifully crafted women’s coat." },
        { img: "./Images/kidShitShort.png", alt: "new-kid-cloth", price: "250$", details: "Bright designs, comfy fit — let your little one shine in this stylish shirt and short combo." },
        { img: "./Images/washingMachine.png", alt: "washing-machine", price: "150$", details: "Experience powerful cleaning with advanced technology — this washing machine delivers spotless clothes with every wash." },
    ]

    return (
        <>
            <div>
                <div className="part-A">
                    <div className="section-1">
                        <div className="pic-1">
                            <img src="./Images/tv.png" alt="latest-tv"></img>
                            <NavLink to="/categories/tech-products"> SHOP NOW </NavLink>
                        </div>
                        <div className="pic-2">
                            <img src="./Images/featured2.png" alt="latest-shoes"></img>
                            <NavLink to="/categories/man"> SHOP NOW </NavLink>
                        </div>
                    </div>

                    <div className="section-2">
                        <div className="pic-3">
                            <img src="./Images/womenMiddie.png" alt="red-saree"></img>
                            <NavLink to="/categories/womans"> SHOP NOW </NavLink>
                        </div>
                        <div className="pic-4">
                            <img src="./Images/samsung-phone.png" alt="samsung-S24"></img>
                            <NavLink to="/categories/tech-products"> SHOP NOW </NavLink>
                        </div>
                    </div>
                </div>

                <div className="part-B">
                    <div className="section-3">
                        <div className="pic-5">
                            <img src="./Images/ipad.png" alt="brand-new-man-sweater"></img>
                            <NavLink to="/categories/tech-products"> SHOP NOW </NavLink>
                        </div>
                        <div className="pic-6">
                            <img src="./Images/new2.png" alt="latest-headphones"></img>
                            <NavLink to="/categories/kids"> SHOP NOW </NavLink>
                        </div>
                    </div>

                    <div className="section-4">
                        <div className="pic-7">
                            <img src="./Images/kid-shoes.png" alt="pink-shoes"></img>
                            <NavLink to="/categories/kids"> SHOP NOW </NavLink>
                        </div>
                        <div className="pic-8">
                            <img src="./Images/womenSaree_1.png" alt="latest-hoodie"></img>
                            <NavLink to="/categories/womans"> SHOP NOW </NavLink>
                        </div>
                    </div>
                </div>

                <section className="middle-section">
                    <div>
                        <h4>New Arrival</h4>
                    </div>
                    <div className="product-grid">
                        {
                            newArrival.map((item, i) => (
                                <div key={i} className="card">
                                    <div className="product-img">
                                        <img src={item.img} alt={item.alt}></img>
                                    </div>

                                    <div className="product-details">
                                        <p>{item.details}</p>
                                        <p>Price: - {item.price}</p>
                                        <NavLink to={item.img}>
                                            SHOP NOW 
                                        </NavLink>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </section>

            </div>
        </>
    )
}