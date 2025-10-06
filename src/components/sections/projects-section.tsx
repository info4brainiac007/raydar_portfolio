"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

type ProjectType = "Next.js" | "Laravel" | "PHP";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    type: "Next.js",
    description: "A modern e-commerce platform built with Next.js, featuring server-side rendering, dynamic routing, and seamless user experience with advanced shopping cart functionality.",
    liveUrl: "https://nextjs-ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management System",
    type: "Laravel",
    description: "A comprehensive task management system built with Laravel, featuring user authentication, real-time notifications, and advanced project tracking capabilities.",
    liveUrl: "https://laravel-tasks-demo.herokuapp.com",
  },
  {
    id: 3,
    title: "Content Management System",
    type: "PHP",
    description: "A robust content management system built with pure PHP, featuring dynamic content creation, user roles, and a powerful admin dashboard for content management.",
    liveUrl: "https://php-cms-demo.netlify.app",
  },
];

export function ProjectsSection() {
  const [selectedType, setSelectedType] = useState<ProjectType>("Next.js");

  // Reorder projects based on selected type
  const orderedProjects = [
    ...projects.filter(p => p.type === selectedType),
    ...projects.filter(p => p.type !== selectedType)
  ];

  const navItems: ProjectType[] = ["Next.js", "Laravel", "PHP"];

  return (
    <section id="projects" className="py-20 bg-background">
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
            <div className="w-[70vw] max-w-4xl bg-box rounded-2xl p-2 flex justify-between items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedType(item)}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
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

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${selectedType}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-box border-box overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.type === selectedType 
                          ? "bg-primary text-black" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {project.type}
                      </span>
                      {project.type === selectedType && (
                        <span className="text-xs text-primary font-medium">Featured</span>
                      )}
                    </div>
                    <h3 className="text-heading-xs font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-paragraph text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-primary text-black hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
        </div>
      </div>
    </section>
  );
}