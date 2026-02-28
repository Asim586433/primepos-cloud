import { useState } from 'react';
import { Search, Plus, Filter, Mail, Phone, Edit, Trash } from 'lucide-react';

const MOCK_CONTACTS = [
    { id: 1, name: 'John Doe', type: 'Customer', phone: '+1 234-567-8900', email: 'john@example.com', totalSpent: 1240.50 },
    { id: 2, name: 'Fresh Foods Co.', type: 'Supplier', phone: '+1 987-654-3210', email: 'orders@freshfoods.com', totalSpent: 0 },
    { id: 3, name: 'Jane Smith', type: 'Customer', phone: '+1 555-123-4567', email: 'jane@example.com', totalSpent: 450.00 },
    { id: 4, name: 'Global Packaging', type: 'Supplier', phone: '+1 888-999-0000', email: 'sales@globalpkg.com', totalSpent: 0 },
];

export default function Contacts() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredContacts = MOCK_CONTACTS.filter(c => activeTab === 'All' || c.type === activeTab);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Contacts Directory</h2>
                    <p className="text-muted">Manage your customers and suppliers.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Add Contact</button>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button className={`btn ${activeTab === 'All' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('All')}>All</button>
                        <button className={`btn ${activeTab === 'Customer' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('Customer')}>Customers</button>
                        <button className={`btn ${activeTab === 'Supplier' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveTab('Supplier')}>Suppliers</button>
                    </div>

                    <div className="search-bar" style={{ width: 300, backgroundColor: 'transparent', padding: '8px 12px' }}>
                        <Search size={18} className="text-muted" />
                        <input type="text" placeholder="Search contacts..." className="pos-search-input" />
                    </div>
                </div>

                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Contact Info</th>
                                <th>{activeTab === 'Supplier' ? 'Total Ordered' : 'Total Spent'}</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map(contact => (
                                <tr key={contact.id}>
                                    <td style={{ fontWeight: 500 }}>{contact.name}</td>
                                    <td>
                                        <span className={`badge ${contact.type === 'Customer' ? 'badge-primary' : 'badge-warning'}`}>
                                            {contact.type}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13 }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={12} className="text-muted" /> {contact.phone}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={12} className="text-muted" /> {contact.email}</span>
                                        </div>
                                    </td>
                                    <td style={{ fontWeight: 600 }}>
                                        {contact.type === 'Customer' ? `$${contact.totalSpent.toFixed(2)}` : '-'}
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
            </div>
        </div>
    );
}
