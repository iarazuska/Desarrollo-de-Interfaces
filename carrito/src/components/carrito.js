import React, { useState, useEffect } from 'react';
import '../App.css';

function Carrito() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/articulos_navidenos.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Datos cargados:", data);  // Esto mostrará los datos en la consola.
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchItems();
    }, []);


    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad + 1 } : cartItem));
        } else {
            setCart([...cart, { ...item, cantidad: 1 }]);
        }
    };

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    };

    return (
        <div className='carrito'>
            <h1>Artículos de Navidad</h1>
            <button onClick={toggleCart} className='cart-button'>
                Ver carrito ({cart.length})
            </button>
            {isCartVisible && (
                <div className='cart-overlay' onClick={toggleCart}>
                    <div className='cart-modal' onClick={(e) => e.stopPropagation()}>
                        <h2>Carrito de la Compra</h2>
                        {cart.length > 0 ? (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>{item.nombre} - ${item.precio} (x{item.cantidad})</li>
                                ))}
                            </ul>
                        ) : (
                            <p>El carrito está vacío</p>
                        )}
                        <button onClick={toggleCart} className='close-button'>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
            <div className='productos'>
                {items.map((item) => (
                    <div key={item.id} className='card'>
                        <h3>{item.nombre}</h3>
                        <p>{item.descripcion}</p>
                        <p>${item.precio}</p>
                        <button onClick={() => addToCart(item)} className="add-button">
                            Añadir al Carrito
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Carrito;
