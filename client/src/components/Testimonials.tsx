import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialsData } from "@/lib/testimonialsData";
import { useState } from "react";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  function getInitials(name: string) {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-mono mb-4 inline-block relative">
            <span className="text-[#00FF8C]">#</span> Testimonials
            <div className="h-1 w-36 bg-[#00FF8C] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">What colleagues and supervisors say about my work</p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="relative">
            <div className="bg-[#1A1A1A] bg-opacity-80 p-6 md:p-8 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]">
              <div className="flex items-start gap-5">
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-full bg-[#00FF8C]/20 flex items-center justify-center text-xl font-bold text-[#00FF8C]">
                    {getInitials(testimonialsData[activeIndex].name)}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Quote className="text-[#00FF8C] mr-2 w-8 h-8" />
                    <div className="w-16 h-1 bg-[#00FF8C] bg-opacity-30"></div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonialsData[activeIndex].testimonial}"
                  </p>
                  
                  <div className="border-t border-gray-800 pt-4 mt-4">
                    <p className="font-mono text-lg font-bold">{testimonialsData[activeIndex].name}</p>
                    <p className="text-sm text-gray-400">{testimonialsData[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-3">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#00FF8C]/50 flex items-center justify-center text-[#00FF8C] hover:bg-[#00FF8C]/10 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                &larr;
              </button>
              {testimonialsData.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-[#00FF8C]' : 'bg-gray-700 hover:bg-gray-600'
                  } transition-all duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#00FF8C]/50 flex items-center justify-center text-[#00FF8C] hover:bg-[#00FF8C]/10 transition-all duration-300"
                aria-label="Next testimonial"
              >
                &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}