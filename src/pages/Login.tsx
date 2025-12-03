import { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Zap, ArrowRight, Chrome, Facebook, Apple } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); toast({ title: "Welcome back!", description: "You have successfully logged in." }); }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"><Zap className="w-7 h-7 text-primary-foreground" /></div>
            <span className="text-3xl font-bold gradient-text">Techhy</span>
          </Link>
          <p className="text-muted-foreground mt-4">Welcome back! Sign in to continue</p>
        </div>
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /></div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" /><input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 bg-input border border-border rounded-lg focus:outline-none focus:border-primary" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button></div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent flex items-center justify-center gap-2 disabled:opacity-70">
              {isLoading ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> : <>Sign In <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
          <div className="relative my-8"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div><div className="relative flex justify-center text-sm"><span className="px-4 bg-card text-muted-foreground">Or continue with</span></div></div>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center py-3 bg-input border border-border rounded-lg hover:border-primary/50"><Chrome className="w-5 h-5" /></button>
            <button className="flex items-center justify-center py-3 bg-input border border-border rounded-lg hover:border-primary/50"><Facebook className="w-5 h-5" /></button>
            <button className="flex items-center justify-center py-3 bg-input border border-border rounded-lg hover:border-primary/50"><Apple className="w-5 h-5" /></button>
          </div>
          <p className="text-center mt-8 text-muted-foreground">Don't have an account? <Link to="/register" className="text-primary font-semibold">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;