import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-gray-400 text-sm">
              <span className="text-[#00FF8C]">&copy;</span> {new Date().getFullYear()} Vedant Bhalerao. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
