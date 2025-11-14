import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { testimonialsData } from "@/lib/testimonialsData";
import { useTheme } from "@/hooks/useTheme";
import { ChevronLeft, ChevronRight, BookOpen, ExternalLink, Calendar, Clock } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  
  const nextBlog = () => {
    setActiveIndex((activeIndex + 1) % testimonialsData.length);
  };
  
  const prevBlog = () => {
    setActiveIndex((activeIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  return (
    <section id="blog" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative text-white">
            <span className="text-[#00FF8C]">#</span> Blog
            <div className="h-1 w-24 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className={`max-w-2xl mx-auto theme-text`}>Articles and insights on cybersecurity, cloud security, and ethical hacking</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.a
                key={activeIndex}
                href={testimonialsData[activeIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block p-8 rounded-lg mb-10 border border-[#00FF8C]/20 bg-[#1A1A1A] bg-opacity-80 shadow-[0_0_15px_rgba(0,255,140,0.1)] hover:border-[#00FF8C] hover:shadow-[0_0_20px_rgba(0,255,140,0.2)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-[#00FF8C]/10 border border-[#00FF8C]/30">
                    <BookOpen className="w-8 h-8 text-[#00FF8C]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-mono font-semibold text-white group-hover:text-[#00FF8C] transition-colors mb-2">
                          {testimonialsData[activeIndex].title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {testimonialsData[activeIndex].description}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#00FF8C] transition-colors flex-shrink-0 ml-4" />
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{testimonialsData[activeIndex].date}</span>
                      </div>
                      {testimonialsData[activeIndex].readTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{testimonialsData[activeIndex].readTime}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-[#00FF8C]/10 text-[#00FF8C] border border-[#00FF8C]/30">
                        {testimonialsData[activeIndex].platform}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </AnimatePresence>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonialsData.map((_, index) => (
                <button 
                  key={index} 
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#00FF8C] w-8' 
                      : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 w-3' : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to blog ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevBlog}
                className="p-2 rounded-full bg-transparent border border-[#00FF8C]/30 text-[#00FF8C] hover:bg-[#00FF8C]/10 flex items-center justify-center"
                aria-label="Previous blog"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextBlog}
                className="p-2 rounded-full bg-transparent border border-[#00FF8C]/30 text-[#00FF8C] hover:bg-[#00FF8C]/10 flex items-center justify-center"
                aria-label="Next blog"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
