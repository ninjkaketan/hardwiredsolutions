"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, Home, Wifi, Shield, Phone, Mail, MapPin, ChevronRight, Star, Users, Award, Clock } from "lucide-react"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';




export default function HardwiredSolution() {
  const formRef = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_lnadbn7",      
      "template_tuk8rfi",      
      formRef.current,
      "Gbqy2leJf67TVfjeS"       
    )
    .then(
      () => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
};

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ice-blue to-powder-blue">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-deep-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center space-x-4">
              <img
                src="/hardwired.jpg"
                alt="Hardwired Logo"
                className="h-10 w-10 rounded-lg"

              />
              <span className="text-2xl font-bold text-white">Hardwired Solutions</span>
            </div>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-powder-blue transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-white hover:text-powder-blue transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 to-sapphire/60"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Smart Solutions for
            <span className="block text-powder-blue">Modern Living</span>
          </h1>
          <p className="text-xl md:text-2xl text-ice-blue mb-8 max-w-3xl mx-auto">
            Transform your home with cutting-edge automation, reliable WiFi networks, and advanced security systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-sapphire hover:bg-sapphire/80 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-dark-blue text-sapphire hover:bg-powder-blue hover:text-deep-navy px-8 py-3 text-lg transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home size={48} />,
                title: "Home Automation",
                description:
                  "Smart lighting, climate control, and integrated home systems for ultimate convenience and efficiency.",
                features: ["Smart Lighting Control", "Climate Management", "Voice Integration", "Mobile App Control"],
              },
              {
                icon: <Wifi size={48} />,
                title: "WiFi Solutions",
                description:
                  "Enterprise-grade wireless networks designed for reliability, speed, and comprehensive coverage.",
                features: ["High-Speed Networks", "Complete Coverage", "Business Grade", "24/7 Support"],
              },
              {
                icon: <Shield size={48} />,
                title: "CCTV Smart Security",
                description:
                  "Advanced surveillance systems with AI-powered monitoring and real-time alerts for maximum protection.",
                features: ["4K Surveillance", "AI Monitoring", "Remote Access", "Cloud Storage"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-ice-blue to-white"
              >
                <CardContent className="p-8">
                  <div className="text-sapphire mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <ChevronRight size={16} className="text-sapphire mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-sapphire to-deep-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users size={32} />, number: "500+", label: "Happy Clients" },
              { icon: <Award size={32} />, number: "1000+", label: "Projects Completed" },
              { icon: <Star size={32} />, number: "5.0", label: "Average Rating" },
              { icon: <Clock size={32} />, number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-powder-blue mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-ice-blue">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Why Choose Hardwired Solutions?</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in smart technology integration, we deliver cutting-edge solutions that
                enhance your lifestyle and security.
              </p>
              <div className="space-y-4">
                {[
                  "Certified technicians with extensive training",
                  "Custom solutions tailored to your needs",
                  "Comprehensive warranty and support",
                  "Latest technology and equipment",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <ChevronRight className="text-sapphire mr-3" size={20} />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sapphire to-deep-navy rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-ice-blue">
                  To make advanced technology accessible and reliable for every home and business, creating smarter,
                  safer, and more efficient environments for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your space? Let's discuss your project.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-deep-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone size={24} />, label: "Phone", value: "+91 0000000000" },
                  { icon: <Mail size={24} />, label: "Email", value: "info@hardwiredsolutions.com" },
                  { icon: <MapPin size={24} />, label: "Address", value: "Goa" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-sapphire mr-4">{contact.icon}</div>
                    <div>
                      <div className="font-semibold text-deep-navy">{contact.label}</div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-deep-navy mb-6">Send us a Message</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="first_name" placeholder="First Name" className="border-gray-300" />
                  <Input name="last_name" placeholder="Last Name" className="border-gray-300" />
                </div>
                <Input name="email" placeholder="Email Address" type="email" className="border-gray-300" />
                <Input name="phone" placeholder="Phone Number" className="border-gray-300" />
                <Textarea name="message" placeholder="Tell us about your project..." rows={4} className="border-gray-300" />
                <Button type="submit" className="w-full bg-sapphire hover:bg-sapphire/80 text-white py-3 transition-all duration-300">
                  Send Message
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hardwired Solutions</h3>
              <p className="text-ice-blue">Your trusted partner for smart home technology and security solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-ice-blue">
                <li>Home Automation</li>
                <li>WiFi Solutions</li>
                <li>CCTV Security</li>
                <li>Smart Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-ice-blue">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-ice-blue">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Warranty</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sapphire mt-8 pt-8 text-center text-ice-blue">
            <p>&copy; 2025 Hardwired Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
