import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Us', info: 'hello@techhy.com', desc: "We'll respond within 24 hours" },
    { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567', desc: 'Mon-Fri 9am-6pm PST' },
    { icon: MapPin, title: 'Visit Us', info: '123 Tech Street', desc: 'Silicon Valley, CA 94025' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-6">Contact Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions? Our team is here to help.</p>
        </div>
      </section>
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (<div key={index} className="glass-card-hover p-6 text-center"><div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><item.icon className="w-7 h-7 text-primary" /></div><h3 className="font-semibold text-lg mb-1">{item.title}</h3><p className="text-foreground font-medium">{item.info}</p><p className="text-muted-foreground text-sm">{item.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6"><MessageSquare className="w-6 h-6 text-primary" /><h2 className="text-2xl font-semibold">Send a Message</h2></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-2">Your Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field w-full" /></div>
                <div><label className="block text-sm font-medium mb-2">Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field w-full" /></div>
              </div>
              <div><label className="block text-sm font-medium mb-2">Subject *</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="input-field w-full" /></div>
              <div><label className="block text-sm font-medium mb-2">Message *</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-field w-full resize-none" /></div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> : <><Send className="w-5 h-5" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;