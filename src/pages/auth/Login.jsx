import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import './Auth.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy login, redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="auth-layout">
            <div className="auth-card card">
                <div className="auth-header">
                    <div className="logo-icon-large">P</div>
                    <h2>PrimePOS Cloud</h2>
                    <p className="text-muted">Smart Business. Simplified.</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <div className="input-with-icon">
                            <Mail size={18} className="input-icon text-muted" />
                            <input
                                type="email"
                                className="input-field pl-10"
                                placeholder="admin@primepos.cloud"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon text-muted" />
                            <input
                                type="password"
                                className="input-field pl-10"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="auth-options">
                        <label className="checkbox-label">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        <LogIn size={18} /> Sign In
                    </button>
                </form>

                <div className="auth-divider">
                    <span>or Demo Accounts</span>
                </div>

                <div className="demo-accounts">
                    <button className="btn btn-outline btn-block" onClick={() => navigate('/dashboard')}>
                        Super Admin Demo
                    </button>
                    <button className="btn btn-outline btn-block" onClick={() => navigate('/pos')}>
                        Cashier Demo (POS)
                    </button>
                </div>

                <div className="auth-footer">
                    <p className="text-muted">
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
