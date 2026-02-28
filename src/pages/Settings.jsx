import { Settings, User, Building, Receipt, Scale } from 'lucide-react';
import { useState } from 'react';

export default function SettingsModule() {
    const [activeTab, setActiveTab] = useState('subscription');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Platform Settings</h2>
                    <p className="text-muted">Manage your business configuration, users, and subscription.</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                {/* Settings Sidebar */}
                <div className="card" style={{ width: 240, padding: 8, flexShrink: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <button
                            className={`btn ${activeTab === 'business' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: activeTab === 'business' ? 'none' : '1px solid transparent' }}
                            onClick={() => setActiveTab('business')}
                        >
                            <Building size={16} /> Business Settings
                        </button>
                        <button
                            className={`btn ${activeTab === 'tax' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: activeTab === 'tax' ? 'none' : '1px solid transparent' }}
                            onClick={() => setActiveTab('tax')}
                        >
                            <Scale size={16} /> Tax Settings
                        </button>
                        <button
                            className={`btn ${activeTab === 'invoice' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: activeTab === 'invoice' ? 'none' : '1px solid transparent' }}
                            onClick={() => setActiveTab('invoice')}
                        >
                            <Receipt size={16} /> Invoice Settings
                        </button>
                        <button
                            className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: activeTab === 'users' ? 'none' : '1px solid transparent' }}
                            onClick={() => setActiveTab('users')}
                        >
                            <User size={16} /> User Management
                        </button>
                        <button
                            className={`btn ${activeTab === 'subscription' ? 'btn-primary' : 'btn-outline'}`}
                            style={{ justifyContent: 'flex-start', border: activeTab === 'subscription' ? 'none' : '1px solid transparent' }}
                            onClick={() => setActiveTab('subscription')}
                        >
                            <Settings size={16} /> Subscription
                        </button>
                    </div>
                </div>

                {/* Settings Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {activeTab === 'subscription' ? (
                        <>
                            <div className="card">
                                <h3>Current Plan: <span className="text-primary">Professional</span></h3>
                                <p className="text-muted" style={{ marginBottom: 16 }}>Your next billing cycle is on Dec 1, 2024.</p>

                                <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                                    <div style={{ flex: 1, padding: 16, backgroundColor: 'var(--color-background)', borderRadius: 8 }}>
                                        <div className="text-muted" style={{ fontSize: 13, marginBottom: 8 }}>Branches Used</div>
                                        <div style={{ fontWeight: 600, fontSize: 18 }}>2 / 5</div>
                                    </div>
                                    <div style={{ flex: 1, padding: 16, backgroundColor: 'var(--color-background)', borderRadius: 8 }}>
                                        <div className="text-muted" style={{ fontSize: 13, marginBottom: 8 }}>Users Used</div>
                                        <div style={{ fontWeight: 600, fontSize: 18 }}>12 / 20</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: 8 }}>
                                    <button className="btn btn-primary">Upgrade Plan</button>
                                    <button className="btn btn-outline" style={{ color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }}>Cancel Subscription</button>
                                </div>
                            </div>

                            <div className="card">
                                <h3>Available Plans</h3>
                                <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
                                    <div style={{ flex: 1, padding: 24, border: '1px solid var(--color-border)', borderRadius: 12 }}>
                                        <h4>Starter</h4>
                                        <p style={{ fontSize: 24, fontWeight: 'bold', margin: '12px 0' }}>$49<span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>/mo</span></p>
                                        <ul style={{ paddingLeft: 20, color: 'var(--color-text-muted)', marginBottom: 24, fontSize: 13 }}>
                                            <li>1 Branch</li>
                                            <li>3 Users</li>
                                            <li>Basic POS</li>
                                        </ul>
                                        <button className="btn btn-outline" style={{ width: '100%' }}>Downgrade</button>
                                    </div>

                                    <div style={{ flex: 1, padding: 24, border: '2px solid var(--color-primary)', borderRadius: 12, position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'white', padding: '4px 12px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>CURRENT</div>
                                        <h4>Professional</h4>
                                        <p style={{ fontSize: 24, fontWeight: 'bold', margin: '12px 0', color: 'var(--color-primary)' }}>$99<span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>/mo</span></p>
                                        <ul style={{ paddingLeft: 20, color: 'var(--color-text-muted)', marginBottom: 24, fontSize: 13 }}>
                                            <li>5 Branches</li>
                                            <li>20 Users</li>
                                            <li>Advanced POS & Inventory</li>
                                        </ul>
                                        <button className="btn btn-primary" style={{ width: '100%' }} disabled>Active</button>
                                    </div>

                                    <div style={{ flex: 1, padding: 24, border: '1px solid var(--color-border)', borderRadius: 12 }}>
                                        <h4>Enterprise</h4>
                                        <p style={{ fontSize: 24, fontWeight: 'bold', margin: '12px 0' }}>$249<span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>/mo</span></p>
                                        <ul style={{ paddingLeft: 20, color: 'var(--color-text-muted)', marginBottom: 24, fontSize: 13 }}>
                                            <li>Unlimited Branches</li>
                                            <li>Unlimited Users</li>
                                            <li>Custom ERP Integrations</li>
                                        </ul>
                                        <button className="btn btn-primary" style={{ width: '100%' }}>Upgrade</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="card" style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
                            <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h3>
                            <p>Configuration options for {activeTab} will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
