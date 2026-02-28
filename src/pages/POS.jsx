import { useState } from 'react';
import { Search, Filter, ShoppingCart, Trash2, Plus, Minus, CreditCard, Banknote } from 'lucide-react';
import './POS.css';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Burger Classic', price: 8.99, image: '🍔', category: 'Food' },
    { id: 2, name: 'Cheese Pizza', price: 14.50, image: '🍕', category: 'Food' },
    { id: 3, name: 'Coca Cola', price: 2.50, image: '🥤', category: 'Beverage' },
    { id: 4, name: 'Coffee', price: 3.00, image: '☕', category: 'Beverage' },
    { id: 5, name: 'French Fries', price: 4.99, image: '🍟', category: 'Sides' },
    { id: 6, name: 'Ice Cream', price: 5.50, image: '🍦', category: 'Dessert' },
    { id: 7, name: 'Salad Bowl', price: 7.99, image: '🥗', category: 'Food' },
    { id: 8, name: 'Muffin', price: 3.50, image: '🧁', category: 'Dessert' },
];

const CATEGORIES = ['All', 'Food', 'Beverage', 'Sides', 'Dessert'];

export default function POS() {
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = MOCK_PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const updateQty = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.qty + delta);
                return { ...item, qty: newQty };
            }
            return item;
        }).filter(item => item.qty > 0));
    };

    const removeItem = (id) => updateQty(id, -999);

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    return (
        <div className="pos-layout">
            {/* LEFT: Product Grid */}
            <div className="pos-main">
                <div className="pos-header card">
                    <div className="search-bar">
                        <Search size={20} className="text-muted" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pos-search-input"
                        />
                    </div>
                    <div className="category-filters">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="card product-card" onClick={() => addToCart(product)}>
                            <div className="product-image-container">
                                <span className="product-emoji">{product.image}</span>
                            </div>
                            <div className="product-info">
                                <span className="product-name">{product.name}</span>
                                <span className="product-price">${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="no-products">No products found.</div>
                    )}
                </div>
            </div>

            {/* RIGHT: Sticky Cart */}
            <div className="pos-sidebar card">
                <div className="cart-header">
                    <h3>Current Order</h3>
                    <span className="badge badge-primary">{cart.length} items</span>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingCart size={48} className="text-muted" style={{ opacity: 0.5, marginBottom: 16 }} />
                            <p className="text-muted">Cart is empty</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                                <div className="cart-item-controls">
                                    <button className="qty-btn" onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                                    <span className="qty-value">{item.qty}</span>
                                    <button className="qty-btn" onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                                    <button className="remove-btn" onClick={() => removeItem(item.id)}><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span className="text-muted">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span className="text-muted">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="summary-row summary-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="cart-actions">
                    <div className="payment-methods">
                        <button className="btn btn-outline payment-btn active"><Banknote size={18} /> Cash</button>
                        <button className="btn btn-outline payment-btn"><CreditCard size={18} /> Card</button>
                    </div>
                    <button className="btn btn-primary btn-block checkout-btn" disabled={cart.length === 0}>
                        Complete Sale
                    </button>
                </div>
            </div>
        </div>
    );
}
