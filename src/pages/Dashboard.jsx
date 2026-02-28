import { DollarSign, ShoppingBag, Users, TrendingUp, Package, Activity } from 'lucide-react';
import './Dashboard.css';

// Dummy KPI Data for Demo
const kpiData = [
    { title: "Today's Sales", amount: "$3,450.00", icon: DollarSign, trend: "+12.5%", color: "primary" },
    { title: "Total Revenue", amount: "$45,231.89", icon: Activity, trend: "+8.2%", color: "success" },
    { title: "Purchases", amount: "$12,305.00", icon: ShoppingBag, trend: "-2.4%", color: "warning" },
    { title: "Customers", amount: "1,245", icon: Users, trend: "+5.1%", color: "primary" },
    { title: "Stock Value", amount: "$89,432.00", icon: Package, trend: "+1.2%", color: "danger" },
    { title: "Net Profit", amount: "$18,450.50", icon: TrendingUp, trend: "+15.3%", color: "success" },
];

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="page-header">
                <div>
                    <h2>Dashboard</h2>
                    <p className="text-muted">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <button className="btn btn-primary">Download Report</button>
            </div>

            <div className="kpi-grid">
                {kpiData.map((kpi, idx) => (
                    <div key={idx} className="card kpi-card">
                        <div className={`kpi-icon bg-${kpi.color}-light text-${kpi.color}`}>
                            <kpi.icon size={24} />
                        </div>
                        <div className="kpi-info">
                            <span className="kpi-title">{kpi.title}</span>
                            <h3 className="kpi-amount">{kpi.amount}</h3>
                            <span className={`kpi-trend ${kpi.trend.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                                {kpi.trend} from last month
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-content-grid">
                {/* Charts Sections Placeholder */}
                <div className="card charts-card">
                    <div className="card-header">
                        <h3>Sales & Revenue Overview</h3>
                    </div>
                    <div className="chart-placeholder">
                        {/* Recharts will go here */}
                        <p className="text-muted">Line Chart Area</p>
                    </div>
                </div>

                <div className="card activity-card">
                    <div className="card-header">
                        <h3>Recent Transactions</h3>
                    </div>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#INV-2041</td>
                                    <td>John Doe</td>
                                    <td>$124.50</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>#INV-2042</td>
                                    <td>Jane Smith</td>
                                    <td>$89.00</td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>#INV-2043</td>
                                    <td>Acme Corp</td>
                                    <td>$450.00</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>#INV-2044</td>
                                    <td>Global Tech</td>
                                    <td>$1,200.00</td>
                                    <td><span className="badge badge-primary">Processing</span></td>
                                </tr>
                                <tr>
                                    <td>#INV-2045</td>
                                    <td>Sarah Connor</td>
                                    <td>$45.00</td>
                                    <td><span className="badge badge-danger">Failed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
