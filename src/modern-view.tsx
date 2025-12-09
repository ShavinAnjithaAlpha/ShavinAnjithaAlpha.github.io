import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  BookOpen, 
  Cpu, 
  Code, 
  Award,
  MapPin,
  Phone,
  Globe,
  LayoutList,
  Tablet,
  Monitor,
  Github
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faFileLines, faGripHorizontal, faTerminal, faLandMineOn, faLandmark, faFile } from '@fortawesome/free-solid-svg-icons';

const ModernView = () => {
  const [activeSection, setActiveSection] = useState('about');
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-left block w-full py-1 px-2 text-sm font-medium transition-colors duration-200 ${
        activeSection === id 
          ? 'text-slate-900 border-l-2 border-slate-900 bg-slate-100' 
          : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-800 font-sans selection:bg-slate-200 selection:text-slate-900 relative pt-8 lg:pt-0">
      {/* <div className="absolute top-0 right-0 p-4 sm:p-8 z-10">
        <PageViewNavigation />
      </div> */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar / Header */}
          <div className="lg:col-span-1 lg:sticky lg:top-20 lg:h-fit space-y-8">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Shavin Anjitha Chandrawansha
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                CS Undergraduate & Software Engineer
              </p>
              
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ambalangoda, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:shavin.21@cse.mrt.ac.lk" className="hover:underline">shavin.21@cse.mrt.ac.lk</a>
                </div>
                 <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 778542602</span>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a href="https://github.com/ShavinAnjithaAlpha" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shavin-anjitha-chandrawansha-555323229/" className="text-slate-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@shavinanjitha" className="text-slate-400 hover:text-emerald-600 transition-colors" aria-label="Medium">
                  <BookOpen className="w-5 h-5" />
                </a>
                <a href="https://shavinanjitha.me" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Website">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </header>

            <nav className="hidden lg:block space-y-1 pt-8 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2 block">
                Contents
              </span>
              <NavItem id="about" label="About" />
              <NavItem id="experience" label="Experience" />
              <NavItem id="projects" label="Projects" />
              <NavItem id="skills" label="Skills" />
              <NavItem id="education" label="Education" />
              <NavItem id="achievements" label="Achievements" />
            </nav>
          </div>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-16">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> About
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="leading-relaxed">
                I am a final-year Computer Science and Engineering undergraduate at the University of Moratuwa with a strong foundation in  <span className="font-medium text-slate-800">software engineering, distributed systems, computer security, networks, computer architecture, and cloud computing.</span>
                
                </p>
                <p className="mt-4 leading-relaxed">
                I specialize in building layers of abstraction to provide concrete solutions, with a specific focus on engineering the core systems that other applications rely on. My passion for computer science spans the entire stack, from high-level system design to low-level architecture. With experience ranging from industrial software development to academic research, I am a continuous learner dedicated to knowledge sharing. I am highly motivated to contribute to the global software landscape while collaborating with the academic community to drive further innovation.

                </p>
              </div>
            </section>

             {/* Education Section */}
             <section id="education" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Education
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                    <h3 className="font-semibold text-slate-900">B.Sc. Eng (Hons) Computer Science & Engineering</h3>
                    <span className="text-sm text-slate-500 font-mono">2022 - Present</span>
                  </div>
                  <div className="text-slate-700">University of Moratuwa</div>
                  <div className="mt-2 text-sm text-slate-600">
                    <span className="font-medium text-slate-800">CGPA: 3.90/4.0(6 Semesters)</span> (Dean's List: Sem 1, 2, 3, 4)
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                    <h3 className="font-semibold text-slate-900">G.C.E. Advanced Level</h3>
                    <span className="text-sm text-slate-500 font-mono">2017 - 2020</span>
                  </div>
                  <div className="text-slate-700">G/Dharmasoka College, Ambalangoda</div>
                  <div className="mt-2 text-sm text-slate-600">
                    District Rank: 3 | Island Rank: 11 (Physical Stream)
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Work Experience
              </h2>
              
              <div className="space-y-10">
                <div className="group relative border-l-2 border-slate-200 pl-6 hover:border-slate-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Associate Software Engineer</h3>
                    <span className="text-sm font-mono text-slate-500">Jun 2025 - Nov 2025</span>
                  </div>
                  <div className="text-base text-slate-700 font-medium mb-4">Donely.ai</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm leading-relaxed marker:text-slate-300">
                    <li>
                      Developed a desktop application for autonomous computer-use agent with capable of application controlling from scratch.
                      Also intergrate the backend services to the desktop application and contribute to some backend components.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-10 mt-10">
                <div className="group relative border-l-2 border-slate-200 pl-6 hover:border-slate-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Teaching Assistant</h3>
                    <span className="text-sm font-mono text-slate-500">Aug 2025 - Nov 2025</span>
                  </div>
                  <div className="text-base text-slate-700 font-medium mb-4">University of Moratuwa</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm leading-relaxed marker:text-slate-300">
                    <li>
                      Led weekly lab sessions for 30+ students covering CS2033 Data Communication and Networks Module.
                    </li>
                    <li>
                      Held office hours to assist students with debugging network programming assignments and understanding the concepts.
                    </li>
                    <li>
                      Graded assignments and exams with detailed feedback.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-10 mt-10">
                <div className="group relative border-l-2 border-slate-200 pl-6 hover:border-slate-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Software Engineering Intern</h3>
                    <span className="text-sm font-mono text-slate-500">Dec 2024 - May 2025</span>
                  </div>
                  <div className="text-base text-slate-700 font-medium mb-4">WSO2, Colombo</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm leading-relaxed marker:text-slate-300">
                    <li>
                      Developed and published a <strong>Ballerina language library</strong> for the HubSpot Contacts API, ensuring idiomatic client connectors and complete documentation.
                    </li>
                    <li>
                      Researched and implemented a <strong>global distributed counter mechanism</strong> for WSO2 API Manager to improve throttling accuracy in distributed deployments.
                    </li>
                    <li>
                      Conducted in-depth analysis of distributed systems concepts (CRDTs, gossip protocols) and executed load tests to benchmark performance.
                    </li>
                  </ul>
                </div>
              </div>

              
            </section>

            

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Code className="w-4 h-4" /> Projects
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
              <ProjectCard 
                  title="Cryptographically Secure Electronic Voting System"
                  tech="Java, PostgreSQL, ReactNative, React/Typescript, AWS"
                  description="a platform engineered to provide secure, verifiable, and coercion-resistant electronic voting. The system addresses fundamental challenges in e-voting, including voter privacy, ballot secrecy, and protection against vote-buying and coercion. It is built on a distributed microservices architecture and employs advanced cryptographic techniques to ensure that individual votes remain anonymous while allowing for a universally verifiable final tally."
                  link="https://github.com/ShavinAnjithaAlpha/election-voting-system"
                />
              <ProjectCard 
                  title="SWIM-mesh Library"
                  tech="Java, Netty"
                  description="SWIM-Core is a high-performance, modular Java library that implements the SWIM protocol for scalable, weakly-consistent, infection-style membership. It offers cluster membership management, gossip-based failure detection, and suspicion-based false-positive mitigation. The library features a fully extensible transport layer, allowing users to integrate their preferred UDP/TCP/Netty implementations, and includes optional simulation and visualization tools for experimenting with SWIM dynamics. SWIM-Core is designed for embedding into distributed systems, microservices, and research environments."
                  link="https://github.com/ShavinAnjithaAlpha/swim-mesh"
                />
                <ProjectCard 
                  title="BitMonX Discovery Server"
                  tech="Node.js, Ejs, JavaScript"
                  description="BitMonX Discovery Server (BDS) is a server designed to facilitate the discovery of services within a network environment, especially in a multi-service (microservice) setup. It works in tandem with the BitMonX Discovery Client (BDC) which is integrated with the services. BDS is a lightweight discovery server built entirely using Node.js. Once the services are initialized with the BDC client, they can register themselves and connect with the BDS discovery server to both announce their presence and locate other services running on the network."
                  link="https://github.com/ShavinAnjithaAlpha/BitMonX-discovery-server"
                />
               
                <ProjectCard 
                  title="PixelStream"
                  tech="Node.js, React, MySQL, Redis"
                  description="A global photo streaming platform for photographers to upload, share, and collaborate. Features a high-performance backend with Redis caching."
                  link="https://github.com/ShavinAnjithaAlpha/PixelStream"
                />
                <ProjectCard 
                  title="Game of Life Simulation"
                  tech="JavaScript, HTML5 Canvas"
                  description="2D web-based simulation of Conway's Game of Life using JavaScript and HTML5 Canvas. The game is a zero-player cellular automaton, where evolution is driven by its initial state. The project includes a simple JS based game engine and HTML5 Canvas based visual rendering, allowing users to create and observe the evolution of patterns."
                  link="https://github.com/ShavinAnjithaAlpha/game-of-life"
                />
                <ProjectCard 
                  title="MoraUXPlore 2.0 Official Website"
                  tech="Node.js, React, MySQL, Azure"
                  description="Architected the backend and dashboard for a design competition portal handling registrations and submissions."
                  link="https://github.com/ShavinAnjithaAlpha/MoraUXPlore-2.0-Official-Website"
                />
                 <ProjectCard 
                  title="Micromouse (Robofest '23)"
                  tech="Arduino, C++"
                  description="Designed algorithms and software for an autonomous maze-solving robot. Competed as a finalist."
                  link="https://github.com/TharushaDinujaya/MicroMouse"
                />
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory title="Languages" items={["Java", "Python", "JavaScript and TypeScript", "C++", "C", "SQL"]} />
                <SkillCategory title="Web Frameworks" items={["Spring Boot", "React", "Node.js", "Express", "Redux", "Electron"]} />
                <SkillCategory title="Databases & Cloud" items={["MySQL", "PostgreSQL", "MongoDB", "Redis", "Kafka", "AWS", "Azure"]} />
                <SkillCategory title="Tools & Security" items={["Docker", "Git", "Wireshark", "Nmap", "Linux", "Packet Tracer"]} />
              </div>
            </section>

           

             {/* Achievements Section */}
             <section id="achievements" className="scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Award className="w-4 h-4" /> Achievements & Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900 text-sm uppercase">Awards</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3">
                      <span className="text-slate-400 font-mono shrink-0">2024</span>
                      <span><strong>4th Place</strong>, Cypher 2.0 CTF Competition (KDU)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-400 font-mono shrink-0">2024</span>
                      <span><strong>Finalist</strong>, CyberZee Security Competition</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-400 font-mono shrink-0">2023</span>
                      <span><strong>Finalist</strong>, Robofest'23 Micromouse Competition</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900 text-sm uppercase">Certifications</h3>
                   <ul className="space-y-3 text-sm text-slate-600">
                    <li>Network Support and Security (Cisco)</li>
                    <li>Supervised ML (Stanford)</li>
                    <li>Developing Backend Apps with Node.js (IBM)</li>
                    <li>Google Cloud Computing Foundations</li>
                    <li>Google Cybersecurity Professional Certificate</li>
                  </ul>
                </div>
              </div>
            </section>
          
          </main>
        </div>
        
        <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Shavin Anjitha Chandrawansha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// New PageViewNavigation component
const PageViewNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const PageViewNavItem = ({ path, label, Icon }) => {
    const handleClick = () => {
      navigate(path);
    };

    return (
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-full p-2 text-sm font-medium rounded-lg transition-colors duration-200 group
          ${currentPath === path
            ? 'bg-slate-900 text-white'
            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
        }`}
        title={label}
      >
        <FontAwesomeIcon icon={Icon} className={`w-5 h-5 ${currentPath === path ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
        <span className="sr-only">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex gap-4">
      <PageViewNavItem path="/" label="Modern View" Icon={faGripHorizontal} />
      <PageViewNavItem path="/classic" label="Classic View" Icon={faFile} />
      <PageViewNavItem path="/file-system" label="File System View" Icon={faTerminal} />
    </div>
  );
};

const ProjectCard = ({ title, tech, description, link }) => (
  <div className="group block p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
      </a>
    </div>
    <div className="text-xs font-mono text-slate-500 mb-3">{tech}</div>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const SkillCategory = ({ title, items }) => (
  <div className="bg-white p-5 border border-slate-100 rounded-lg">
    <h3 className="font-semibold text-slate-900 text-sm mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={index} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100 font-medium">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default ModernView;
