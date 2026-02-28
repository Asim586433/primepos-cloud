import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download } from 'lucide-react';

const salesData = [
    { name: 'Mon', sales: 4000, profit: 2400 },
    { name: 'Tue', sales: 3000, profit: 1398 },
    { name: 'Wed', sales: 2000, profit: 9800 },
    { name: 'Thu', sales: 2780, profit: 3908 },
    { name: 'Fri', sales: 1890, profit: 4800 },
    { name: 'Sat', sales: 2390, profit: 3800 },
    { name: 'Sun', sales: 3490, profit: 4300 },
];

const categoryData = [
    { name: 'Food', value: 400 },
    { name: 'Beverage', value: 300 },
    { name: 'Sides', value: 300 },
    { name: 'Dessert', value: 200 },
];

const COLORS = ['#2563EB', '#16A34A', '#F59E0B', '#DC2626'];

export default function Reports() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Business Reports</h2>
                    <p className="text-muted">Analytics, trends, and financial summaries.</p>
                </div>
                <button className="btn btn-primary"><Download size={18} /> Export PDF</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '16px' }}>Weekly Sales vs Profit</h3>
                    <div style={{ height: 300, width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                                <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: 8, color: 'var(--color-text-dark)' }}
                                    itemStyle={{ color: 'var(--color-text-dark)' }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="profit" stroke="var(--color-success)" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '16px' }}>Sales by Category</h3>
                    <div style={{ height: 300, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: 8 }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '16px' }}>Tax Report (Current Month)</h3>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tax Name</th>
                                <th>Rate</th>
                                <th>Taxable Amount</th>
                                <th>Tax Collected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>VAT / GST</td>
                                <td>8.00%</td>
                                <td>$45,230.00</td>
                                <td style={{ fontWeight: 600 }}>$3,618.40</td>
                            </tr>
                            <tr>
                                <td>Local Tax</td>
                                <td>2.00%</td>
                                <td>$45,230.00</td>
                                <td style={{ fontWeight: 600 }}>$904.60</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}>
                                <td colSpan="3" style={{ textAlign: 'right', fontWeight: 600 }}>Total Tax Liability</td>
                                <td style={{ fontWeight: 700, color: 'var(--color-danger)' }}>$4,523.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
