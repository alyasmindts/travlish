import React, { useState } from 'react';
import { 
  MapPin, Users, Award, Camera, Mic, Globe, Check, Star, 
  BookOpen, Trophy, Heart, ArrowRight, X, Menu 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Package {
  id: number;
  name: string;
  tier: string;
  price: string;
  min: number;
  max: number;
  color: string;
  badge: string;
  features: string[];
  highlights: string[];
}

interface Session {
  id: number;
  title: string;
  duration: string;
  icon: React.ReactNode;
  materials: string[];
  activities?: string[];
  outputs: string[];
}

interface PilotProject {
  id: number;
  title: string;
  location: string;
  theme: string;
  outputs: string[];
  image: string;
  imageAlt: string;
  imageClass?: string;
}

const heritageImages = {
  kotaLama: "https://images.pexels.com/photos/37786629/pexels-photo-37786629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800",
  ampel: "/ampel-mosque-historic-bw.png",
  mosque: "https://images.pexels.com/photos/36225580/pexels-photo-36225580.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800",
  kampungSurabaya: "https://images.pexels.com/photos/5939239/pexels-photo-5939239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800",
  creator: "https://images.pexels.com/photos/38499653/pexels-photo-38499653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1800"
};

const packages: Package[] = [
  {
    id: 1,
    name: "HERITAGE STARTER",
    tier: "Bronze",
    price: "250.000",
    min: 25,
    max: 40,
    color: "from-amber-700 to-amber-800",
    badge: "🥉",
    features: [
      "Workshop Public Speaking in English",
      "Heritage Tour",
      "Tour Guide",
      "Trainer Professional",
      "Digital Content Workshop",
      "Modul Digital",
      "Sertifikat Digital",
      "Snack & Coffee Break",
      "Dokumentasi Foto",
      "Group Challenge",
      "Doorprize Games"
    ],
    highlights: []
  },
  {
    id: 2,
    name: "HERITAGE CREATOR",
    tier: "Silver",
    price: "350.000",
    min: 25,
    max: 40,
    color: "from-slate-600 to-slate-700",
    badge: "🥈",
    features: [
      "Semua fasilitas Package Starter",
      "Lunch",
      "Professional Mentor",
      "Personal Branding Coaching",
      "E-Book Public Speaking",
      "Best Content Award",
      "Official Documentation",
      "Group Photo Package"
    ],
    highlights: ["Lunch", "Professional Mentor", "Personal Branding Coaching"]
  },
  {
    id: 3,
    name: "HERITAGE SIGNATURE",
    tier: "Gold",
    price: "500.000",
    min: 25,
    max: 40,
    color: "from-amber-500 via-yellow-600 to-amber-700",
    badge: "🥇",
    features: [
      "Semua fasilitas Package Creator",
      "Exclusive Heritage Experience",
      "Professional Photographer",
      "Cinematic Video Documentation",
      "Interview Session",
      "Merchandise Exclusive",
      "Printed Certificate Premium",
      "Best Speaker Trophy",
      "Best Content Trophy",
      "Professional Networking Session",
      "After Event Mentoring (Online)"
    ],
    highlights: ["Cinematic Video", "Pro Photographer", "Trophies", "Premium Certificate"]
  }
];

const sessions: Session[] = [
  {
    id: 1,
    title: "English Public Speaking Workshop",
    duration: "60 Minutes",
    icon: <Mic className="w-6 h-6" />,
    materials: [
      "Breaking the Ice",
      "Confidence Building",
      "Daily English Conversation",
      "Public Speaking Formula",
      "Storytelling Technique",
      "Camera Speaking",
      "English Presentation"
    ],
    outputs: ["English Introduction", "Speaking Practice"]
  },
  {
    id: 2,
    title: "Heritage Exploration Tour",
    duration: "90 Minutes",
    icon: <MapPin className="w-6 h-6" />,
    materials: [],
    activities: [
      "Heritage Observation",
      "Historical Exploration",
      "English Tour Mission",
      "Photo Challenge",
      "Heritage Quiz"
    ],
    outputs: []
  },
  {
    id: 3,
    title: "Content Maker Challenge",
    duration: "60 Minutes",
    icon: <Camera className="w-6 h-6" />,
    materials: [],
    activities: [
      "Travel Vlog",
      "Reels Instagram",
      "Short Video",
      "Heritage Interview",
      "English Speaking Video"
    ],
    outputs: ["1 Video Personal Branding", "1 Heritage Content"]
  },
  {
    id: 4,
    title: "Digital Creative Workshop",
    duration: "45 Minutes",
    icon: <BookOpen className="w-6 h-6" />,
    materials: [
      "Mobile Editing",
      "Canva Design",
      "Caption Writing",
      "Personal Branding",
      "Digital Publishing"
    ],
    outputs: ["Video Final", "Digital Poster", "Caption English Version"]
  },
  {
    id: 5,
    title: "Awarding & Appreciation",
    duration: "25 Minutes",
    icon: <Trophy className="w-6 h-6" />,
    materials: [],
    activities: [
      "Best Speaker",
      "Best Content Creator",
      "Best Storytelling",
      "Best Team",
      "Best Heritage Explorer"
    ],
    outputs: ["Certificate", "Group Photo", "Networking"]
  }
];

const pilotProjects: PilotProject[] = [
  {
    id: 1,
    title: "Heritage Hangout at Kota Lama Surabaya",
    location: "Kota Lama, Surabaya",
    theme: "Rediscover The Old City Through English Storytelling",
    outputs: ["English Heritage Presentation", "Heritage Vlog", "Instagram Reels", "Digital Storytelling"],
    image: heritageImages.kotaLama,
    imageAlt: "Colonial heritage architecture in Surabaya",
    imageClass: "grayscale contrast-125"
  },
  {
    id: 2,
    title: "Ampel Heritage Experience",
    location: "Ampel, Surabaya",
    theme: "Cultural Journey Through History & Faith",
    outputs: ["Heritage Documentary", "English Speaking Challenge", "Cultural Interview", "Video Content"],
    image: heritageImages.ampel,
    imageAlt: "Masjid Sunan Ampel Surabaya in a historical black and white style",
    imageClass: "grayscale contrast-125"
  },
  {
    id: 3,
    title: "Heritage Walking Tour at Kampung Heritage Peneleh",
    location: "Kampung Heritage Peneleh",
    theme: "Walking Through History, Speaking With Confidence",
    outputs: ["Travel Vlog", "Historical Storytelling", "Heritage Photography", "Social Media Content"],
    image: heritageImages.kampungSurabaya,
    imageAlt: "Jalan Peneleh kampung wisata Surabaya",
    imageClass: "grayscale contrast-125"
  }
];

const sessionImages = [
  "/session-public-speaking-hijab.png",
  heritageImages.kotaLama,
  "/session-content-maker-smartphone.png",
  "/session-digital-editing-laptop.png",
  "/session-awarding-certificates.png"
];

const participantOutputs = [
  "English Self Introduction",
  "Public Speaking Performance",
  "Heritage Travel Video",
  "Personal Branding Video",
  "Instagram Reel",
  "Digital Poster",
  "Certificate"
];

const benefits = [
  { icon: <Globe className="w-6 h-6" />, title: "Learning by Experience", desc: "Real-world heritage learning" },
  { icon: <Mic className="w-6 h-6" />, title: "English Practice", desc: "Speak English in authentic settings" },
  { icon: <Users className="w-6 h-6" />, title: "Public Speaking", desc: "Build confidence on camera & stage" },
  { icon: <MapPin className="w-6 h-6" />, title: "Heritage Tourism", desc: "Discover Indonesia's rich culture" },
  { icon: <Camera className="w-6 h-6" />, title: "Digital Content Creation", desc: "Professional videos & reels" },
  { icon: <Star className="w-6 h-6" />, title: "Personal Branding", desc: "Develop your professional image" },
  { icon: <Users className="w-6 h-6" />, title: "Creative Collaboration", desc: "Teamwork & leadership skills" },
  { icon: <Heart className="w-6 h-6" />, title: "Networking", desc: "Connect with like-minded peers" },
  { icon: <Award className="w-6 h-6" />, title: "Professional Portfolio", desc: "Take home real deliverables" }
];

const targetParticipants = [
  "SMA / SMK / MA", "Mahasiswa", "Organisasi", "Komunitas", 
  "Corporate", "Pemerintahan", "Instansi Pendidikan", "Lembaga Pelatihan", 
  "Masyarakat Umum", "Professional Community"
];

const coreValues = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "English Beyond Classroom",
    desc: "Belajar Bahasa Inggris langsung di lingkungan nyata sehingga lebih natural dan komunikatif."
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Heritage Immersion",
    desc: "Menghidupkan sejarah melalui pengalaman eksplorasi yang menyenangkan dan bermakna."
  },
  {
    icon: <Mic className="w-7 h-7" />,
    title: "Public Speaking Excellence",
    desc: "Meningkatkan rasa percaya diri berbicara di depan publik dan kamera dalam Bahasa Inggris."
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Digital Creative Skills",
    desc: "Menghasilkan konten digital berkualitas menggunakan smartphone dan aplikasi kreatif."
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Personal Branding Development",
    desc: "Membangun citra diri profesional melalui video, storytelling, dan media sosial."
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Collaborative Learning",
    desc: "Mengembangkan kemampuan teamwork, komunikasi, dan kepemimpinan melalui aktivitas kelompok."
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(2);
  const [activeSession, setActiveSession] = useState(1);
  const [selectedProject, setSelectedProject] = useState(0);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    participants: '',
    package: '2',
    location: 'Kota Lama Surabaya',
    date: ''
  });

  const currentSession = sessions.find(s => s.id === activeSession)!;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (pkgId: number) => {
    setSelectedPackage(pkgId);
    setFormData(prev => ({ ...prev, package: pkgId.toString() }));
  };

  const openRegister = (pkgId?: number) => {
    if (pkgId) {
      setSelectedPackage(pkgId);
      setFormData(prev => ({ ...prev, package: pkgId.toString() }));
    }
    setShowRegisterModal(true);
    setShowSuccess(false);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setShowRegisterModal(false);
    setShowSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setShowSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '', email: '', phone: '', organization: '',
          participants: '', package: selectedPackage.toString(),
          location: 'Kota Lama Surabaya', date: ''
        });
        setShowSuccess(false);
        setShowRegisterModal(false);
      }, 2200);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-slate-800 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center text-left" aria-label="Back to top">
            <img src="/travlish-logo.png" alt="Travlish Event Organizer" className="h-14 w-28 object-contain object-left" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium">
            <button onClick={() => scrollToSection('concept')} className="hover:text-[#0F4C3A] transition-colors">Concept</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-[#0F4C3A] transition-colors">Programs</button>
            <button onClick={() => scrollToSection('flow')} className="hover:text-[#0F4C3A] transition-colors">Program Flow</button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-[#0F4C3A] transition-colors">Packages</button>
            <button onClick={() => scrollToSection('locations')} className="hover:text-[#0F4C3A] transition-colors">Locations</button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => openRegister()}
              className="hidden md:block px-6 py-2.5 bg-[#0F4C3A] text-white rounded-full font-semibold text-sm hover:bg-[#1A6B54] transition-all active:scale-[0.985]"
            >
              Register Now
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4 text-sm font-medium"
            >
              {['concept', 'programs', 'flow', 'packages', 'locations'].map((id) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left py-1 capitalize">
                  {id === 'flow' ? 'Program Flow' : id}
                </button>
              ))}
              <button onClick={() => openRegister()} className="mt-3 w-full py-3 bg-[#0F4C3A] text-white rounded-full font-semibold">Register Now</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <div className="pt-20 text-white relative isolate overflow-hidden min-h-[700px] flex items-center">
        <img
          src={heritageImages.kotaLama}
          alt="Colonial heritage architecture in Surabaya"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,42,34,0.97)_0%,rgba(9,48,39,0.88)_45%,rgba(9,48,39,0.42)_100%)]" />
        <div className="max-w-6xl mx-auto w-full px-6 pt-20 pb-24 md:pt-24 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="mb-6 border-b border-white/25 pb-5">
              <div className="font-serif text-[28px] font-bold tracking-[0.16em] sm:text-[36px]">TRAVLISH</div>
              <div className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-[#E0B26E] sm:text-xs">EVENT ORGANIZER</div>
            </div>
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur rounded-full text-sm mb-5 tracking-[1.5px] font-medium border border-white/20">
              SURABAYA • INDONESIA
            </div>
            
            <h1 className="text-6xl md:text-7xl leading-[0.96] font-bold tracking-tighter mb-4">
              TRAVELING IN ENGLISH<br />TO INDONESIA'S<br />HERITAGE DESTINATIONS
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#C59A6C] font-medium tracking-tight mt-2 mb-6">
              "Explore Heritage. Speak English. Create Digital Impact."
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => scrollToSection('packages')}
                className="flex items-center gap-3 px-9 py-4 bg-white text-[#0F4C3A] rounded-2xl font-semibold text-lg hover:bg-[#C59A6C] hover:text-white transition-all active:scale-[0.985] shadow-xl"
              >
                View Packages <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('flow')}
                className="flex items-center gap-3 px-9 py-4 border-2 border-white/70 hover:bg-white/10 text-white rounded-2xl font-semibold text-lg transition-all"
              >
                Explore Program Flow
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => <div key={i} className="w-7 h-7 bg-white/30 border border-white/40 rounded-full" />)}
                </div>
                <span className="text-white/70">Trusted by 200+ participants</span>
              </div>
              <div className="hidden md:block w-px h-3 bg-white/30" />
              <div className="text-white/70">5-Hour Intensive Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TAGLINE BAR */}
      <div className="bg-[#C59A6C] py-3.5 text-[#0F4C3A]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-x-8 gap-y-1 text-sm font-semibold tracking-widest text-center flex-wrap">
          <span>LEARN</span><span className="text-[#0F4C3A]/40">•</span>
          <span>EXPLORE</span><span className="text-[#0F4C3A]/40">•</span>
          <span>SPEAK</span><span className="text-[#0F4C3A]/40">•</span>
          <span>CREATE</span><span className="text-[#0F4C3A]/40">•</span>
          <span>INSPIRE</span>
        </div>
      </div>

      {/* OFFICIAL CAMPAIGN POSTER */}
      <section aria-labelledby="poster-heading" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold tracking-[3px] text-[#C59A6C]">OFFICIAL PROGRAM VISUAL</div>
            <h2 id="poster-heading" className="mt-3 text-5xl font-bold tracking-tighter text-[#0F4C3A]">Heritage English Experience</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              Identitas visual program TRAVLISH menyatukan heritage Surabaya, perjalanan belajar Bahasa Inggris, dan kreativitas digital dalam satu pengalaman yang berkesan.
            </p>
            <button onClick={() => openRegister()} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#0F4C3A] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-black">
              Join the Experience <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mx-auto w-full max-w-[540px]"
          >
            <img src="/travlish-heritage-poster.png" alt="Poster program TRAVLISH Heritage English Experience" className="w-full border border-[#DCC9A6] shadow-[0_24px_60px_rgba(15,76,58,0.18)]" />
          </motion.figure>
        </div>
      </section>

      {/* COMPANY CONCEPT */}
      <div id="concept" className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[4px] text-xs font-semibold text-[#C59A6C] mb-3">COMPANY CONCEPT</div>
          <h2 className="text-5xl tracking-tighter font-bold text-[#0F4C3A]">TRAVLISH Event Organizer</h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-center text-slate-700 leading-relaxed">
          <p className="text-xl">
            TRAVLISH Event Organizer merupakan penyelenggara program <span className="font-semibold text-[#0F4C3A]">Educational Heritage Experience</span> yang menggabungkan wisata edukasi, pembelajaran Bahasa Inggris, public speaking, digital content creation, dan personal branding dalam satu pengalaman belajar yang interaktif.
          </p>
          <p className="mt-4 text-lg">
            Bukan sekadar city tour, tetapi sebuah <span className="font-medium">Experiential Learning Program</span> dimana peserta belajar langsung di lokasi heritage sambil membangun kemampuan komunikasi internasional dan keterampilan digital yang relevan dengan era industri kreatif.
          </p>
        </div>

        {/* GRAND THEME */}
        <div className="mt-14 bg-white border border-slate-100 rounded-3xl px-10 py-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-9 items-center">
            <div>
              <img src="/travlish-logo.png" alt="Travlish Event Organizer" className="h-32 w-32 object-contain mb-4" />
              <div className="font-mono tracking-[2px] text-xs text-[#C59A6C]">GRAND THEME</div>
              <div className="text-[#0F4C3A] text-5xl tracking-[-2.4px] font-bold leading-none mt-1">HERITAGE ENGLISH EXPERIENCE</div>
            </div>
            <div className="md:pl-7 md:border-l text-xl text-slate-600 font-medium">
              Explore Local Heritage, <span className="text-[#0F4C3A]">Build Global Communication</span>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAM OBJECTIVES */}
      <div className="bg-white py-16 border-y">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[3px] font-semibold text-[#C59A6C]">PROGRAM OBJECTIVES</div>
            <h3 className="text-4xl font-bold tracking-tighter text-[#0F4C3A] mt-2">Peserta akan mampu</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
            {[
              "Meningkatkan kemampuan Public Speaking in English",
              "Berani berbicara di depan kamera",
              "Mengenal sejarah dan budaya Indonesia",
              "Membuat video personal branding",
              "Membuat konten digital profesional",
              "Mengembangkan kemampuan komunikasi global",
              "Memiliki portofolio digital setelah kegiatan"
            ].map((obj, i) => (
              <div key={i} className="flex gap-3 text-[15px]">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PILOT PROJECTS */}
      <div id="programs" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-9">
          <div>
            <div className="font-semibold tracking-[2.5px] text-xs text-[#C59A6C]">PROGRAM PILOT PROJECT</div>
            <h3 className="text-[#0F4C3A] text-5xl font-bold tracking-tighter">Our Signature Experiences</h3>
          </div>
          <button onClick={() => scrollToSection('packages')} className="hidden md:flex items-center gap-2 text-sm font-medium text-[#0F4C3A] hover:underline">
            Choose your package <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {pilotProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`flex-1 cursor-pointer group overflow-hidden rounded-3xl transition-all border-2 flex flex-col ${selectedProject === index ? 'border-[#0F4C3A] bg-white shadow-xl' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.imageAlt} className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClass ?? ''}`} />
              </div>
              <div className="p-8 flex flex-1 flex-col">
                <div className="uppercase tracking-[1.5px] text-xs font-semibold text-[#C59A6C] mb-1">{project.location}</div>
                <h4 className="font-bold text-2xl tracking-[-1px] leading-tight text-[#0F4C3A] mb-3 group-hover:text-[#1A6B54]">{project.title}</h4>
                <p className="italic text-slate-600 text-[15px] mb-auto">"{project.theme}"</p>
                
                <div className="mt-7 pt-6 border-t text-sm">
                  <div className="font-semibold mb-2 text-xs tracking-widest text-slate-500">OUTPUTS</div>
                  <ul className="space-y-[5px] text-sm text-slate-700">
                    {project.outputs.map((out, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#C59A6C] rounded-full" /> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAM FLOW — INTERACTIVE */}
      <div id="flow" className="bg-[#0F4C3A] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="font-mono text-[#C59A6C] tracking-[3px] text-xs mb-1">PROGRAM FLOW</div>
              <h3 className="font-bold text-white text-5xl tracking-tighter">5 Hours Intensive Experience</h3>
            </div>
            <div className="hidden md:block text-right text-white/70 text-sm max-w-[210px]">
              Every session is intentionally designed for maximum learning impact
            </div>
          </div>

          {/* Timeline Navigation */}
          <div className="flex gap-2 mb-9 overflow-x-auto pb-2 scrollbar-hide">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-2xl font-medium text-sm flex items-center gap-2 transition-all border ${activeSession === session.id 
                  ? 'bg-white text-[#0F4C3A] border-white' 
                  : 'border-white/30 hover:bg-white/10 text-white/90'}`}
              >
                {session.icon} <span>Session {session.id}</span>
              </button>
            ))}
          </div>

          {/* Active Session Detail */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSession}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl p-9 md:p-11"
            >
              <div className="flex flex-col lg:flex-row gap-x-12 gap-y-8">
                <div className="lg:w-5/12">
                  <div className="flex items-center gap-3 text-[#C59A6C]">
                    <div>{currentSession.icon}</div>
                    <div className="uppercase tracking-[2px] text-xs font-semibold">SESSION {currentSession.id}</div>
                  </div>
                  <h4 className="text-white text-[39px] font-bold tracking-[-1.8px] leading-none mt-3 mb-3">{currentSession.title}</h4>
                  <div className="inline-block bg-white/10 text-white/90 text-sm px-5 py-1.5 rounded-full tracking-wide">{currentSession.duration}</div>
                  <div className="mt-7 h-36 overflow-hidden rounded-2xl border border-white/20">
                    <img
                      src={sessionImages[currentSession.id - 1]}
                      alt={`TRAVLISH session ${currentSession.id} experience`}
                      className="h-full w-full object-cover opacity-85"
                    />
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-x-10 gap-y-8">
                  {currentSession.materials && currentSession.materials.length > 0 && (
                    <div>
                      <div className="uppercase text-[#C59A6C] text-xs tracking-[2px] mb-3 font-medium">MATERI</div>
                      <ul className="space-y-2 text-[15px]">
                        {currentSession.materials.map((mat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5"><Check className="mt-[3px] w-4 h-4 flex-shrink-0" />{mat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentSession.activities && currentSession.activities.length > 0 && (
                    <div>
                      <div className="uppercase text-[#C59A6C] text-xs tracking-[2px] mb-3 font-medium">ACTIVITIES</div>
                      <ul className="space-y-2 text-[15px]">
                        {currentSession.activities.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2.5"><ArrowRight className="mt-1 w-4 h-4 flex-shrink-0" />{act}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentSession.outputs && currentSession.outputs.length > 0 && (
                    <div className="md:col-span-2 pt-3 border-t border-white/20">
                      <div className="uppercase text-[#C59A6C] text-xs tracking-[2px] mb-3 font-medium">OUTPUT</div>
                      <div className="flex flex-wrap gap-2">
                        {currentSession.outputs.map((out, idx) => (
                          <div key={idx} className="bg-white/10 px-5 py-1.5 rounded-2xl text-sm tracking-tight">{out}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PARTICIPANT OUTPUTS */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-11">
          <div className="text-xs tracking-[3px] text-[#C59A6C] font-semibold">OUTPUT PESERTA</div>
          <h3 className="text-4xl font-bold tracking-tighter mt-2">Setiap peserta akan menghasilkan</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {participantOutputs.map((output, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-[21px] rounded-2xl group hover:border-[#C59A6C]">
              <div className="text-[#C59A6C]"><Check className="w-5 h-5" /></div>
              <div className="font-medium tracking-tight group-hover:text-[#0F4C3A]">{output}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATIONS */}
      <div id="locations" className="bg-white border-y py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="uppercase tracking-[3px] text-xs text-[#C59A6C] font-medium mb-1">LOKASI PROGRAM</div>
              <h3 className="font-bold text-5xl leading-none tracking-tighter text-[#0F4C3A]">Two Worlds.<br />One Experience.</h3>
              <p className="mt-6 text-lg text-slate-600">Indoor sessions for deep learning. Outdoor heritage sites for real-world practice.</p>
            </div>

            <div className="md:col-span-3 space-y-4 pt-2">
              {/* Indoor */}
              <div className="border border-slate-200 rounded-3xl p-8 flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#0F4C3A] text-white flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1 text-[#0F4C3A]">Indoor Session</div>
                  <div className="font-bold text-xl mb-2">Quds Royal Hotel, Ampel - Surabaya</div>
                  <div className="text-slate-600">Workshop • Training • Digital Class • Awarding</div>
                </div>
              </div>

              {/* Outdoor */}
              <div className="border border-slate-200 rounded-3xl p-8">
                <div className="font-semibold text-lg mb-3 flex items-center gap-2 text-[#0F4C3A]">
                  <MapPin className="w-5 h-5" /> Outdoor Session — Pilihan Destinasi
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {["Kota Lama Surabaya", "Ampel Heritage", "Kampung Heritage Peneleh"].map((loc, i) => (
                    <div key={i} className="bg-slate-50 rounded-2xl p-4 font-medium">{loc}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TARGET & BENEFITS */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-9 gap-y-14">
          {/* Target Peserta */}
          <div className="md:col-span-5">
            <div className="font-semibold text-[#C59A6C] text-xs tracking-[3px] mb-2">TARGET PESERTA</div>
            <h4 className="text-[#0F4C3A] font-bold text-4xl tracking-[-1.5px]">Program untuk Semua</h4>
            <div className="mt-6 flex flex-wrap gap-2">
              {targetParticipants.map((t, i) => (
                <div key={i} className="bg-white text-sm px-5 py-1.5 border rounded-2xl text-slate-700">{t}</div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="md:col-span-7">
            <div className="font-semibold text-[#C59A6C] text-xs tracking-[3px] mb-4">BENEFIT PESERTA</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl px-6 py-6 flex gap-5 items-start">
                  <div className="text-[#C59A6C] mt-0.5">{benefit.icon}</div>
                  <div>
                    <div className="font-semibold text-lg tracking-tight text-[#0F4C3A]">{benefit.title}</div>
                    <div className="text-slate-600">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES / NILAI UNGGUL */}
      <div className="bg-white py-16 border-y">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="font-semibold text-xs tracking-[3px] text-[#C59A6C]">NILAI UNGGUL PROGRAM</div>
            <h3 className="text-[#0F4C3A] font-bold text-[42px] tracking-[-2.2px] leading-none mt-3">Why TRAVLISH is Different</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="border-l-4 border-[#C59A6C] pl-8 py-1">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-[#0F4C3A]">{value.icon}</div>
                  <div>
                    <div className="text-[#0F4C3A] font-semibold text-[21px] tracking-tight mb-1">{value.title}</div>
                    <div className="text-slate-600 leading-relaxed">{value.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING PACKAGES */}
      <div id="packages" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-[#C59A6C] uppercase font-semibold tracking-[3.5px] text-xs mb-2">PAKET PROGRAM</div>
          <h2 className="font-bold tracking-tighter text-6xl text-[#0F4C3A]">Choose Your Experience</h2>
          <p className="mt-3 text-lg text-slate-600">Minimum 25 participants • Maximum 40 participants per batch</p>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => handlePackageSelect(pkg.id)}
              className={`group relative rounded-3xl border-2 p-9 flex flex-col transition-all cursor-pointer ${selectedPackage === pkg.id 
                ? 'border-[#0F4C3A] bg-white shadow-2xl scale-[1.01]' 
                : 'border-slate-200 hover:border-slate-300 bg-white'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#C59A6C]">{pkg.tier.toUpperCase()}</div>
                  <div className="font-bold tracking-[-1.5px] text-3xl text-[#0F4C3A] mt-1">{pkg.name}</div>
                </div>
                <div className="text-4xl opacity-90">{pkg.badge}</div>
              </div>

              <div className="mt-7 mb-8">
                <span className="text-6xl font-bold tabular-nums tracking-[-3.2px] text-[#0F4C3A]">Rp {pkg.price}</span>
                <span className="text-lg text-slate-500">/peserta</span>
              </div>

              <div className="text-sm font-medium text-[#C59A6C] mb-3">FASILITAS</div>
              <ul className="space-y-[9px] text-[14.5px] flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <Check className="mt-[3px] w-[17px] h-[17px] text-emerald-600 flex-shrink-0" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={(e) => { e.stopPropagation(); openRegister(pkg.id); }}
                className={`mt-8 w-full py-4 rounded-2xl font-semibold transition-all text-base ${selectedPackage === pkg.id 
                  ? 'bg-[#0F4C3A] text-white hover:bg-black' 
                  : 'bg-slate-900 hover:bg-slate-950 text-white'}`}
              >
                Select {pkg.tier} Package
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => openRegister()}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C59A6C] text-[#0F4C3A] font-semibold rounded-2xl text-lg hover:bg-[#b38656] transition-colors"
          >
            Register Your Group <ArrowRight />
          </button>
        </div>
      </div>

      {/* VALUE PROPOSITION */}
      <div className="bg-[#0F4C3A] text-white py-20">
        <div className="max-w-6xl mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.72fr]">
          <div className="text-center lg:text-left">
            <div className="uppercase text-[#C59A6C] tracking-[4px] text-sm font-medium mb-3">VALUE PROPOSITION</div>
            <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tighter">
              TRAVLISH bukan sekadar tour, melainkan sebuah <span className="text-[#C59A6C]">Heritage Learning Experience</span> yang mengintegrasikan Education, English Communication, Digital Creativity, dan Personal Branding dalam satu perjalanan inspiratif.
            </p>
            <div className="mt-9 text-xl text-white/70 max-w-xl mx-auto lg:mx-0">
              Setiap peserta pulang tidak hanya membawa pengalaman, tetapi juga portofolio digital, keterampilan komunikasi global, serta perspektif baru untuk menjadi generasi yang bangga pada warisan budaya Indonesia.
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            src="/travlish-heritage-poster.png"
            alt="Visual program TRAVLISH Heritage English Experience"
            className="mx-auto w-full max-w-[330px] border border-[#C59A6C]/50 shadow-2xl"
          />
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-[#0F4C3A] text-6xl tracking-tighter">Ready to explore heritage in English?</h2>
          <p className="mt-4 text-xl text-slate-600">Join the next Heritage English Experience in Surabaya.</p>
          
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openRegister()} className="flex-1 sm:flex-none px-11 py-[18px] bg-[#0F4C3A] hover:bg-black text-white rounded-2xl font-semibold text-lg transition-all">Register Now</button>
            <button onClick={() => scrollToSection('packages')} className="flex-1 sm:flex-none px-11 py-[18px] border-2 border-[#0F4C3A] text-[#0F4C3A] hover:bg-slate-100 rounded-2xl font-semibold text-lg transition-all">Compare Packages</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white/70 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-y-10">
          <div>
            <img src="/travlish-logo.png" alt="Travlish Event Organizer" className="h-24 w-36 rounded-xl bg-white p-2 object-contain mb-4" />
            <div className="text-sm">Event Organizer • Surabaya, Indonesia</div>
          </div>
          <div className="text-sm md:text-right space-y-1">
            <div>📍 Quds Royal Hotel, Ampel - Surabaya</div>
            <div>Explore Heritage. Speak English. Create Digital Impact.</div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs tracking-wider text-white/50">© TRAVLISH Event Organizer. All Rights Reserved.</div>
      </footer>

      {/* REGISTER MODAL */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70] p-5" onClick={closeModal}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {!showSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="bg-[#0F4C3A] px-8 py-6 text-white flex justify-between items-center">
                    <div>
                      <div className="font-semibold tracking-tight">Register for TRAVLISH</div>
                      <div className="text-[#C59A6C] text-sm">Heritage English Experience</div>
                    </div>
                    <button onClick={closeModal} className="text-white/70 hover:text-white"><X /></button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">FULL NAME</label>
                        <input name="name" value={formData.name} onChange={handleFormChange} required className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">EMAIL ADDRESS</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="you@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">PHONE / WHATSAPP</label>
                        <input name="phone" value={formData.phone} onChange={handleFormChange} required className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="+62 812 3456 7890" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">ORGANIZATION / SCHOOL</label>
                        <input name="organization" value={formData.organization} onChange={handleFormChange} className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="Institution name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">NUMBER OF PARTICIPANTS</label>
                        <input name="participants" value={formData.participants} onChange={handleFormChange} className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="e.g. 30" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold tracking-wider text-slate-600">PREFERRED DATE</label>
                        <input type="text" name="date" value={formData.date} onChange={handleFormChange} className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm" placeholder="DD / MM / YYYY" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold tracking-wider text-slate-600">SELECT PACKAGE</label>
                      <select name="package" value={formData.package} onChange={(e) => { handleFormChange(e); setSelectedPackage(parseInt(e.target.value)); }} className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm bg-white">
                        {packages.map(p => (
                          <option key={p.id} value={p.id}>Package {p.tier} — Rp {p.price} / peserta</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold tracking-wider text-slate-600">PREFERRED LOCATION</label>
                      <select name="location" value={formData.location} onChange={handleFormChange} className="mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm bg-white">
                        <option>Kota Lama Surabaya</option>
                        <option>Ampel Heritage</option>
                        <option>Kampung Heritage Peneleh</option>
                      </select>
                    </div>

                    <button type="submit" className="mt-2 w-full py-[17px] bg-[#0F4C3A] text-white font-semibold rounded-2xl text-base hover:bg-black active:bg-black transition-colors">
                      SUBMIT REGISTRATION
                    </button>

                    <div className="text-center text-[11px] text-slate-500 pt-1">Our team will contact you within 24 hours to confirm availability and details.</div>
                  </form>
                </>
              ) : (
                <div className="p-16 text-center">
                  <div className="inline-block rounded-full bg-emerald-100 p-4 mb-5">
                    <Check className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-semibold tracking-tighter text-[#0F4C3A]">Thank you!</div>
                  <div className="mt-3 text-lg text-slate-600">Your registration request has been received.</div>
                  <div className="mt-1.5 text-sm text-slate-500">We will reach out shortly to finalize the details.</div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
