import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './SaaSLayout.css';

export default function SaaSLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    };

    return (
        <div className={`saas-layout ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <Sidebar collapsed={sidebarCollapsed} />
            <div className="main-wrapper">
                <Navbar
                    toggleSidebar={toggleSidebar}
                    toggleTheme={toggleTheme}
                    isDarkMode={isDarkMode}
                />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
