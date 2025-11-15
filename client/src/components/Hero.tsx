import { motion } from "framer-motion";
import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const name = useTypewriter("VEDANT BHALERAO", 100);
  const title = useTypewriter("Graduate student at the University of Maryland", 50, 1200);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 mx-auto p-2 border border-[#00FF8C] rounded-lg bg-[#1A1A1A] bg-opacity-70"
        >
          <p className="font-mono text-sm text-[#00FF8C]">// cybersecurity professional</p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono text-white"
        >
          {name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-xl md:text-2xl font-light text-gray-300">
            <span className="terminal-text">{title}</span>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="terminal-window bg-[#1A1A1A] bg-opacity-80 p-4 md:p-6 rounded-lg max-w-3xl mx-auto mb-8 text-left border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
        >
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
            <span className="ml-4 text-sm text-gray-400 font-mono">vedant@security:~</span>
          </div>
          <div className="font-mono text-sm md:text-base">
            <p className="mb-2"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">./get_profile.sh</span></p>
            <p className="mb-1 text-white">Cybersecurity professional with expertise in:</p>
            <p className="mb-1 text-white"><span className="text-[#00FF8C]">{'>'}</span> Cloud Security (AWS, Azure, Google Cloud)</p>
            <p className="mb-1 text-white"><span className="text-[#00FF8C]">{'>'}</span> Vulnerability Assessment</p>
            <p className="mb-1 text-white"><span className="text-[#00FF8C]">{'>'}</span> Penetration Testing</p>
            <p className="mb-1 text-white"><span className="text-[#00FF8C]">{'>'}</span> Threat Intelligence</p>
            <p className="mb-3 text-white"><span className="text-[#00FF8C]">{'>'}</span> Endpoint Security</p>
            <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">echo $LOCATION</span></p>
            <p className="mb-3 text-white">College Park, United States</p>
            <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">cat contact.txt</span></p>
            <p className="mb-1 text-white">E: vedantbhalerao315@gmail.com</p>
            <p className="mb-1 flex items-center">
              <span className="mr-2 text-white">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/vedantb31/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0066CC] hover:text-[#00FF8C] transition-colors duration-300"
              >
                linkedin.com/in/vedantb31
              </a>
            </p>
            <p className="mb-1 flex items-center">
              <span className="mr-2 text-white">GitHub:</span>
              <a 
                href="https://github.com/codingvedant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6e5494] hover:text-[#00FF8C] transition-colors duration-300"
              >
                github.com/codingvedant
              </a>
            </p>
            <p className="mb-3 flex items-center">
              <span className="mr-2 text-white">X.com:</span>
              <a 
                href="https://x.com/vedantb31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-[#00FF8C] transition-colors duration-300"
              >
                x.com/vedantb31
              </a>
            </p>
            <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">echo $RESUME</span></p>
            <p className="mb-1 flex items-center">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FF8C] hover:underline transition-colors duration-300 cursor-pointer"
              >
                /resume.pdf
              </a>
              <span className="ml-2 text-gray-500 text-sm">(click to view)</span>
            </p>
            <p className="mb-1 mt-3">
              <span className="text-[#00FF8C]">$</span> <span className="text-white">_</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#about" 
              className="px-8 py-3 bg-[#1A1A1A] border border-[#00FF8C] rounded-md hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300 font-mono text-white"
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-[#0066CC] rounded-md hover:bg-[#0066CC] transition-all duration-300 font-mono text-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
