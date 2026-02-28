import { useState } from 'react';
import { Download, Filter, MoreHorizontal, Eye } from 'lucide-react';

const MOCK_SALES = [
    { id: 'INV-2041', date: 'Oct 24, 2024', customer: 'John Doe', items: 3, total: 124.50, status: 'Paid' },
    { id: 'INV-2042', date: 'Oct 24, 2024', customer: 'Jane Smith', items: 1, total: 89.00, status: 'Pending' },
    { id: 'INV-2043', date: 'Oct 23, 2024', customer: 'Acme Corp', items: 12, total: 450.00, status: 'Paid' },
    { id: 'INV-2044', date: 'Oct 22, 2024', customer: 'Global Tech', items: 45, total: 1200.00, status: 'Processing' },
];

export default function Sales() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Sales & Invoices</h2>
                    <p className="text-muted">View and manage customer orders and payments.</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline"><Filter size={18} /> Filter</button>
                    <button className="btn btn-primary"><Download size={18} /> Export CSV</button>
                </div>
            </div>

            <div className="card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Items</th>
                                <th>Total Amout</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_SALES.map(sale => (
                                <tr key={sale.id}>
                                    <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{sale.id}</td>
                                    <td>{sale.date}</td>
                                    <td>{sale.customer}</td>
                                    <td>{sale.items} items</td>
                                    <td style={{ fontWeight: 600 }}>${sale.total.toFixed(2)}</td>
                                    <td>
                                        <span className={`badge ${sale.status === 'Paid' ? 'badge-success' :
                                                sale.status === 'Pending' ? 'badge-warning' : 'badge-primary'
                                            }`}>
                                            {sale.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button className="btn btn-outline" style={{ padding: 6 }} title="View Details"><Eye size={14} /></button>
                                            <button className="btn btn-outline" style={{ padding: 6 }}><MoreHorizontal size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
