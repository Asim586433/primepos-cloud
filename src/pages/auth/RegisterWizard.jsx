import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Store, User, CheckCircle2 } from 'lucide-react';
import './Auth.css';

export default function RegisterWizard() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const nextStep = (e) => {
        e.preventDefault();
        if (step < 3) setStep(step + 1);
        else navigate('/dashboard');
    };

    const prevStep = () => setStep(step - 1);

    return (
        <div className="auth-layout">
            <div className="auth-card card wizard-card">
                <div className="wizard-progress">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>
                        <div className="step-icon"><Building size={16} /></div>
                        <span className="step-label">Business Info</span>
                    </div>
                    <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>
                        <div className="step-icon"><Store size={16} /></div>
                        <span className="step-label">Settings</span>
                    </div>
                    <div className={`step-line ${step >= 3 ? 'active' : ''}`} />
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-icon"><User size={16} /></div>
                        <span className="step-label">Owner Profile</span>
                    </div>
                </div>

                <form onSubmit={nextStep} className="auth-form wizard-form">
                    {step === 1 && (
                        <div className="wizard-step-content">
                            <h3>Business Information</h3>
                            <p className="text-muted mb-4">Let's start with your company details.</p>

                            <div className="input-group">
                                <label className="input-label">Business Name</label>
                                <input type="text" className="input-field" placeholder="Acme Store LLC" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Business Industry</label>
                                <select className="input-field" required>
                                    <option value="">Select Industry...</option>
                                    <option value="retail">Retail</option>
                                    <option value="restaurant">Restaurant / Cafe</option>
                                    <option value="services">Services</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="wizard-step-content">
                            <h3>System Settings</h3>
                            <p className="text-muted mb-4">Configure your localization and currency.</p>

                            <div className="input-group">
                                <label className="input-label">Default Currency</label>
                                <select className="input-field" required>
                                    <option value="USD">USD ($)</option>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="GBP">GBP (£)</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label className="input-label">Timezone</label>
                                <select className="input-field" required>
                                    <option value="UTC">UTC</option>
                                    <option value="EST">EST</option>
                                    <option value="PST">PST</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="wizard-step-content">
                            <h3>Owner Profile</h3>
                            <p className="text-muted mb-4">Create your super admin account.</p>

                            <div className="input-group">
                                <label className="input-label">Full Name</label>
                                <input type="text" className="input-field" placeholder="John Doe" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Email Address</label>
                                <input type="email" className="input-field" placeholder="john@acme.com" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Password</label>
                                <input type="password" className="input-field" placeholder="••••••••" required />
                            </div>
                        </div>
                    )}

                    <div className="wizard-actions">
                        {step > 1 ? (
                            <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                        ) : (
                            <div /> // Spacer
                        )}
                        <button type="submit" className="btn btn-primary">
                            {step === 3 ? (
                                <><CheckCircle2 size={18} /> Complete Setup</>
                            ) : 'Continue'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
