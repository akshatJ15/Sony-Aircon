import { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Building2, 
  Home, 
  Factory, 
  ArrowRight,
  Filter,
  Ruler,
  Zap,
  CheckCircle2,
  Phone,
  FileText
} from 'lucide-react';
import heroImage from '../Images/Projects.jpg';
import Navbar from '../components/Navbar';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Filter className="w-4 h-4" /> },
    { id: 'residential', name: 'Residential', icon: <Home className="w-4 h-4" /> },
    { id: 'commercial', name: 'Commercial', icon: <Building2 className="w-4 h-4" /> },
    { id: 'industrial', name: 'Industrial', icon: <Factory className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Climate Control",
      category: "residential",
      location: "Bandra, Mumbai",
      date: "Dec 2023",
      client: "Private Residence",
      description: "Complete central air conditioning installation for a 5-bedroom luxury villa with smart climate control integration and aesthetic grill design.",
      image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "4,500 sq ft",
        type: "Central Ducted",
        capacity: "15 Tons",
        tech: "Smart Zone Control"
      }
    },
    {
      id: 2,
      title: "Corporate HQ HVAC Infrastructure",
      category: "commercial",
      location: "BKC, Mumbai",
      date: "Nov 2023",
      client: "Tech Solutions Pvt Ltd",
      description: "Design and execution of a high-efficiency VRF system. The project focused on reducing energy consumption per square foot while maintaining air quality standards.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "20,000 sq ft",
        type: "VRF System",
        capacity: "50 Tons",
        tech: "Air Quality Monitoring"
      }
    },
    {
      id: 3,
      title: "Manufacturing Plant Cooling",
      category: "industrial",
      location: "Pune, Maharashtra",
      date: "Oct 2023",
      client: "Industrial Mfg Co.",
      description: "Heavy-duty industrial cooling solution for a manufacturing facility. Required specialized humidity control and positive pressure zones for assembly lines.",
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "50,000 sq ft",
        type: "Chiller Plant",
        capacity: "100 Tons",
        tech: "Precision Humidity"
      }
    },
    {
      id: 4,
      title: "Metro Mall Climate Systems",
      category: "commercial",
      location: "Thane, Mumbai",
      date: "Sep 2023",
      client: "Metro Shopping Mall",
      description: "Comprehensive climate control for a 3-level retail space. Integrated fresh air handling units (FAHU) to maintain oxygen levels in high-footfall areas.",
      image: "https://images.pexels.com/photos/5835595/pexels-photo-5835595.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "80,000 sq ft",
        type: "Mixed VRV/Split",
        capacity: "200 Tons",
        tech: "BMS Integration"
      }
    },
    {
      id: 5,
      title: "Skyline Residences",
      category: "residential",
      location: "Powai, Mumbai",
      date: "Aug 2023",
      client: "Skyline Developers",
      description: "Bulk installation for a 50-unit residential complex. Implemented individual metering systems for billing transparency and centralized outdoor unit placement.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "50 Units",
        type: "Multi-Split",
        capacity: "300 Tons",
        tech: "Individual Metering"
      }
    },
    {
      id: 6,
      title: "City General Hospital",
      category: "commercial",
      location: "Andheri, Mumbai",
      date: "Jul 2023",
      client: "City Healthcare Trust",
      description: "Specialized HVAC for healthcare. Installation included HEPA filtration systems for Operation Theaters and negative pressure rooms for isolation wards.",
      image: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=800",
      specs: {
        area: "30,000 sq ft",
        type: "Clean Room HVAC",
        capacity: "75 Tons",
        tech: "HEPA Filtration"
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
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
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest rounded-sm">
                Project Portfolio
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Built to Last. <br/>
                <span className="text-blue-400">Engineered for Efficiency.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-blue-600 pl-6">
                Explore our successful HVAC installations across residential, commercial, and industrial sectors. Proven expertise in complex climate challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS STRIP ================= */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "15+", label: "Years Excellence" },
              { num: "50+", label: "Cities Covered" },
              { num: "100%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l-4 border-slate-100 pl-6 hover:border-blue-600 transition-colors duration-300">
                <div className="text-3xl font-bold text-slate-900">{stat.num}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FILTER BAR ================= */}
      <section className="bg-slate-50 sticky top-0 z-40 border-b border-slate-200 shadow-sm backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2 hidden md:block">Filter By:</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm border ${
                      project.category === 'residential' ? 'bg-green-50 text-green-700 border-green-200' :
                      project.category === 'commercial' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-purple-50 text-purple-700 border-purple-200'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {project.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {project.client}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="bg-slate-50 rounded-sm p-5 border border-slate-100 mb-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Area</span>
                        <div className="flex items-center gap-2 font-semibold text-slate-800">
                          <Ruler className="w-4 h-4 text-blue-500" /> {project.specs.area}
                        </div>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">System Type</span>
                        <div className="flex items-center gap-2 font-semibold text-slate-800">
                          <Zap className="w-4 h-4 text-blue-500" /> {project.specs.type}
                        </div>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Cooling Capacity</span>
                        <div className="flex items-center gap-2 font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" /> {project.specs.capacity}
                        </div>
                      </div>
                       <div>
                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Key Tech</span>
                        <div className="flex items-center gap-2 font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" /> {project.specs.tech}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all rounded-sm flex items-center justify-center group/btn">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* ================= UPGRADED CTA SECTION ================= */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-t border-slate-800">
        
        {/* Background "Blueprint" Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-900/50 border border-blue-500/30 rounded-full">
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Accepting New Commercial Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss your HVAC requirements. Our engineering team will analyze your floor plan and provide a comprehensive cooling strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919876543210" 
              className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 font-bold rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center min-w-[200px]"
            >
              <Phone className="mr-2 w-5 h-5 text-blue-600" />
              Book Consultation
            </a>
            <button className="group border border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 px-8 py-4 font-bold rounded-sm transition-all flex items-center justify-center min-w-[200px]">
              <FileText className="mr-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              Request Portfolio
            </button>
          </div>

          <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest">
            Licensed • Insured • Certified
          </p>

        </div>
      </section>

    </div>
  );
};

export default Projects;