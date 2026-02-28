import { Menu, Search, Bell, MapPin, Moon, Sun, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ toggleSidebar, toggleTheme, isDarkMode }) {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="nav-btn" onClick={toggleSidebar}>
                    <Menu size={20} />
                </button>

                <div className="location-switcher">
                    <MapPin size={16} className="text-muted" />
                    <span className="font-medium">Main Branch (New York)</span>
                </div>
            </div>

            <div className="navbar-right">
                <button className="nav-btn search-btn">
                    <Search size={18} />
                    <span className="search-placeholder hidden-mobile">Search everything... (Ctrl+K)</span>
                </button>

                <button className="nav-btn pos-btn">
                    Checkout (POS)
                </button>

                <button className="nav-btn" onClick={toggleTheme} title="Toggle Dark Mode">
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="notification-wrapper">
                    <button className="nav-btn">
                        <Bell size={20} />
                        <span className="badge-indicator"></span>
                    </button>
                </div>

                <div className="profile-dropdown">
                    <div className="avatar">
                        <User size={18} />
                    </div>
                    <div className="profile-info hidden-mobile">
                        <span className="profile-name">Admin User</span>
                        <span className="profile-role">Super Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
