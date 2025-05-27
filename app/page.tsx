"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, Home, Wifi, Shield, Phone, Mail, MapPin, ChevronRight, SquareMenu ,  Star, Users, Award, Clock, Sun } from "lucide-react"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter'




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
    
    <div className="min-h-screen bg-gradient-to-br from-ice-blue to-deep-navy">
      
      {/* Header */}

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-deep-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
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
          {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/solar.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div
          
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
  <span className="mr-2">Smart Solutions for</span>
  <span className="block text-powder-blue">
    <Typewriter
      words={['Modern Living', 'Connected Homes', 'Secure Spaces']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={60}
      delaySpeed={1500}
    />
  </span>
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
            <div className=" flex justify-center">
          <a
            href="/hardwiredsolutions.pdf"
            download
            className="inline-block bg-deep-navy text-white hover:bg-powder-blue hover:text-deep-navy/90 px-9 py-2 text-lg rounded-md transition-all duration-300"
          >
            Download Brochure
          </a>
        </div>
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
              {
                icon: <Sun size={48} />,
                title: "Solar",
                description:
                  "Substancially save on your energy bills by generating your own electricity..",
                features: ["Shrink your Energy Bills", "Boost your home's value", "Champion the Environment", "Unlock Government Support"],
              },
              {
                icon: <SquareMenu size={48} />,
                title: "Generator",
                description:
                  "Frequent power outages?... We offer generator solutions so you can have an uninterrupted power supply.",
                features: ["Reliable Backup", "Low-noise, fuel-efficient performance", "Wide range of capacities (1kVA - 100+kVA)", "Automatic and manual startup options"],
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
              { icon: <Users size={32} />, number: "200+", label: "Happy Clients" },
              { icon: <Award size={32} />, number: "300+", label: "Projects Completed" },
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
                With over 5+ years experience in smart technology integration, we deliver cutting-edge solutions that
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

      {/* testemonials*/}
<section className="py-20 bg-gray-50" id="testimonials">
  <div className="container mx-auto px-4 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">Testimonials</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <blockquote className="bg-white p-8 rounded-lg shadow text-gray-700">
        “"Hardwired Solutions transformed our entire home setup. From smart lighting to a rock-solid WiFi network, every detail was handled with precision and care. The team was incredibly knowledgeable and responsive — I can now control my entire house with a single tap!"”
        <div className="mt-4 text-sm text-gray-500">— Ritika Sharma, Home Automation Client</div>
      </blockquote>
      <blockquote className="bg-white p-8 rounded-lg shadow text-gray-700">
        “"As a small business owner, I needed a secure and efficient IT setup. Hardwired Solutions not only delivered a flawless network but also ensured my office is protected with top-tier surveillance. Their commitment to innovation and service is unmatched."”
        <div className="mt-4 text-sm text-gray-500">— Keegan Fernandes, Business Owner</div>
      </blockquote>
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
                  { icon: <Phone size={24} />, label: "Phone", value: "+91 7620856522" },
                  { icon: <Mail size={24} />, label: "Email", value: "Hardwiredsolutions99@gmail.com" },
                  { icon: <MapPin size={24} />, label: "Address", value: "H.No.413, Salem, Salvador Do Mundo, North Goa 403101" },
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


{/* CEO & Founder Section */}
<section className="py-24 bg-white border-t border-gray-200" id="ceo">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">Founder & Visionary</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
        Driving innovation at the intersection of technology and modern living.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-0 items-center max-w-5xl mx-auto">
      {/* Founder Image */}
      <div className="w-full">
        <img
          src="/alltree.jpg"
          alt="Alltrey Pinto - Founder & CEO"
          className="w-80 h-100 rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Founder Info */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-900">Alltrey Pinto</h3>
        <p className="text-lg text-sky-700 mb-4 font-medium">Founder & Chief Executive Officer</p>
        <hr className="border-gray-300 mb-6" />
        <p className="text-gray-700 text-base leading-relaxed">
          With a relentless passion for building intelligent, sustainable solutions, Alltrey founded Hardwired Solutions
          to bridge the gap between emerging technology and everyday life. His leadership is defined by innovation,
          integrity, and a deep commitment to making smarter living accessible to all.
        </p>
      </div>
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
            <p> K10 </p>
          </div>
        </div>
      </footer>
    </div>
  )
}