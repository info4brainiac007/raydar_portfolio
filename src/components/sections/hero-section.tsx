"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Animation variants for enhanced loading effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.8
    }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.8
    }
  }
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  }
};

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="relative h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 3-Part Background Split with Animation */}
      <motion.div 
        className="absolute inset-0 flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Left 35% - bg-color */}
        <motion.div 
          className="w-[40vw] h-full" 
          style={{ backgroundColor: 'var(--background)' }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
        {/* Center 30% - main-color */}
        <motion.div 
          className="w-[20vw] h-full" 
          style={{ backgroundColor: 'var(--primary)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
        {/* Right 35% - bg-color */}
        <motion.div 
          className="w-[40vw] h-full" 
          style={{ backgroundColor: 'var(--background)' }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </motion.div>

 
     

      {/* Main Content Layout */}
      <motion.div 
        className="relative z-10 h-full flex"
        variants={containerVariants}
      >
        {/* Left Strip - 50% vw */}
        <div className="w-[32vw] flex flex-col justify-center items-center px-8">
          <motion.div
            className="space-y-6 text-center max-w-md"
            variants={slideInLeft}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: 'var(--primary)' }}
              variants={fadeInUp}
            >
              Hello
            </motion.h1>
            
            <motion.h2
              className="text-lg md:text-xl lg:text-2xl font-medium text-white"
              variants={fadeInUp}
            >
              I am Azeez Aderemi
            </motion.h2>
            <motion.h2
              className="text-lg md:text-xl lg:text-2xl font-medium text-white"
              variants={fadeInUp}
            >
              Full-Stack software Developer
            </motion.h2>

            <motion.div variants={scaleIn}>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Strip - Developer Image */}
        <div className="w-[35vw] h-full flex items-end justify-center">
          <Image
            src="/img/Aderemi.png"
            alt="RayDar Developer"
            width={1200}
            height={1200}
            priority
            className="w-[40vw] h-[90vh] object-contain mix-blend-multiply opacity-100 contrast-110 brightness-110"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            }}
          />
        </div>


        {/* Right Strip - 50% vw */}
        <div className="absolute right-0 top-0 h-full w-[30vw] flex flex-col justify-center items-center px-8">
    {/* Your content here */}
  
          <motion.div
            className="space-y-6 text-center max-w-md"
            variants={slideInRight}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p 
                className="text-base md:text-lg leading-relaxed "
                style={{ color: 'var(--primary)' }}
                variants={fadeInUp}
              >
               I am a Full Stack Developer focused on building fast, 
               scalable, and user-friendly web applications that
                bridge design and functionality.
              </motion.p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                size="lg"
                className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ color: 'var(--primary)' }}
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Layout */}
      <motion.div 
        className="md:hidden flex flex-col items-center justify-center h-full space-y-8 px-6"
        variants={containerVariants}
      >
        {/* Mobile Content */}
        <motion.div
          className="space-y-4 text-center"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-2xl md:text-3xl font-bold leading-tight" 
            style={{ color: 'var(--primary)' }}
            variants={itemVariants}
          >
            Full-Stack Developer
          </motion.h1>
          <motion.h2 
            className="text-lg md:text-xl font-medium text-white"
            variants={itemVariants}
          >
            Creating Digital Experiences
          </motion.h2>
          
          <motion.div className="space-y-4 mt-6" variants={itemVariants}>
            <motion.p 
              className="text-sm leading-relaxed text-white"
              variants={fadeInUp}
            >
              I specialize in building modern web applications using React, Next.js, and TypeScript.
            </motion.p>
            
            <motion.p 
              className="text-xs leading-relaxed text-white"
              variants={fadeInUp}
            >
              From responsive front-end interfaces to robust back-end systems.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Mobile Buttons */}
        <motion.div
          className="flex flex-col space-y-4 w-full max-w-xs"
          variants={slideInLeft}
        >
          <motion.div variants={scaleIn}>
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Download CV
            </Button>
          </motion.div>
          
          <motion.div variants={scaleIn}>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="ghost"
              size="lg"
              className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              style={{ color: 'var(--primary)' }}
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hide desktop layout on mobile */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .w-\\[35vw\\], .w-\\[30vw\\] {
            display: none;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </motion.section>
  );
}