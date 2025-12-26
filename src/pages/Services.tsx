import { 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Thermometer, 
  FileCheck,
  ArrowRight,
  Phone,
  Clock,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import heroImage from '../Images/Service_Image.jpg';
import Navbar from '../components/Navbar';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: "Precision Installation",
      subtitle: "Residential & Commercial",
      description: "Installation isn't just mounting a unit; it's about airflow dynamics. We ensure zero-leakage piping and optimal placement for maximum efficiency.",
      scope: [
        "Site thermal assessment & load calculation",
        "Drilling with dust-mitigation protocols",
        "Nitrogen pressure testing for leaks",
        "Vacuumizing lines (Essential for R32/R410A)",
        "Post-installation cooling demonstration"
      ],
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Repair & Optimization",
      subtitle: "Diagnostics & Fixes",
      description: "From PCB failures to compressor issues, our engineers diagnose the root cause rather than offering temporary patches.",
      scope: [
        "Advanced error code diagnostics",
        "PCB circuit repair & testing",
        "Capacitor & sensor replacement",
        "Coil replacement with anti-corrosion coating",
        "Gas charging by weight (not just pressure)"
      ],
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Thermometer className="w-6 h-6 text-white" />,
      title: "Jet-Pump Servicing",
      subtitle: "Deep Cleaning",
      description: "We use high-pressure jet pumps to clean condenser and evaporator coils, restoring your machine's heat exchange capacity to factory standards.",
      scope: [
        "Jacket-covered indoor unit washing (No mess)",
        "High-pressure outdoor unit cleaning",
        "Drain tray and pipe descaling",
        "Electrical connection tightening",
        "Filter and body sanitization"
      ],
      image: "https://images.pexels.com/photos/5835595/pexels-photo-5835595.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const maintenancePlans = [
    {
      name: "Standard AMC",
      target: "For Residential Splits",
      price: "₹2,999",
      period: "/ unit / year",
      features: [
        "2 Wet Services (Jet Pump)",
        "1 Dry Service",
        "Unlimited Breakdown Support",
        "No visiting charges",
        "Priority 24hr Response"
      ],
      highlight: false
    },
    {
      name: "Comprehensive AMC",
      target: "Total Coverage",
      price: "₹4,999",
      period: "/ unit / year",
      features: [
        "All Standard AMC features",
        "Free Gas Charging (if required)",
        "Free Compressor Replacement",
        "Free PCB Repair/Replacement",
        "Zero Spare Part Costs"
      ],
      highlight: true
    },
    {
      name: "Commercial SLA",
      target: "Offices & VRV Systems",
      price: "Custom",
      period: "based on tonnage",
      features: [
        "Dedicated Site Engineer",
        "Monthly Filter Cleaning",
        "Quarterly Deep Servicing",
        "Energy Efficiency Audit",
        "2-Hour Emergency Response"
      ],
      highlight: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Feasibility",
      description: "We visit, measure heat load, check power phases, and plan the ducting/piping route."
    },
    {
      step: "02",
      title: "Material Staging",
      description: "All copper pipes, insulation, and wiring are staged and checked for quality (gauge and grade)."
    },
    {
      step: "03",
      title: "Execution Phase",
      description: "Certified technicians perform the installation following our 25-point checklist for safety and aesthetics."
    },
    {
      step: "04",
      title: "Commissioning",
      description: "We run the system for 45 mins, check grill temperature, amperage, and gas pressures before handing over."
    }
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
          {/* Corporate Gradient Overlay - Matches Home Page */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        </div>

        {/* NAVBAR IS HERE: 
           It is inside the Hero div, so it sits on top of the image.
           Make sure Navbar.js has '/services' in transparentPages! 
        */}
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center pt-24 md:pt-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest rounded-sm">
                Service Vertical
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Operational <br/>
                <span className="text-blue-400">Excellence.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed border-l-4 border-blue-600 pl-6">
                From critical server room cooling to residential comfort, our service protocols are defined by speed, precision, and technical integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919876543210" className="bg-white text-slate-900 hover:bg-slate-100 border border-transparent px-8 py-3.5 font-bold transition-all rounded-sm flex items-center justify-center sm:justify-start">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Routine Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We separate ourselves from the competition through our rigorous "Scope of Work" protocols.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover bg-slate-50 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-slate-900/90 backdrop-blur text-white px-6 py-4 border-t border-slate-700 w-full">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-blue-600 rounded-sm">
                           {service.icon}
                         </div>
                         <div>
                           <p className="font-bold leading-none">{service.title}</p>
                           <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{service.subtitle}</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-8 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <FileCheck className="w-4 h-4" /> Scope of Work
                    </h4>
                    <ul className="space-y-4">
                      {service.scope.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">
                    Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE PROTOCOL (Steps) ================= */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Service Protocol</h2>
            <p className="text-slate-500 text-lg">Standard Operating Procedures (SOPs) for consistent quality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-black text-slate-200 absolute -top-8 -left-4 z-0 group-hover:text-blue-100 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="relative z-10 bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMC PLANS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Annual Maintenance Contracts</h2>
            <p className="text-slate-500 text-lg">Protect your investment with our SLA-backed maintenance plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-lg border transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8 border-b border-opacity-20 border-current pb-8">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.target}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={`ml-2 text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-sm font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY BREAKDOWN (Clean & Professional) ================= */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          {/* Clean, Professional Card. 
              No dark modes, no pulsing lights. 
              Just clear, urgent information. 
          */}
          <div className="bg-white rounded-lg border-l-4 border-red-600 shadow-md p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Info */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">
                  Critical System Failure?
                </h2>
                <p className="text-slate-600 max-w-xl">
                  Our emergency response team is on standby 24/7 with universal spares to minimize downtime. 
                  <span className="font-semibold text-slate-800"> Priority scheduling for contract customers.</span>
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                    <Clock className="w-4 h-4 mr-2 text-green-600" /> Avg Response: 45 Mins
                  </span>
                  <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> 24/7 Availability
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="w-full lg:w-auto shrink-0 text-center lg:text-right">
              <a 
                href="tel:+919876543210" 
                className="group flex items-center justify-center w-full lg:w-auto gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm shadow-md transition-all shadow-red-100"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Call Emergency Support</span>
              </a>
              <p className="text-xs text-slate-400 mt-3 font-medium">
                Direct line to Service Manager
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-blue-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Service Visit</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience the difference of professional, protocol-driven HVAC care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 font-bold rounded-sm shadow-xl transition-all flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" />
              Book Appointment
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-600 px-8 py-3 font-bold rounded-sm transition-all">
              Get AMC Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;