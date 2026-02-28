import { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Edit, Trash } from 'lucide-react';

const MOCK_PRODUCTS = [
    { id: 'PRD-001', name: 'Burger Classic', sku: 'FOOD-001', category: 'Food', stock: 120, price: 8.99, status: 'Active' },
    { id: 'PRD-002', name: 'Cheese Pizza', sku: 'FOOD-002', category: 'Food', stock: 45, price: 14.50, status: 'Active' },
    { id: 'PRD-003', name: 'Coca Cola', sku: 'BEV-001', category: 'Beverage', stock: 300, price: 2.50, status: 'Active' },
    { id: 'PRD-004', name: 'Special Sauce', sku: 'ING-001', category: 'Ingredients', stock: 0, price: 1.50, status: 'Out of Stock' },
];

export default function Products() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Products Management</h2>
                    <p className="text-muted">Manage your inventory, pricing, and stock alerts.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Add Product</button>
            </div>

            <div className="card">
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div className="search-bar" style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <Search size={18} className="text-muted" />
                        <input type="text" placeholder="Search by name, SKU, or category..." className="pos-search-input" />
                    </div>
                    <button className="btn btn-outline"><Filter size={18} /> Filters</button>
                </div>

                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Info</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_PRODUCTS.map(prd => (
                                <tr key={prd.id}>
                                    <td>
                                        <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                                            📦
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ fontWeight: 500 }}>{prd.name}</div>
                                        <div className="text-muted" style={{ fontSize: 12 }}>{prd.sku}</div>
                                    </td>
                                    <td>{prd.category}</td>
                                    <td>
                                        <span style={{ color: prd.stock === 0 ? 'var(--color-danger)' : 'inherit', fontWeight: prd.stock === 0 ? 600 : 400 }}>
                                            {prd.stock} Units
                                        </span>
                                    </td>
                                    <td style={{ fontWeight: 600 }}>${prd.price.toFixed(2)}</td>
                                    <td>
                                        <span className={`badge ${prd.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                                            {prd.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button className="btn btn-outline" style={{ padding: 6 }}><Edit size={14} /></button>
                                            <button className="btn btn-outline" style={{ padding: 6, color: 'var(--color-danger)', borderColor: 'rgba(220,38,38,0.2)' }}><Trash size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
                    <span className="text-muted" style={{ fontSize: 13 }}>Showing 1 to 4 of 4 entries</span>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button className="btn btn-outline" disabled>Previous</button>
                        <button className="btn btn-outline" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
