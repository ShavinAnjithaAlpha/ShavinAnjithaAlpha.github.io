import React, { useState, useEffect } from 'react';

// --- DATA SECTION ---
const PERSONAL_INFO = {
  name: "Shavin Anjitha Chandrawansha",
  title: "Computer Science Undergraduate",
  university: "University of Moratuwa",
  email: "shavinanjitha@gmail.com",
  github: "github.com/ShavinAnjithaAlpha",
  linkedin: "linkedin.com/in/shavinanjitha",
  about: "I am a final-year Computer Science and Engineering undergraduate at the University of Moratuwa with a strong foundation in software engineering, distributed systems, computer security, networks, computer architecture, and cloud computing. I specialize in building layers of abstraction to provide concrete solutions, with a specific focus on engineering the core systems that other applications rely on. My passion for computer science spans the entire stack, from high-level system design to low-level architecture. With experience ranging from industrial software development to academic research, I am a continuous learner dedicated to knowledge sharing. I am highly motivated to contribute to the global software landscape while collaborating with the academic community to drive further innovation.",
};

const EDUCATION = [
  {
    school: "University of Moratuwa",
    degree: "B.Sc. Eng (Hons) Computer Science & Engineering",
    year: "Expected May 2026",
    gpa: "3.90/4.0(6 Semesters)",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems + Internals",
      "Computer Networks + Advanced Networking",
      "Cryptography and Network Security",
      "Calculus and Linear Algebra",
      "Discrete Mathematics and Probability",
      "Object-Oriented Programming",
      "Software Engineering",
      "Distributed Systems",
      "Concurrent and Parallel Programming",
      "System Design",
      "Artificial Intelligence"
    ]
  }, 
  {
    school: "G/Dharmasoka College",
    degree: "G.C.E. Advanced Level",
    year: "2020",
    gpa: "District Rank: 3 | Island Rank: 11 (Physical Stream)",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics"
    ]
  }
];

const SKILLS = {
  languages: ["Java", "Python", "C++", "SQL", "JavaScript/TypeScript", "Bash"],
  technologies: ["React", "Node.js", "Docker", "Git", "Linux", "AWS (EC2, S3)", "PostgreSQL"],
  concepts: ["OOP", "RESTful APIs", "Agile/Scrum", "CI/CD Pipelines", "System Design", "Distributed Systems", "Concurrent and Parallel Programming"]
};

const PROJECTS = [
  {
    title: "Cryptographically Secure Electronic Voting System",
    tech: "Java, PostgreSQL, ReactNative, React/Typescript",
    description: "Designed and implemented a secure and transparent electronic voting system with cryptographic verification of votes. Implemented using Java, PostgreSQL, ReactNative, React/Typescript.",
    link: "https://github.com/ShavinAnjithaAlpha/Cryptographically-Secure-Electronic-Voting-System"
  },
  {
    title: "BitMonX Discovery Server",
    tech: "Node.js, Ejs, JavaScript",
    description: "A lightweight, centralized service discovery server with load balancing and API gateway features for Node.js microservices. Published as an NPM library.",
        link: "https://github.com/ShavinAnjithaAlpha/BitMonX-discovery-server"
  },
  {
    title: "PixelStream",
    tech: "Node.js, WebRTC, WebSocket",
    description: "A real-time video streaming platform built with Node.js, WebRTC, and WebSocket. Implemented using Node.js, WebRTC, and WebSocket.",
    link: "https://github.com/ShavinAnjithaAlpha/PixelStream"
  },
  {
    title: "Game of Life Simulation",
    tech: "JavaScript, HTML5 Canvas",
    description: "A zero-player cellular automaton simulation. Implemented a custom JS game engine and optimized canvas rendering for pattern evolution.",
    link: "https://github.com/ShavinAnjithaAlpha/Game-of-Life-Simulation"
  },
  {
    title: "MoraUXPlore 2.0 Official Website",
    tech: "Node.js, React, MySQL, Azure",
    description: "Architected the backend and dashboard for a design competition portal handling registrations and submissions.",
    link: "https://github.com/ShavinAnjithaAlpha/MoraUXPlore-2.0-Official-Website"
  },
  {
    title: "Micromouse (Robofest '23)",
    tech: "Arduino, C++",
    description: "Designed algorithms and software for an autonomous maze-solving robot. Competed as a finalist.",
    link: "https://github.com/ShavinAnjithaAlpha/Micromouse-Robofest-2023"
  }
];

