"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectType = "Next.js" | "Laravel" | "PHP";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  liveUrl: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "KuvarPay",
    type: "Next.js",
    description: "A Crypto PaymentGateway that Helps businesses accept payments in cryptocurrency and get fiat in their ban acoount in seconds.",
    liveUrl: "https://kuvarpay.com/",
    image: "/img/KuvarPay.png",
  },
  {
    id: 2,
    title: "Affisend",
    type: "Laravel",
    description: "An Email Marketing Platform that Helps businesses send emails to their customers in a more effective and efficient way.",
    liveUrl: "https://pro.affisend.com/login",
    image: "/img/Affisend.png",
  },
  {
    id: 3,
    title: "Content Management System",
    type: "PHP",
    description: "A robust content management system built with pure PHP, featuring dynamic content creation, user roles, and a powerful admin dashboard for content management.",
    liveUrl: "https://php-cms-demo.netlify.app",
  },
];

function StatCard({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
      const unsubscribe = count.on("change", (latest) => {
        setDisplay(Math.floor(latest));
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count]);

  return (
    <div
      ref={ref}
      className="rounded-xl shadow-soft p-8 h-full w-full max-w-sm flex flex-col items-center justify-center"
    >
      <div className="text-5xl font-extrabold tracking-tight">{display}+</div>
      <div className="mt-2 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}

export function ProjectsSection() {
  const [selectedType, setSelectedType] = useState<ProjectType>("Next.js");

  // Reorder projects based on selected type
  const orderedProjects = [
    ...projects.filter(p => p.type === selectedType),
    ...projects.filter(p => p.type !== selectedType)
  ];

  const navItems: ProjectType[] = ["Next.js", "Laravel", "PHP"];

  return (
    <section
      id="projects"
      className="relative py-24 rounded-t-[4rem]"
      style={{ backgroundColor: 'var(--secondary)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-lg font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-paragraph max-w-2xl mx-auto">
              Explore my projects across different technologies. Click on any technology to see the corresponding project first.
            </p>
          </motion.div>

          {/* Technology Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="w-[70vw] max-w-4xl bg-box rounded-full p-2 flex justify-between items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedType(item)}
                  className={`flex-1 py-3 px-5 rounded-xl font-medium transition-all duration-300 scale-95 hover:scale-85 ${
                    selectedType === item
                      ? "bg-primary text-black shadow-lg"
                      : "text-white hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project Cards and Description Layout */}
          <div className="space-y-20">
            {orderedProjects.map((project, index) => {
              // Determine layout: selected project always goes card-left, others alternate
              const isSelected = project.type === selectedType;
              const isCardLeft = isSelected || index % 2 === 0;
              
              return (
                <motion.div
                  key={`${project.id}-${selectedType}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full"
                >
                  <div className={`flex items-center gap-8 ${!isCardLeft ? 'flex-row-reverse' : ''}`}>
                    {/* Project Card */}
                    <div className="w-[40vw] h-[80vh] flex-shrink-0">
                      <Card
                        className={`relative w-full h-full rounded-3xl overflow-hidden bg-box border-box hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                          isSelected ? 'ring-2 ring-primary shadow-primary/20' : ''
                        }`}
                        onClick={() => setSelectedType(project.type)}
                      >
                        {/* Background Image fills entire card */}
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        )}

                        {/* Subtle overlay for readability */}
                        <div className="absolute inset-0 bg-black/25" />

                        {/* Stack badge (top-left) */}
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-black shadow-lg">
                            {project.type}
                          </span>
                        </div>

                        {/* Link button (bottom-right) */}
                        <div className="absolute bottom-6 right-6">
                          <Button
                            asChild
                            className="bg-primary text-black hover:bg-primary/90 shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-5 h-5" />
                              View Project
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </div>

                    {/* Project Description - Invisible Container */}
                    <div className="flex-1 min-h-[80vh] flex items-center">
                      <motion.div
                        key={`desc-${project.id}-${selectedType}`}
                        initial={{ opacity: 0, x: isCardLeft ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full space-y-8 p-8"
                      >
                        {/* Project Name */}
                        <div>
                          <h2 className="text-4xl font-bold text-white mb-2">
                            {project.title}
                          </h2>
                          <div className="w-20 h-1 bg-primary rounded-full"></div>
                        </div>

                        {/* Project Description */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-primary">Project Overview</h3>
                          <p className="text-paragraph text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technology Stack */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-primary">Technology Stack</h3>
                          <p className="text-paragraph leading-relaxed">
                            {project.type === "Next.js" && "Built with Next.js, React, TypeScript, and Tailwind CSS. Features server-side rendering, API routes, and optimized performance with modern web standards."}
                            {project.type === "Laravel" && "Developed using Laravel framework with PHP, MySQL database, Blade templating, and RESTful API architecture. Includes authentication and real-time features."}
                            {project.type === "PHP" && "Created with pure PHP, MySQL database, custom MVC architecture, and responsive frontend design. Features a robust admin panel and content management system."}
                          </p>
                        </div>

                        {/* Project Link */}
                        <div className="pt-4">
                          <Button 
                            asChild 
                            size="lg"
                            className="bg-primary text-black hover:bg-primary/90 transition-all duration-300 px-8"
                          >
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3"
                            >
                              <ExternalLink className="w-5 h-5" />
                              Explore Project
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-paragraph mb-6">
              Interested in working together on your next project?
            </p>
            <Button size="lg" className="px-8 bg-primary text-black hover:bg-primary/90">
              Let's Collaborate
            </Button>
          </motion.div>

          {/* Static Performance Carousel - full viewport width with animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            {/* Break out of container to span full viewport width */}
            <div className="relative left-1/2 -translate-x-1/2 w-screen bg-primary text-black">
              <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-stretch">
                  <StatCard value={projects.length} label="Projects Completed" />
                  <StatCard value={3} label="Years Experience" />
                  <StatCard value={10} label="Happy Customers" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}