import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard, ShoppingCart, BarChart3, Package,
    Users, Receipt, Archive, FileText, Briefcase,
    Settings, Building2
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/pos', label: 'POS', icon: ShoppingCart },
    { path: '/sales', label: 'Sales', icon: Receipt },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/purchases', label: 'Purchases', icon: Archive },
    { path: '/contacts', label: 'Contacts', icon: Users },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/hrm', label: 'HRM', icon: Briefcase },
    { path: '/manufacturing', label: 'Manufacturing', icon: Building2 },
    { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ collapsed }) {
    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-icon">P</div>
                {!collapsed && <span className="logo-text">PrimePOS</span>}
            </div>

            <div className="sidebar-menu">
                <span className="menu-label">{!collapsed ? 'MAIN MENU' : '...'}</span>
                <nav>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            title={collapsed ? item.label : ''}
                        >
                            <item.icon className="nav-icon" size={20} />
                            {!collapsed && <span className="nav-label">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
