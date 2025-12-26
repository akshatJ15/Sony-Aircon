import { 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  FileText, 
  Phone, 
  Ruler,        // For Sizing
  Hammer,       // For Installation
  ShieldCheck   // For Warranty
} from 'lucide-react';
import heroImage from '../Images/daikin-vietnam-07.jpg';
import Navbar from '../components/Navbar';
import VRVImage from '../Images/VRV.png';

const Products = () => {
  const productCategories = [
    {
      title: "VRV / VRF Systems",
      description: "Advanced variable refrigerant flow systems designed for high-efficiency cooling in multi-story buildings and luxury residences.",
      image: VRVImage,
      features: ["Energy Star® Rated", "Inverter Technology", "Smart Zone Controls", "5-Year Compressor Warranty"],
      tag: "Best Seller"
    },
    {
      title: "Window Air Conditioners",
      description: "Compact, cost-effective cooling solutions. Perfect for site offices, cabins, and residential spaces where ducting isn't feasible.",
      image: "https://images.pexels.com/photos/5835595/pexels-photo-5835595.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Space Saving Design", "Easy Installation", "Low Maintenance", "3-Year PCB Warranty"],
      tag: "Economy"
    },
    {
      title: "Central Air Conditioning",
      description: "Comprehensive climate control infrastructure for malls, hospitals, and large corporate complexes requiring uniform cooling.",
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Precise Zone Control", "High-Static Pressure", "Ductwork Integration", "10-Year Service Life"],
      tag: "Commercial"
    },
    {
      title: "Cassette Ceiling Units",
      description: "Discreet, ceiling-mounted units that provide 360° airflow coverage without occupying wall or floor space.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["360° Air Distribution", "Sleek Aesthetics", "Whisper Quiet", "7-Year Warranty"],
      tag: "Modern Office"
    }
  ];

  const brands = [
    { name: "Daikin", type: "Platinum Partner" },
    { name: "Mitsubishi", type: "Authorized Dealer" },
    { name: "LG", type: "Commercial Partner" },
    { name: "Samsung", type: "System Integrator" },
    { name: "Voltas", type: "Retail Partner" },
    { name: "Blue Star", type: "Project Partner" }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-20 w-full border-b border-white/10">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center pt-24 md:pt-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest rounded-sm">
                Product Catalog 2025
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                High-Performance <br/>
                <span className="text-blue-400">Cooling Solutions.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Explore our range of energy-efficient systems from the world's leading manufacturers. Designed for durability and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 font-bold transition-all rounded-sm flex items-center justify-center sm:justify-start shadow-lg">
                  <FileText className="mr-2 w-5 h-5" />
                  Get Price List
                </button>
                <button className="bg-white/10 hover:bg-white hover:text-slate-900 text-white border border-white/20 px-8 py-3.5 font-bold transition-all rounded-sm flex items-center justify-center sm:justify-start">
                  <Download className="mr-2 w-5 h-5" />
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT CATEGORIES (Zig-Zag) ================= */}
      <section className="py-24 bg-white relative">
        {/* Dot Pattern Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Product Range</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From compact residential units to industrial-grade chillers, we supply and install systems that meet specific technical requirements.
            </p>
          </div>

          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[400px] object-cover bg-slate-50 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 uppercase tracking-wide rounded-sm border border-slate-200 shadow-sm">
                      {category.tag}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-100 pl-4">
                    {category.description}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Technical Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-slate-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center transition-colors group">
                    View Specifications <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPROVED VALUE PROPOSITION SECTION ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: The Philosophy */}
            <div className="lg:w-1/3 space-y-6">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">The Engineering Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Efficiency is 40% Machine, 60% Installation.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Most cooling issues arise from poor sizing or improper installation. We don't just sell boxes; we sell a calibrated climate ecosystem.
              </p>
              
              <div className="pt-6 border-t border-slate-200 mt-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase">
                    Vacuum Tested <br/>Installation
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Standards List */}
            <div className="lg:w-2/3 grid grid-cols-1 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row gap-6 group">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Ruler className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Precision Heat Load Calculation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We don't guess tonnage. We calculate it based on room volume, glass area, occupancy, and sun orientation to ensure you never overpay for electricity.
                  </p>
                </div>
                <div className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors ml-auto hidden md:block">01</div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row gap-6 group">
                 <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Hammer className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Installation Protocol</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Zero-leakage guarantee. We use heavy-gauge copper piping, proper insulation, and industry-standard vacuum pumps to remove moisture before gas charging.
                  </p>
                </div>
                <div className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors ml-auto hidden md:block">02</div>
              </div>

               {/* Feature 3 */}
               <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col md:flex-row gap-6 group">
                 <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Genuine Warranty Support</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    As authorized dealers, we activate the manufacturer's warranty immediately. Plus, we offer a dedicated service manager for post-sales support.
                  </p>
                </div>
                <div className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors ml-auto hidden md:block">03</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANDS GRID ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Authorized Partners</h2>
                <p className="text-slate-500 mt-2">We deal exclusively in genuine products from global leaders.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group text-center flex flex-col items-center justify-center h-40"
              >
                <div className="text-2xl font-black text-slate-300 group-hover:text-slate-800 transition-colors uppercase tracking-tighter mb-2">
                  {brand.name}
                </div>
                <div className="h-0.5 w-8 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 mb-2"></div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide">
                  {brand.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Confused about tonnage or star ratings?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Let our technical experts help you select the perfect machine based on your room size, sun exposure, and occupancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 font-bold rounded-sm shadow-xl transition-all flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Book Free Consultation
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 font-bold rounded-sm transition-all">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;