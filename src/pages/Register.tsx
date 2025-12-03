import { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Zap, ArrowRight, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', password: '', confirmPassword: '', agreeTerms: false });
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'One number', met: /\d/.test(formData.password) },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) { toast({ title: "Passwords don't match", variant: "destructive" }); return; }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); toast({ title: "Account created!", description: "Welcome to Techhy!" }); }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"><Zap className="w-7 h-7 text-primary-foreground" /></div>
            <span className="text-3xl font-bold gradient-text">Techhy</span>
          </Link>
          <p className="text-muted-foreground mt-4">Create your account to get started</p>
        </div>
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2"><label className="text-sm font-medium">Full Name</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /></div></div>
            <div className="space-y-2"><label className="text-sm font-medium">Email Address</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /></div></div>
            <div className="space-y-2"><label className="text-sm font-medium">Phone Number</label><div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" /></div></div>
            <div className="space-y-2"><label className="text-sm font-medium">Password</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" className="w-full pl-12 pr-12 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button></div>
              {formData.password && <div className="mt-3 p-3 bg-secondary/30 rounded-lg space-y-2">{passwordRequirements.map((req, i) => <div key={i} className="flex items-center gap-2 text-xs">{req.met ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-muted-foreground" />}<span className={req.met ? 'text-green-400' : 'text-muted-foreground'}>{req.label}</span></div>)}</div>}
            </div>
            <div className="space-y-2"><label className="text-sm font-medium">Confirm Password</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /></div></div>
            <label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-1 w-4 h-4 rounded" /><span className="text-sm text-muted-foreground">I agree to the <Link to="/terms" className="text-primary">Terms</Link> and <Link to="/privacy" className="text-primary">Privacy Policy</Link></span></label>
            <button type="submit" disabled={isLoading} className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground bg-gradient-to-r from-accent to-primary flex items-center justify-center gap-2 disabled:opacity-70">
              {isLoading ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> : <>Create Account <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
          <p className="text-center mt-6 text-muted-foreground">Already have an account? <Link to="/login" className="text-primary font-semibold">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;