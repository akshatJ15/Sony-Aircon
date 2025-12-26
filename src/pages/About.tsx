import { 
  Award, 
  Users, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Target, 
  Lightbulb,
  Briefcase
} from 'lucide-react';
import heroImage from '../Images/Projects.jpg';
import Navbar from '../components/Navbar';

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "We don't cut corners. From material selection to the final finishing touch, we strive for perfection in every installation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Integrity",
      description: "Honest pricing, genuine parts, and transparent communication. We believe trust is the foundation of our business."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Customer Focus",
      description: "We design solutions around your needs, not our sales targets. Your comfort is our only metric for success."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: "Quality First",
      description: "We partner only with top-tier brands and use high-grade copper piping to ensure your system lasts for years."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "20+ Years Experience",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "An HVAC industry veteran who built the company from a single service van to a city-wide leader."
    },
    {
      name: "Priya Patel",
      role: "Technical Director",
      experience: "15+ Years Experience",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specialist in VRF design and energy-efficient climate architecture for commercial spaces."
    },
    {
      name: "Amit Kumar",
      role: "Operations Head",
      experience: "12+ Years Experience",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensures every project is delivered on time, safety protocols are met, and quality is maintained."
    },
    {
      name: "Sneha Reddy",
      role: "Client Relations",
      experience: "10+ Years Experience",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dedicated to ensuring a seamless experience from the first consultation to post-sales support."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "1k+", label: "Projects Completed", icon: <Briefcase className="w-6 h-6" /> },
    { number: "50+", label: "Cities Served", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION (Navbar Inside) ================= */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Corporate Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>

        {/* NAVBAR */}
        {/* Make sure '/about' is in Navbar.js transparentPages list! */}
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest rounded-sm">
                About The Company
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Driving Excellence in <br/>
                <span className="text-blue-400">Climate Control.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-blue-600 pl-6">
                For over 15 years, we've been the trusted partner for premium air conditioning solutions. From residential comfort to industrial cooling, we deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
              From Humble Beginnings to Industry Leaders
            </h2>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed text-left md:text-center">
              <p>
                Founded in 2009 by Rajesh Sharma, Sony Aircon began as a small family business with a simple yet powerful mission: to provide reliable, high-quality air conditioning solutions to homes and businesses across the region.
              </p>
              <p>
                What started with a team of just 3 dedicated professionals has grown into a leading HVAC organization with over 50 skilled technicians. Our growth hasn't been accidental; it is built on a foundation of trust, technical expertise, and an unwavering commitment to customer satisfaction.
              </p>
              <p>
                Today, we are proud to be the preferred choice for installation, maintenance, and complex HVAC projects. Whether it's a single luxury villa or a sprawling industrial facility, we bring the same level of dedication and precision to every space we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{item.number}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The principles that guide our decisions and define our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-500 text-lg">The experts driving our vision forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm italic mb-4">{member.experience}</p>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="flex flex-col items-start bg-white p-10 rounded-lg shadow-sm border border-slate-100 h-full">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide exceptional air conditioning solutions that enhance comfort, improve energy efficiency, and exceed customer expectations through innovative technology and professional service.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-start bg-white p-10 rounded-lg shadow-sm border border-slate-100 h-full">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be India's most trusted HVAC provider, setting industry standards for quality and sustainability while contributing to a more comfortable and energy-efficient future.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-blue-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied customers who trust us for their cooling needs. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 font-bold rounded-sm shadow-xl transition-all flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a href="mailto:info@sonyaircon.com" className="border-2 border-white text-white hover:bg-blue-600 px-8 py-3 font-bold rounded-sm transition-all flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;