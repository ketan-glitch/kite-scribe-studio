import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("contact_messages").insert([formData]);
      if (error) throw error;
      await fetch(import.meta.env.VITE_SUPABASE_URL + "/functions/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(formData),
      });
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  const contactInfo = [
    { icon: Phone, label: siteConfig.phone },
    { icon: Mail, label: siteConfig.email },
    { icon: MapPin, label: siteConfig.location },
  ];

  const inputClass = "w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kite-blue/20 focus:border-kite-blue/40 transition-all duration-300";

  return (
    <section id="contact" className="py-28 px-6 bg-section-alt">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {contactInfo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-kite-blue/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-kite-blue" />
                </div>
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
            </div>
            <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-all duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
