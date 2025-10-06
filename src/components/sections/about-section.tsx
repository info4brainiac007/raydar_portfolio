"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex">
      {/* Left Side - 50vw with primary color */}
      <div 
        className="w-[35vw] flex items-center justify-center"
        style={{ backgroundColor: 'var(--background)' }}
      >
        {/* This area will later contain a developer image */}
      </div>

      {/* Right Side - 50vw with black background and content */}
      <div
  className="w-[65vw] bg-black flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20"
  style={{ backgroundColor: 'var(--background)' }}
>

          
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto lg:mx-0 w-full"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: 'var(--primary)' }}
          >
            Azeez Aderemi Details
          </motion.h1>

          {/* Filler Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-8"
          >
            I am a passionate full-stack developer with expertise in modern web technologies. 
            My journey in software development spans several years, during which I have honed 
            my skills in creating robust, scalable, and user-friendly applications. I believe 
            in writing clean, maintainable code and delivering exceptional user experiences.
          </motion.p>

          {/* 2x2 Grid of Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8"
          >
            {/* Name Card */}
            <Card className="bg-gray-800 border-gray-700 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-3 sm:p-4 relative z-10">
                <h3 className="text-xs sm:text-sm font-semibold mb-1 transition-colors duration-700 group-hover:text-black">Name</h3>
                <p className="text-white font-medium text-sm sm:text-base transition-colors duration-700 group-hover:text-black">Azeez Aderemi</p>
              </CardContent>
              {/* Full Card Background Fill Animation */}
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out group-hover:w-full w-0"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </Card>

            {/* Email Card */}
            <Card className="bg-gray-800 border-gray-700 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-3 sm:p-4 relative z-10">
                <h3 className="text-xs sm:text-sm font-semibold mb-1 transition-colors duration-700 group-hover:text-black">Email</h3>
                <p className="text-white font-medium text-xs sm:text-sm break-all transition-colors duration-700 group-hover:text-black">azeez@example.com</p>
              </CardContent>
              {/* Full Card Background Fill Animation */}
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out group-hover:w-full w-0"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </Card>

            {/* Address Card */}
            <Card className="bg-gray-800 border-gray-700 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-3 sm:p-4 relative z-10">
                <h3 className="text-xs sm:text-sm font-semibold mb-1 transition-colors duration-700 group-hover:text-black">Address</h3>
                <p className="text-white font-medium text-xs sm:text-sm transition-colors duration-700 group-hover:text-black">Lagos, Nigeria</p>
              </CardContent>
              {/* Full Card Background Fill Animation */}
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out group-hover:w-full w-0"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </Card>

            {/* Phone Number Card */}
            <Card className="bg-gray-800 border-gray-700 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-3 sm:p-4 relative z-10">
                <h3 className="text-xs sm:text-sm font-semibold mb-1 transition-colors duration-700 group-hover:text-black">Phone Number</h3>
                <p className="text-white font-medium text-xs sm:text-sm transition-colors duration-700 group-hover:text-black">+234 123 456 7890</p>
              </CardContent>
              {/* Full Card Background Fill Animation */}
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-out group-hover:w-full w-0"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </Card>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto gap-2 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--primary)', color: 'black' }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile responsive adjustments */}
        <style jsx>{`
          @media (max-width: 768px) {
            .w-\\[50vw\\] {
              width: 100vw;
              min-height: 50vh;
            }
            
            section {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </section>
  );
}