const EXPERIENCE = [
  {
    role: "Teaching Assistant (Data Communication and Networks)",
    company: "University of Moratuwa",
    duration: "Aug 2025 - Nov 2025",
    details: [
      "Led weekly lab sessions for 30+ students covering CS2033 Data Communication and Networks Module.",
      "Held office hours to assist students with debugging network programming assignments and understanding the concepts.",
      "Graded assignments and exams with detailed feedback."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "WSO2",
    duration: "Dec 2024 - May 2025",
    details: [
      "Developed and published a Ballerina language library for the HubSpot Contacts API, ensuring idiomatic client connectors and complete documentation.",
      "Researched and implemented a global distributed counter mechanism for WSO2 API Manager to improve throttling accuracy in distributed deployments.",
      "Conducted in-depth analysis of distributed systems concepts (CRDTs, gossip protocols) and executed load tests to benchmark performance."
    ]
  }
];

// --- COMPONENT SECTION ---

const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-6 mt-10 border-b-2 border-black pb-2">
    <h2 className="text-xl font-bold uppercase tracking-widest">{title}</h2>
    <span className="hidden sm:block text-sm bg-black text-white px-2 py-0.5">READ-ONLY</span>
  </div>
);

const ClassicView = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Simple clock for the "terminal" feel
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    // Using standard copy command for iframe compatibility
    const textArea = document.createElement("textarea");
    textArea.value = PERSONAL_INFO.email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white p-4 sm:p-8 md:p-12 lg:p-16">
      
      {/* Top Status Bar */}
      <div className="fixed top-0 left-0 w-full bg-white border-b border-black p-2 text-xs flex justify-between z-50 px-4 sm:px-12">
        <span>USER: VISITOR</span>
        <span>STATUS: ONLINE</span>
        <span className="font-bold">{currentTime}</span>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-lg sm:text-xl mb-6 font-bold">
            &gt; {PERSONAL_INFO.title}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <button 
              onClick={handleCopyEmail}
              className="text-left hover:bg-black hover:text-white w-fit transition-colors"
            >
              [EMAIL: {PERSONAL_INFO.email}] {copied && " (COPIED!)"}
            </button>
            <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white w-fit transition-colors">
              [GITHUB]
            </a>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white w-fit transition-colors">
              [LINKEDIN]
            </a>
          </div>
        </header>

        {/* About */}
        <section>
          <SectionHeader title="01_ABOUT" />
          <p className="text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
        </section>

        {/* Education */}
        <section>
          <SectionHeader title="02_EDUCATION" />
          {EDUCATION.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-2">
                <h3 className="font-bold text-lg">{edu.school}</h3>
                <span className="text-sm italic">{edu.year}</span>
              </div>
              <div className="mb-4">
                <p>{edu.degree}</p>
                <p>GPA: {edu.gpa}</p>
              </div>
              <div className="bg-gray-100 p-4 border-l-4 border-black">
                <span className="font-bold block mb-2 text-sm uppercase">Relevant Coursework:</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx}>• {course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
          <SectionHeader title="03_SKILLS" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold border-b border-black mb-2 inline-block">LANGUAGES</h4>
              <ul className="list-none space-y-1 text-sm">
                {SKILLS.languages.map(s => <li key={s}>&gt; {s}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold border-b border-black mb-2 inline-block">TECHNOLOGIES</h4>
              <ul className="list-none space-y-1 text-sm">
                {SKILLS.technologies.map(s => <li key={s}>&gt; {s}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold border-b border-black mb-2 inline-block">CONCEPTS</h4>
              <ul className="list-none space-y-1 text-sm">
                {SKILLS.concepts.map(s => <li key={s}>&gt; {s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionHeader title="04_EXPERIENCE" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-1">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <p className="mb-4 text-gray-600 uppercase text-sm tracking-wider">{exp.company}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="pl-2">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader title="05_PROJECTS" />
          <div className="grid grid-cols-1 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={index} className="group border border-black p-6 hover:bg-black hover:text-white transition-colors duration-200 cursor-default">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <span className="text-xs border border-current px-1 py-0.5 group-hover:border-white border-black">
                    PUBLIC
                  </span>
                </div>
                <p className="text-xs mb-4 font-bold uppercase opacity-75">[{project.tech}]</p>
                <p className="mb-4 leading-relaxed text-sm">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-sm underline decoration-1 underline-offset-2 hover:no-underline"
                >
                  VIEW_SOURCE_CODE &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t-4 border-black pt-8 pb-12 text-center text-sm">
          <p>EOF - END OF FILE</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <button 
            onClick={() => window.print()}
            className="mt-6 text-xs border border-black px-4 py-2 hover:bg-black hover:text-white uppercase"
          >
            Print / Save as PDF
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ClassicView;