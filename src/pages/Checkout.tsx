import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Check, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '', country: 'United States' });
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-display mb-4">Your Cart is Empty</h1>
          <Link to="/products" className="btn-primary">Shop Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/cart" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"><ChevronLeft className="w-5 h-5" /> Back to Cart</Link>
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium mb-2">First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="input-field w-full" /></div>
                  <div><label className="block text-sm font-medium mb-2">Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="input-field w-full" /></div>
                  <div><label className="block text-sm font-medium mb-2">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field w-full" /></div>
                  <div><label className="block text-sm font-medium mb-2">Phone *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-field w-full" /></div>
                </div>
              </div>
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium mb-2">Street Address *</label><input type="text" name="address" value={formData.address} onChange={handleChange} required className="input-field w-full" /></div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium mb-2">City *</label><input type="text" name="city" value={formData.city} onChange={handleChange} required className="input-field w-full" /></div>
                    <div><label className="block text-sm font-medium mb-2">State *</label><input type="text" name="state" value={formData.state} onChange={handleChange} required className="input-field w-full" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium mb-2">ZIP Code *</label><input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="input-field w-full" /></div>
                    <div><label className="block text-sm font-medium mb-2">Country</label><select name="country" value={formData.country} onChange={handleChange} className="input-field w-full"><option>United States</option><option>Canada</option></select></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 text-center"><CreditCard className="w-6 h-6 mx-auto mb-2 text-primary" /><p className="text-sm font-medium">Secure Payment</p></div>
                <div className="glass-card p-4 text-center"><Truck className="w-6 h-6 mx-auto mb-2 text-primary" /><p className="text-sm font-medium">Fast Delivery</p></div>
                <div className="glass-card p-4 text-center"><Shield className="w-6 h-6 mx-auto mb-2 text-primary" /><p className="text-sm font-medium">Buyer Protection</p></div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-28">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0"><p className="font-medium truncate">{item.name}</p><p className="text-sm text-muted-foreground">Qty: {item.quantity}</p></div>
                      <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                </div>
                <div className="border-t border-border pt-4 mb-6"><div className="flex justify-between text-xl font-bold"><span>Total</span><span className="gradient-text">${total.toFixed(2)}</span></div></div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> : <><Check className="w-5 h-5" /> Place Order</>}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;