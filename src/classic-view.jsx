import React, { useState, useEffect } from 'react';

// --- DATA SECTION ---
// Edit your details here
const PERSONAL_INFO = {
  name: "ALEXANDER TURNER",
  title: "Computer Science Undergraduate",
  university: "State University of Technology",
  email: "alex.turner@example.edu",
  github: "github.com/alexturner",
  linkedin: "linkedin.com/in/alexturner",
  about: "Third-year Computer Science student with a strong foundation in algorithms and systems programming. Passionate about backend development, distributed systems, and open-source contribution. Seeking Summer 2025 Internship opportunities.",
};

const EDUCATION = [
  {
    school: "State University of Technology",
    degree: "B.S. Computer Science",
    year: "Expected May 2026",
    gpa: "3.8/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Discrete Mathematics",
      "Artificial Intelligence"
    ]
  }
];

const SKILLS = {
  languages: ["Java", "Python", "C++", "SQL", "JavaScript/TypeScript", "Bash"],
  technologies: ["React", "Node.js", "Docker", "Git", "Linux", "AWS (EC2, S3)", "PostgreSQL"],
  concepts: ["OOP", "RESTful APIs", "Agile/Scrum", "CI/CD Pipelines", "System Design"]
};

const PROJECTS = [
  {
    title: "Distributed File System",
    tech: "Go, gRPC, Docker",
    description: "Designed and implemented a simplified distributed file system capable of handling concurrent read/write operations with fault tolerance. Implemented a master-chunkserver architecture similar to GFS.",
    link: "#"
  },
  {
    title: "Pathfinding Visualizer",
    tech: "React, TypeScript",
    description: "Interactive web application visualizing Dijkstra's, A*, and DFS algorithms on a grid. Features include maze generation, adjustable speed, and real-time wall toggling.",
    link: "#"
  },
  {
    title: "Mini-Compiler",
    tech: "C++, LLVM",
    description: "Built a compiler for a subset of the C language. Implemented lexical analysis, parsing, semantic analysis, and intermediate code generation using LLVM IR.",
    link: "#"
  }
];

const EXPERIENCE = [
  {
    role: "Teaching Assistant (Data Structures)",
    company: "State University of Technology",
    duration: "Aug 2024 - Present",
    details: [
      "Lead weekly lab sessions for 30+ students covering linked lists, trees, and graphs.",
      "Hold office hours to assist students with debugging C++ code and understanding algorithmic complexity.",
      "Grade assignments and exams with detailed feedback."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "TechCorp Inc.",
    duration: "May 2024 - Aug 2024",
    details: [
      "Developed a Python script to automate log analysis, reducing manual triage time by 40%.",
      "Contributed to the migration of a monolithic legacy app to microservices using Java Spring Boot.",
      "Wrote comprehensive unit tests achieving 95% code coverage for new features."
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