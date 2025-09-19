import React, { useState, useEffect } from 'react';
import {
  ShoppingCart,
  Coffee,
  Package,
  Home,
  CheckCircle,
  DollarSign,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Truck,
  Shield,
  Heart,
  Tiktok,
  Mail,
  ChevronDown,
  ShoppingBag,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'features', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
                      <img 
            src="/image/Logo.png" 
            alt="Logo"
            className="w-20 h-20"
          />
              <span className="text-xl font-bold text-gray-800">
                ShopinGo Market
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'features', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-red-600 focus:outline-none"
              >
                <div className="space-y-1">
                  <div
                    className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-t`}
        >
          <div className="px-4 py-2 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'features', label: 'Why Choose Us' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-yellow-100/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            <div className="space-y-8 animate-fadeInUp">
              <div className="flex items-center space-x-4">
                <img 
            src="/image/Logo.png" 
            alt="Logo"
            className="w-40 h-40"
          />

                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    <span className="text-red-600">Shopin</span>
                    <span className="text-yellow-500">Go</span>
                    <span className="block text-3xl md:text-4xl text-gray-700 mt-2">
                      Market Pvt. Ltd.
                    </span>
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2x1 text-gray-600 font-medium">
                Everyday Essentials, Anytime Convenience.
              </p>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Serving our community with fresh products, competitive prices,
                and exceptional service since day one. Your one-stop destination
                for all daily essentials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Visit Us Today
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="relative w-full h-96 bg-gradient-to-br from-red-100 to-yellow-100 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-yellow-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
                      <ShoppingCart className="h-12 w-12 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      With Love
                    </h3>
                    <p className="text-gray-600 px-4">
                      Premium products for your family's needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

{/* About Us Section */}
<section id="about" className="py-12 bg-gray-50 scroll-mt-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        About <span className="text-red-600">Us</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Built on trust, quality, and a love for serving our community.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      {/* Left Column: Story Box */}
<div className="order-2 lg:order-1 space-y-6 animate-fadeInLeft border border-red-300 p-8 rounded-2xl shadow-md bg-white flex flex-col justify-center">

  <div className="flex items-center gap-3">
  <span className="text-3xl">🙏</span>
  <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
    Welcome
  </h2>
</div>


  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    <span className="font-semibold text-red-500">To Our Shop,</span>
    <br />
    Inaugurated with a simple vision to create a convenient, affordable, 
    and friendly store where everyone can find toys, decor items, ceramics, 
    and essential products for everyday life.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    We proudly serves the local community by offering vibrant and unique 
    products and create a lively place that enhances your shopping 
    experience with us...
  </p>
</div>


      {/* Right Column: Image */}
<div className="order-1 lg:order-2 animate-fadeInRight flex flex-wrap gap-10 justify-center">
  {/* Founder */}
  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <img 
      src="/image/Basant_Rauniyar.png" 
      alt="Rahul Gupta"
      className="w-44 h-44 object-cover rounded-xl shadow-md border border-gray-200"
    />
    <p className="mt-4 text-xl font-bold text-gray-800">Rahul Gupta</p>
    <p className="text-gray-500 text-sm tracking-wide uppercase">Founder</p>
    {/* Social Links */}
    <div className="mt-3 space-y-2 text-sm text-gray-700">
    <div className="flex items-center gap-2">
      <Facebook className="w-5 h-5 text-blue-500" />
      <a href="https://facebook.com/rahul.gupta" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Facebook
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Instagram className="w-5 h-5 text-pink-500" />
      <a href="https://instagram.com/rahul.gupta" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Instagram
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-red-500" />
      <a href="mailto:rahul.gupta@example.com" className="hover:underline">
        rahul.gupta@example.com
      </a>
    </div>
  </div>

  </div>

  {/* Co-Founder */}
  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <img 
      src="/image/50.jpg" 
      alt="Prem Rauniyar"
      className="w-44 h-44 object-cover rounded-xl shadow-md border border-gray-200"
    />
    <p className="mt-4 text-xl font-bold text-gray-800">Prem Rauniyar</p>
    <p className="text-gray-500 text-sm tracking-wide uppercase">Co-Founder</p>
     <div className="mt-3 space-y-2 text-sm text-gray-700">
    <div className="flex items-center gap-2">
      <Facebook className="w-5 h-5 text-blue-500" />
      <a href="https://facebook.com/prem.rauniyar" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Facebook
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Instagram className="w-5 h-5 text-pink-500" />
      <a href="https://instagram.com/prem.rauniyar" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Instagram
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-red-500" />
      <a href="mailto:prem.rauniyar@example.com" className="hover:underline">
        prem.rauniyar@example.com
      </a>
    </div>
  </div>
  </div>
</div>
    </div>
  </div>
</section>



      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We <span className="text-yellow-500">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your daily life, all under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: 'Toys & Gifts',
                description:
                  'Playful toys and thoughtful gift items that bring smiles to all age groups…',
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
                textColor: 'text-green-600',
              },
              {
                icon: ShoppingBag,
                title: 'Home & Kitchen Picks',
                description:
                  'Elegant plates, ceramics and useful pieces to make your home stylish and practical…',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
                textColor: 'text-blue-600',
              },
              {
                icon: Package,
                title: 'Everyday Essentials',
                description: 'Specialized items that we need to use daily for specific purposes, all at affordable prices…',
                color: 'from-orange-500 to-orange-600',
                bgColor: 'bg-orange-50',
                textColor: 'text-orange-600',
              },
              {
                icon: Home,
                title: 'Fancy and Decorative items',
                description: 'Trendy, eye-catching home décor accessories to elevate your space that enhance aesthetic of your home and perfect for gifting….',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
                textColor: 'text-purple-600',
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group p-8 ${service.bgColor} rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-red-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the best shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: 'Unique Collection',
                description: 'Toys, ceramics plates, and fancy items all in one place.',
                color: 'text-green-500',
                bgColor: 'bg-green-100',
              },
              {
                icon: DollarSign,
                title: 'Best Prices',
                description:
                  'Competitive pricing with regular discounts and offers',
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-100',
              },
              {
                icon: Users,
                title: 'Friendly Service',
                description: 'Warm, helpful staff ready to assist you',
                color: 'text-blue-500',
                bgColor: 'bg-blue-100',
              },
              {
                icon: MapPin,
                title: 'Convenient Location',
                description: 'Easily accessible location in your neighborhood',
                color: 'text-red-500',
                bgColor: 'bg-red-100',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact <span className="text-yellow-500">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us or visit our store
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-fadeInLeft">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Phone</div>
                      <div className="text-gray-600">+977 9705395990</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        WhatsApp
                      </div>
                     <a
  href="https://wa.me/+9779705395990"
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-600 hover:underline"
>
  Chat on WhatsApp
</a>

                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Address</div>
                      <div className="text-gray-600">
                        First floor, Indra Jyoti Complex 
                        <br />
                       Amarpath, Butwal
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
               <div className="rounded-lg h-64 w-full overflow-hidden shadow-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.56527190958997!2d83.46401963015764!3d27.70260730034827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687a6fa26fd27%3A0x57a5a7704d41c007!2sIndra-Jyoti%20Complex!5e1!3m2!1sen!2snp!4v1756979088955!5m2!1sen!2snp"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
              </div>
            </div>



            {/* Contact Form */}
           <div className="animate-fadeInRight">
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">
      Send us a Message
    </h3>
   <form
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mdklpgqy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred. Try again later.");
    }
  }}
  className="space-y-6"
>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Name
    </label>
    <input
      type="text"
      name="name"        // ✅ Added this
      required            // optional, makes it mandatory
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
      placeholder="Your name"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email
    </label>
    <input
      type="email"
      name="email"       // ✅ Added this
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
      placeholder="your@email.com"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Message
    </label>
    <textarea
      name="message"     // ✅ Added this
      required
      rows={5}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
      placeholder="Your message..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    Send Message
  </button>
</form>

              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-400 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">ShopinGo Market</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted neighborhood market, serving the community with
                quality products and exceptional service.
              </p>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center">
                <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                Opening Hours
              </h4>
              <div className="space-y-2 text-gray-400">
                <div>Monday - Saturday: 8:00 AM - 10:00 PM</div>
                <div>Sunday: 9:00 AM - 9:00 PM</div>
                <div className="text-red-400 font-medium">
                  Always here when you need us!
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'About Us', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/17MtCws9oW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/shopingomarketpvt.ltd?igsh=NGoyYzIzbDN6enU3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Stay connected for latest updates and offers!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShopinGo Market Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
