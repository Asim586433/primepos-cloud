import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SaaSLayout from './layouts/SaaSLayout';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Login from './pages/auth/Login';
import RegisterWizard from './pages/auth/RegisterWizard';
import Products from './pages/Products';
import SettingsModule from './pages/Settings';
import Sales from './pages/Sales';

import Purchases from './pages/Purchases';
import Contacts from './pages/Contacts';
import Reports from './pages/Reports';
import HRM from './pages/HRM';
import Manufacturing from './pages/Manufacturing';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterWizard />} />

                <Route path="/" element={<SaaSLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="pos" element={<POS />} />
                    <Route path="products" element={<Products />} />
                    <Route path="sales" element={<Sales />} />
                    <Route path="purchases" element={<Purchases />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="hrm" element={<HRM />} />
                    <Route path="manufacturing" element={<Manufacturing />} />
                    <Route path="settings" element={<SettingsModule />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
