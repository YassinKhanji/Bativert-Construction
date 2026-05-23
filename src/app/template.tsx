"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // We want to skip the animation on the server so it doesn't flash incorrectly
  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#1F2E25] flex items-center justify-center">
        <div className="relative w-48 h-20 opacity-0"></div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1F2E25] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1], // Custom easing for a smooth, premium slide
          delay: 0.5 
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
          className="relative w-48 h-20"
        >
          <Image 
            src="/logo.png" 
            alt="Bativert Logo" 
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
      
      {/* Page Content Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.6 
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
