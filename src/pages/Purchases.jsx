import { Plus, Filter, Download, Eye, MoreHorizontal } from 'lucide-react';

const MOCK_PURCHASES = [
    { id: 'PO-1001', date: 'Oct 23, 2024', supplier: 'Fresh Foods Co.', items: 12, total: 450.00, status: 'Received' },
    { id: 'PO-1002', date: 'Oct 24, 2024', supplier: 'Global Packaging', items: 3, total: 120.50, status: 'Ordered' },
    { id: 'PO-1003', date: 'Oct 25, 2024', supplier: 'Beverage Distrib', items: 24, total: 890.00, status: 'Pending' },
    { id: 'PO-1004', date: 'Oct 25, 2024', supplier: 'Local Farms', items: 5, total: 65.00, status: 'Received' },
];

export default function Purchases() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Purchase Orders</h2>
                    <p className="text-muted">Manage supplier orders and inventory restocking.</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline"><Filter size={18} /> Filter</button>
                    <button className="btn btn-primary"><Plus size={18} /> New Order</button>
                </div>
            </div>

            <div className="card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>PO Number</th>
                                <th>Date</th>
                                <th>Supplier</th>
                                <th>Items</th>
                                <th>Total Cost</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_PURCHASES.map(po => (
                                <tr key={po.id}>
                                    <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{po.id}</td>
                                    <td>{po.date}</td>
                                    <td>{po.supplier}</td>
                                    <td>{po.items} items</td>
                                    <td style={{ fontWeight: 600 }}>${po.total.toFixed(2)}</td>
                                    <td>
                                        <span className={`badge ${po.status === 'Received' ? 'badge-success' :
                                                po.status === 'Ordered' ? 'badge-primary' : 'badge-warning'
                                            }`}>
                                            {po.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button className="btn btn-outline" style={{ padding: 6 }} title="View Details"><Eye size={14} /></button>
                                            <button className="btn btn-outline" style={{ padding: 6 }}><Download size={14} /></button>
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
