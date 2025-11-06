import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // 🛒 Add item to cart
    const addToCart = (product) => {
        // duplicate checking
        const existing = cartItems.find((item) => item.alt === product.alt);

        if (existing) {
            
            setCartItems((prev) => // If exists, increase quantity
                prev.map((item) =>
                    item.alt === product.alt
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // Add new item
            setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        }
    };

    //  Remove item from cart
    const removeFromCart = (productAlt) => {
        setCartItems((prev) => prev.filter((item) => item.alt !== productAlt));
    };

    //  Clear all items
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total item
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);
