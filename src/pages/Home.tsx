import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import heroImage from '../Images/Innovation_Centre.jpg';
import Navbar from '../components/Navbar'; 

const Home = () => {
  
  const services = [
    {
      title: "Commercial HVAC Systems",
      desc: "End-to-end climate architecture for hotels, hospitals, and corporate parks. VRV/VRF specialization.",
      img: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Premium Residential Cooling",
      desc: "Aesthetic integration of split and central air conditioning for modern luxury homes.",
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "AMC & Preventive Care",
      desc: "Comprehensive annual maintenance contracts to ensure 99.9% uptime and efficiency.",
      img: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const features = [
    {
      title: "Daikin Authorized Partner",
      desc: "We don't just buy parts; we are official channel partners. This guarantees genuine components and manufacturer-backed warranties.",
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      title: "Certified Engineering Team",
      desc: "Our workforce consists of trained technicians, not freelance mechanics. Expert handling of complex ducting and VRV systems.",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "60-Minute Response",
      desc: "Critical failures don't wait. Our rapid response fleet covers the entire city 24/7 for emergency breakdowns.",
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      title: "25 Years of Trust",
      desc: "A legacy built on over 1,000 successful projects. We are the preferred vendor for the region's top hospitality chains.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Civil Lines",
      text: "The installation team was incredibly neat. They covered our furniture, cleaned up the debris, and the cooling calibration is perfect.",
      rating: 5
    },
    {
      name: "Amit Singh",
      role: "Facility Manager, Hotel Amar",
      text: "We rely on Sony Aircon for our entire hotel chain. Their response time during the peak summer season is unmatched in Agra.",
      rating: 5
    },
    {
      name: "Tech Park Solutions",
      role: "Operations Director",
      text: "Professional, cost-effective, and honest. They diagnosed and fixed an issue that another vendor claimed required a full unit replacement.",
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        {/* Background Image with Parallax-feel */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Heavy Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest rounded-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Premium HVAC Partner
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200">
                  Perfect Climate.
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-6">
                From luxury residences to large-scale corporate infrastructure, we design and install cooling solutions that stand the test of time.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  to="/products" 
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-all rounded-sm flex items-center justify-center sm:justify-start shadow-lg shadow-blue-900/50"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:+919876543210" 
                  className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900 px-8 py-4 font-semibold transition-all rounded-sm flex items-center justify-center sm:justify-start"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  +91 987 654 3210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS BAR ================= */}
      <div className="bg-white border-b border-slate-200 relative z-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "1k+", label: "Projects Completed" },
              { num: "500+", label: "AMC Clients" },
              { num: "24/7", label: "Support Team" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left md:pl-8 group">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 font-mono tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Texture (Dot Pattern) to remove "Flatness" */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:w-1/3 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-blue-600"></div>
                <span className="text-blue-700 font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Engineering comfort, <br/>not just installing ACs.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We don't just sell boxes; we design airflow. Whether it's calculating the precise heat load for a server room or ensuring a whisper-quiet environment for your home, our engineering-first approach sets us apart from local technicians.
              </p>
              <Link to="/about" className="inline-flex items-center text-slate-900 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                Read our full story <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Right Grid - Masonry style cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-slate-400 text-lg">
                Comprehensive HVAC solutions tailored for the specific needs of Indian infrastructure.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center px-6 py-3 border border-slate-700 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-medium">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 relative z-20 bg-slate-800 group-hover:bg-slate-800/90 transition-colors">
                  <div className="absolute -top-6 right-6 bg-blue-600 w-12 h-12 flex items-center justify-center text-white shadow-lg">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/services" className="inline-block px-6 py-3 border border-slate-700 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Trusted by Agra's Best</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-lg border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 relative overflow-hidden">
         {/* Abstract geometric background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your comfort?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Schedule a site visit today. Our engineers will provide a detailed technical assessment and a no-obligation quote tailored to your floor plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-bold rounded-sm hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="mr-2 w-5 h-5" /> Call Now
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Request Online Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;