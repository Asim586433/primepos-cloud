import { Users, Clock, CalendarDays, KeySquare, Plus } from 'lucide-react';

const MOCK_EMPLOYEES = [
    { id: 'EMP-001', name: 'John Admin', role: 'Store Manager', status: 'Active', clock: 'Clocked In', hours: '32h 15m' },
    { id: 'EMP-002', name: 'Sarah Cashier', role: 'Cashier', status: 'Active', clock: 'Clocked Out', hours: '28h 45m' },
    { id: 'EMP-003', name: 'Mike Kitchen', role: 'Staff', status: 'Active', clock: 'Clocked In', hours: '40h 00m' },
    { id: 'EMP-004', name: 'Emily Support', role: 'Cashier', status: 'On Leave', clock: '-', hours: '0h 00m' },
];

export default function HRM() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Human Resources (HRM)</h2>
                    <p className="text-muted">Manage staff, roles, and attendance tracking.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Add Employee</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                <div className="card" style={{ padding: '16px' }}>
                    <div className="text-muted" style={{ fontSize: 13, marginBottom: 4 }}>Total Staff</div>
                    <div style={{ fontSize: 24, fontWeight: 'bold' }}>24</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div className="text-muted" style={{ fontSize: 13, marginBottom: 4 }}>Present Today</div>
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--color-success)' }}>18</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div className="text-muted" style={{ fontSize: 13, marginBottom: 4 }}>On Leave</div>
                    <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--color-warning)' }}>2</div>
                </div>
                <div className="card" style={{ padding: '16px' }}>
                    <div className="text-muted" style={{ fontSize: 13, marginBottom: 4 }}>Pending Payroll</div>
                    <div style={{ fontSize: 24, fontWeight: 'bold' }}>$8,450</div>
                </div>
            </div>

            <div className="card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee Info</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Current Shift</th>
                                <th>Weekly Hours</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_EMPLOYEES.map(emp => (
                                <tr key={emp.id}>
                                    <td>
                                        <div style={{ fontWeight: 500 }}>{emp.name}</div>
                                        <div className="text-muted" style={{ fontSize: 12 }}>{emp.id}</div>
                                    </td>
                                    <td>{emp.role}</td>
                                    <td>
                                        <span className={`badge ${emp.status === 'Active' ? 'badge-success' : 'badge-warning'
                                            }`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge ${emp.clock === 'Clocked In' ? 'badge-primary' : 'badge-outline'
                                            }`} style={{ border: emp.clock !== 'Clocked In' ? '1px solid var(--color-border)' : 'none', color: emp.clock !== 'Clocked In' ? 'var(--color-text-muted)' : 'inherit' }}>
                                            {emp.clock}
                                        </span>
                                    </td>
                                    <td style={{ fontWeight: 500 }}>{emp.hours}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            <button className="btn btn-outline" style={{ padding: 6 }} title="Schedule"><CalendarDays size={14} /></button>
                                            <button className="btn btn-outline" style={{ padding: 6 }} title="Permissions"><KeySquare size={14} /></button>
                                            <button className="btn btn-outline" style={{ padding: 6 }} title="Time Log"><Clock size={14} /></button>
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
