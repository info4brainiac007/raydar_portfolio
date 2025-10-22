"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Globe } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "KuvarPay",
    location: "Remote",
    period: "2022 - Present",
    description: "Engineered KuvarPay, a crypto payment gateway enabling businesses to accept Bitcoin, Ethereum, stablecoins, and 1200+ tokens with local fiat settlements (NGN, RWF, ZAR, GHS, KES).",
    achievements: [
      "Built API-driven merchant tools (checkout sessions, invoices, payment links) with webhook support",
      "Supervised a distributed dev team, ensuring delivery of complex features under tight deadlines",
     
    ],
    technologies: ["React", "Next.js", "TypeScript", "AWS", "Docker"]
  },
  {
    id: 2,
    type: "work",
    title: "Full-Stack Developer",
    company: "Affisend",
    location: "Remote",
    period: "2023 - present",
    description: "Developed an email service for businesses",
    achievements: [
      "Led development of a secure, high-performance email infrastructure ensuring reliable delivery at scale.",
      "Reduced client onboarding time by 50%",
      "Configured and managed SMTP, IMAP, POP3 servers, boosting email system reliability and security. "
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "GraphQL"]
  },
  {
    id: 3,
    type: "work",
    title: "Frontend Developer",
    company: "WebStudio Pro",
    location: "Surat, Gujarat",
    period: "2018 - 2020",
    description: "Specialized in creating responsive, user-friendly interfaces and collaborating with design teams to implement pixel-perfect designs.",
    achievements: [
      "Improved website loading speed by 35%",
      "Converted 20+ designs to responsive websites",
      "Introduced modern development practices"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass"]
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Physics with Electronics",
    institution: "Oduduwa University Ipetumodu (OUI)",
    location: "Nigeria",
    period: "2017 - 2019",
    grade: "4.6 GPA",
    description: "Specialized in physics, electronics, and computer science. Completed projects on signal processing, microcontrollers, and embedded systems."
  },
 
];

const web3Freelance = [
  {
    name: "LendX Protocol",
    contribution: "Developed and deployed Solidity smart contracts for lending pools",
  },
  {
    name: "Ammify DEX",
    contribution: "Implemented swap router and liquidity management; integrated ethers.js front-end",
  },
  {
    name: "YieldHub Farming",
    contribution: "Built staking vaults and reward emission schedule with unit tests",
  },
  {
    name: "StableCore Treasury",
    contribution: "Wrote multisig treasury and timelock modules; optimized gas usage",
  },
  {
    name: "BridgeFlow",
    contribution: "Integrated cross-chain messaging and relayer flows; deployed on testnet/mainnet",
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", year: "2023" },
  { name: "Python: From Zero to Hero (Udemy)", year: "2024" },
  { name: "MATLAB Programming & Image Processing (Udemy)", year: "2024" },
  { name: "Node.js Certified Developer", year: "2020" }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
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
            <Badge variant="secondary" className="mb-4 bg-primary text-black">
              Experience
            </Badge>
            <h2 className="text-heading-lg font-bold text-heading mb-6">
              7+ Years Experience
            </h2>
            <p className="text-paragraph max-w-2xl mx-auto">
              My journey through various roles and educational milestones that shaped 
              my expertise in Full-stack Development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2 bg-primary rounded-lg">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sub-heading font-bold text-heading">
                  Work Experience
                </h3>
              </motion.div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative overflow-hidden bg-box border-box">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-sub-heading font-bold text-heading">
                              {exp.title}
                            </h4>
                            <p className="text-primary font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <Badge variant="outline" className="shrink-0 border-primary text-primary">
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-paragraph">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-paragraph mb-4">
                          {exp.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-heading mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-paragraph flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-primary text-black">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2 bg-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sub-heading font-bold text-heading">
                  Education
                </h3>
              </motion.div>

              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative overflow-hidden bg-box border-box">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-sub-heading font-bold text-heading">
                              {edu.degree}
                            </h4>
                            <p className="text-primary font-semibold">
                              {edu.institution}
                            </p>
                          </div>
                          <Badge variant="outline" className="shrink-0 border-primary text-primary">
                            {edu.grade}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-paragraph">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-paragraph text-sm">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Web3 Freelance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2 bg-primary rounded-lg">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sub-heading font-bold text-heading">
                  Web3 Freelance
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="relative overflow-hidden bg-box border-box">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sub-heading font-bold text-heading">Selected DeFi Projects</h4>
                      <Badge variant="secondary" className="bg-primary text-black">Freelance</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {web3Freelance.map((proj) => (
                        <div key={proj.name} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                          <div>
                            <h5 className="font-semibold text-heading">{proj.name}</h5>
                            <p className="text-sm text-paragraph">{proj.contribution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sub-heading font-bold text-heading mb-6">
                  Certifications
                </h4>
                <div className="grid gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-box rounded-lg"
                    >
                      <span className="font-medium text-heading">
                        {cert.name}
                      </span>
                      <Badge variant="secondary" className="bg-primary text-black">{cert.year}</Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}