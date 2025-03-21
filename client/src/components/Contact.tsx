import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Link as LinkIcon } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-[#1A1A1A] bg-opacity-70 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Get In Touch
            <div className="h-1 w-32 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Interested in working together? Let's connect!</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1A1A1A] bg-opacity-80 p-6 rounded-lg mb-8 border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">contact.sh</span>
              </div>
              
              <div className="font-mono text-sm">
                <p className="mb-2"><span className="text-[#00FF8C]">$</span> <span className="text-white">./send_message.sh</span></p>
                <p className="mb-4">Initiating secure contact protocol...</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-[#00FF8C] mb-1">NAME:</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#00FF8C] mb-1">EMAIL:</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#00FF8C] mb-1">SUBJECT:</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#00FF8C] mb-1">MESSAGE:</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded p-2 focus:border-[#00FF8C] focus:outline-none text-white resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#00FF8C] text-[#1A1A1A] font-mono font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
                
                <p className="mt-4">
                  <span className="text-[#00FF8C]">$</span> <span className="text-white">_</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <MapPin className="text-[#00FF8C] mr-2" /> Location
              </h3>
              <p className="text-gray-300 mb-2">Ahmedabad, Gujarat, India</p>
              <p className="text-gray-400 text-sm">Available for remote work globally</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <Mail className="text-[#00FF8C] mr-2" /> Email
              </h3>
              <a 
                href="mailto:fxrhanansari@gmail.com" 
                className="text-gray-300 hover:text-[#00FF8C] transition-colors duration-300"
              >
                fxrhanansari@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-xl font-semibold mb-4 flex items-center">
                <LinkIcon className="text-[#00FF8C] mr-2" /> Social
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ansari-farhan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}