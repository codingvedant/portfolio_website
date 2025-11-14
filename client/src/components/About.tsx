import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cloud, 
  AlertTriangle, 
  Monitor, 
  Code,
  ShieldAlert
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 transition-all duration-500">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2 relative text-white">
                <span className="text-[#00FF8C]">#</span> About Me
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-8 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <p className="mb-6 text-gray-300">
              I believe security and technology to be a form of creative expression, a way to build systems that are powerful, safe, resilient, and meaningful. Whether it’s defending applications, securing cloud environments, or analyzing threats, I enjoy crafting solutions that make technology a little more trustworthy for everyone. I’m always trying to sharpen my craft and hopefully leave behind a few masterpieces along the way.
              </p>
              
              <p className="mb-6 text-gray-300">
              Outside of work, I love sharing what I learn through cybersecurity and CTF walkthrough blogs on Medium, contributing to the wider security community while refining my own understanding.
              </p>

              <p className="mb-6 text-gray-300">
              In my spare time, I enjoy sharpening my skills on platforms like TryHackMe and HackTheBox, playing sports, exploring hiking trails, or occasionally binging some anime.
              </p>

              <p className="mb-6 text-gray-300">
              I’m always excited to connect with people who share similar interests or just want to chat about anything tech or security. Feel free to reach out and say hi!
              </p>
              
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <ShieldCheck />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Security Analysis</h3>
                <p className="text-sm text-gray-400">Experienced in vulnerability assessment and penetration testing</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Cloud />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Cloud Security</h3>
                <p className="text-sm text-gray-400">Expertise in AWS security implementations</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <AlertTriangle />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Threat Intelligence</h3>
                <p className="text-sm text-gray-400">Proactive identification and mitigation of security threats</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                variants={itemVariants}
              >
                <div className="text-[#00FF8C] text-2xl mb-2">
                  <Monitor />
                </div>
                <h3 className="font-mono font-semibold mb-2 text-white">Endpoint Security</h3>
                <p className="text-sm text-gray-400">Implementation of robust endpoint protection solutions</p>
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div className="mb-6 inline-block" variants={itemVariants}>
              <h2 className="text-3xl font-bold font-mono mb-2 text-white">
                <span className="text-[#00FF8C]">#</span> Education
                <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
              </h2>
            </motion.div>
            
            <motion.div 
              className="mb-6 bg-[#1A1A1A] bg-opacity-80 p-4 rounded-lg border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl mb-2 text-white">
                  <span className="text-[#00FF8C]">{'>'}</span> Master of Engineering, Cybersecurity
                </h3>
                <p className="text-gray-400 mb-1">University of Maryland, College Park</p>
                <p className="text-sm mb-1 text-white">College Park, Maryland</p>
              </div>
              
              <div>
                <h3 className="font-mono text-xl mb-2 text-white">
                  <span className="text-[#00FF8C]">{'>'}</span> Bachelor of Technology, Computer Science and Engineering with Specialization in Information Security
                </h3>
                <p className="text-gray-400 mb-1">Vellore Institute of Technology, Vellore</p>
                <p className="text-sm mb-1 text-white">Vellore, Tamil Nadu</p>
              </div>
            </motion.div>
            
            <div>
              <motion.div className="mb-6 inline-block" variants={itemVariants}>
                <h2 className="text-3xl font-bold font-mono mb-2 text-white">
                  <span className="text-[#00FF8C]">#</span> Projects
                  <div className="h-1 w-24 bg-[#00FF8C] mt-2"></div>
                </h2>
              </motion.div>
              
              <div className="grid gap-4">
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1 text-white">Cloud-Based Security Operations Center Development, AWS</h3>
                      <p className="text-sm text-gray-400 mb-2">May 2025</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <Cloud />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                  Built a cloud-native SOC using AWS services to enable real-time threat monitoring and log analysis for multiple security data sources. Improved cloud visibility and detection accuracy by integrating CloudTrail and VPC Flow Logs into a centralized monitoring pipeline.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1 text-white">AI-Enabled Incident Response Automation, Azure</h3>
                      <p className="text-sm text-gray-400 mb-2">Member | Jun 2016 – Jun 2017</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <ShieldAlert />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                  Developed AI-assisted incident response workflows in Microsoft Sentinel, automating triage and analysis of security events across cloud environments. Enhanced response efficiency with custom analytics rules and automated playbooks, reducing manual investigation time.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-4 border border-gray-800 rounded-lg hover:border-[#00FF8C] transition-all duration-300 bg-[#1A1A1A] bg-opacity-80"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-mono font-semibold mb-1 text-white">Vit Foodies – Interactive E-Menu Website</h3>
                      <p className="text-sm text-gray-400 mb-2">Member | Jun 2016 – Jun 2017</p>
                    </div>
                    <div className="text-[#00FF8C] text-xl">
                      <Code />
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                  Designed and developed a full-stack interactive E-Menu platform using the MERN stack, enabling seamless browsing, ordering, and cart management for users. Delivered a responsive and visually engaging UI with React and Bootstrap, improving user experience across desktop and mobile devices.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
