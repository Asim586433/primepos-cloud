import { Box, Factory, ClipboardList, PenTool, Plus, Play, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const MOCK_ORDERS = [
    { id: 'PROD-001', product: 'Premium Coffee Blend', date: 'Oct 25, 2024', quantity: 50, status: 'In Progress', progress: 65 },
    { id: 'PROD-002', product: 'Signature House Salad', date: 'Oct 25, 2024', quantity: 120, status: 'Planned', progress: 0 },
    { id: 'PROD-003', product: 'Fresh Baked Muffins', date: 'Oct 24, 2024', quantity: 200, status: 'Completed', progress: 100 },
];

export default function Manufacturing() {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Manufacturing & Production</h2>
                    <p className="text-muted">Manage bill of materials (BOM), production cycles, and raw materials.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> New Production Run</button>
            </div>

            <div className="card" style={{ padding: 0 }}>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', padding: '0 16px' }}>
                    <button
                        className={`btn ${activeTab === 'orders' ? 'active' : ''}`}
                        style={{
                            borderRadius: 0,
                            borderBottom: activeTab === 'orders' ? '2px solid var(--color-primary)' : '2px solid transparent',
                            background: 'transparent',
                            color: activeTab === 'orders' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            padding: '16px 24px',
                            border: 'none',
                            fontWeight: activeTab === 'orders' ? 600 : 500
                        }}
                        onClick={() => setActiveTab('orders')}
                    >
                        <Factory size={16} /> Production Orders
                    </button>
                    <button
                        className={`btn ${activeTab === 'bom' ? 'active' : ''}`}
                        style={{
                            borderRadius: 0,
                            borderBottom: activeTab === 'bom' ? '2px solid var(--color-primary)' : '2px solid transparent',
                            background: 'transparent',
                            color: activeTab === 'bom' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            padding: '16px 24px',
                            border: 'none',
                            fontWeight: activeTab === 'bom' ? 600 : 500
                        }}
                        onClick={() => setActiveTab('bom')}
                    >
                        <ClipboardList size={16} /> Bill of Materials (BOM)
                    </button>
                    <button
                        className={`btn ${activeTab === 'raw' ? 'active' : ''}`}
                        style={{
                            borderRadius: 0,
                            borderBottom: activeTab === 'raw' ? '2px solid var(--color-primary)' : '2px solid transparent',
                            background: 'transparent',
                            color: activeTab === 'raw' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            padding: '16px 24px',
                            border: 'none',
                            fontWeight: activeTab === 'raw' ? 600 : 500
                        }}
                        onClick={() => setActiveTab('raw')}
                    >
                        <Box size={16} /> Raw Materials
                    </button>
                </div>

                <div style={{ padding: '24px' }}>
                    {activeTab === 'orders' && (
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Product</th>
                                        <th>Target Quantity</th>
                                        <th>Due Date</th>
                                        <th>Progress</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MOCK_ORDERS.map(order => (
                                        <tr key={order.id}>
                                            <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{order.id}</td>
                                            <td style={{ fontWeight: 500 }}>{order.product}</td>
                                            <td>{order.quantity} Units</td>
                                            <td>{order.date}</td>
                                            <td style={{ minWidth: 200 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                    <div style={{ flex: 1, height: 6, backgroundColor: 'var(--color-background)', borderRadius: 3, overflow: 'hidden' }}>
                                                        <div style={{ width: `${order.progress}%`, height: '100%', backgroundColor: order.progress === 100 ? 'var(--color-success)' : 'var(--color-primary)', transition: 'width 0.3s ease' }} />
                                                    </div>
                                                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)', minWidth: 35 }}>{order.progress}%</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge ${order.status === 'Completed' ? 'badge-success' :
                                                        order.status === 'In Progress' ? 'badge-primary' : 'badge-warning'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: 8 }}>
                                                    {order.status === 'Planned' && <button className="btn btn-outline" style={{ padding: 6, color: 'var(--color-success)', borderColor: 'rgba(22, 163, 74, 0.2)' }} title="Start Production"><Play size={14} /></button>}
                                                    {order.status === 'In Progress' && <button className="btn btn-outline" style={{ padding: 6 }} title="Log Output"><PenTool size={14} /></button>}
                                                    {order.status === 'Completed' && <button className="btn btn-outline" style={{ padding: 6, color: 'var(--color-text-muted)' }} disabled><CheckCircle size={14} /></button>}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab !== 'orders' && (
                        <div style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
                            <h3>{activeTab === 'bom' ? 'Bill of Materials' : 'Raw Materials'} List</h3>
                            <p>Items will be listed here. Configure your components to track manufacturing usage accurately.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
