"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    color: "hover:text-slate-900 dark:hover:text-slate-100"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    color: "hover:text-blue-400"
  }
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
              Contact
            </Badge>
            <h2 className="text-heading-lg font-bold text-heading mb-6">
              Let's Work Together
            </h2>
            <p className="text-paragraph max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-sub-heading font-bold text-heading mb-6">
                  Get in Touch
                </h3>
                <p className="text-paragraph mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Feel free to reach out through any of 
                  the channels below.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-box rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="p-3 bg-primary rounded-lg group-hover:bg-primary/80 transition-colors">
                      <info.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-heading">
                        {info.label}
                      </p>
                      <p className="text-paragraph">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sub-heading font-semibold text-heading mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-box rounded-lg shadow-sm hover:shadow-md transition-all text-paragraph hover:text-primary"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-primary/10 border border-primary rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-heading">
                      Available for new projects
                    </p>
                    <p className="text-sm text-paragraph">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-box border-box">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-heading">
                    <MessageSquare className="w-5 h-5" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-sub-heading font-semibold text-heading mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-paragraph">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-heading mb-2">
                            Name *
                          </label>
                          <input
                            {...register("name")}
                            type="text"
                            className="w-full px-4 py-3 border border-box rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-box text-heading"
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-heading mb-2">
                            Email *
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full px-4 py-3 border border-box rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-box text-heading"
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-heading mb-2">
                          Subject *
                        </label>
                        <input
                          {...register("subject")}
                          type="text"
                          className="w-full px-4 py-3 border border-box rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-box text-heading"
                          placeholder="What's this about?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-heading mb-2">
                          Message *
                        </label>
                        <textarea
                          {...register("message")}
                          rows={6}
                          className="w-full px-4 py-3 border border-box rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-box text-heading resize-none"
                          placeholder="Tell me about your project or idea..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-black"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}