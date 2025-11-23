import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Maximize2, Minimize2, X, ChevronRight, Folder, FileText, Cpu, Globe, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

/* DATA SOURCE: Based on Shavin Anjitha Chandrawansha's CV
*/

const FILE_SYSTEM = {
  "~": {
    "about.txt": {
      type: "file",
      content: `
### 👋 Hello, I'm Shavin Anjitha Chandrawansha

I am a Final-year Computer Science and Engineering undergraduate at the University of Moratuwa, Sri Lanka. 
I have a strong foundation in software engineering, distributed systems, networking, and cloud computing.

Currently, I'm passionate about distributed systems (CRDTs, gossip protocols) and contributing to the academic community.

📍 Location: Ambalangoda, Sri Lanka
🎓 GPA: 3.91/4.0 (Dean's List x4)
`
    },
    "experience.log": {
      type: "file",
      content: `
[2024 - 2025] SOFTWARE ENGINEERING INTERN @ WSO2
--------------------------------------------------
• Developed a Ballerina library for HubSpot Contacts API.
• Implemented global distributed counters for WSO2 API Manager.
• Researched CRDTs and gossip protocols for throttling accuracy.
• Benchmarked performance across distributed nodes.
`
    },
    "skills.json": {
      type: "file",
      content: `
{
  "languages": ["Java", "Python", "JavaScript", "TypeScript", "C++", "C", "Ballerina", "SQL"],
  "web": ["Spring Boot", "React", "Node.js", "Express", "Redux"],
  "systems": ["Kafka", "Redis", "Nginx", "Docker", "Azure", "AWS"],
  "concepts": ["Distributed Systems", "System Design", "Cybersecurity", "Microservices"]
}
`
    },
    "projects": {
      type: "folder",
      children: {
        "bitmonx.md": {
          type: "file",
          content: "BitMonX Discovery Server: Node.js library for microservices service discovery."
        },
        "pixelstream.md": {
          type: "file",
          content: "PixelStream: Photo streaming platform using React, Node.js, MySQL, Redis."
        },
        "game_of_life.js": {
          type: "file",
          content: "Conway's Game of Life simulation on HTML5 Canvas."
        },
        "morauxplore.md": {
          type: "file",
          content: "Official portal for MoraUXPlore 2.0 competition (Azure/Node.js)."
        }
      }
    },
    "contact.sh": {
      type: "file",
      executable: true,
      content: "Opening contact links..."
    }
  }
};

const FileSystemView = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to ShavinOS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState(['~']);
  const [isBooting, setIsBooting] = useState(true);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Boot Sequence Effect
  useEffect(() => {
    const bootSequence = async () => {
      const logs = [
        "Initializing kernel...",
        "Loading modules: [distributed-systems, react, nodejs, ballerina]...",
        "Mounting file system...",
        "Checking Dean's List status... [OK]",
        "Starting shell session..."
      ];
      
      for (let log of logs) {
        await new Promise(r => setTimeout(r, 600));
        setHistory(prev => [...prev, { type: 'boot', content: log }]);
      }
      setIsBooting(false);
      setHistory(prev => [
        ...prev, 
        { type: 'output', content: ' ' }, 
        { type: 'ascii', content: `
   _____ __                 _       
  / ___// /_  ____ __   __ (_)___   
  \\__ \\/ __ \\/ __ \`| | / // / __ \\  
 ___/ / / / / /_/ /| |/ // / / / /  
/____/_/ /_/\\__,_/ |___//_/_/ /_/   
                                    
` },
        { type: 'output', content: 'System Ready. Logged in as guest.' },
        { type: 'output', content: 'Type "help" or click commands below to navigate.' }
      ]);
    };
    bootSequence();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on click
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getCurrentDir = () => {
    let current = FILE_SYSTEM;
    for (let segment of currentPath) {
      if (current[segment]) {
        current = current[segment].children || current[segment]; // Handle root vs folder
      }
    }
    return current;
  };

  const handleCommand = (cmdInput) => {
    const trimmed = cmdInput.trim();
    const args = trimmed.split(' ');
    const cmd = args[0].toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: trimmed, path: currentPath.join('/') }]);

    const dir = getCurrentDir();

    switch (cmd) {
      case 'help':
        setHistory(prev => [...prev, { type: 'output', content: `
Available commands:
  ls              List directory content
  cat [file]      Read file content
  cd [dir]        Change directory
  clear           Clear terminal
  whoami          Display user info
  contact         Show contact details
` }]);
        break;

      case 'ls':
        const items = currentPath.length === 1 ? FILE_SYSTEM['~'] : dir;
        const fileList = Object.keys(items || {}).map(key => {
          const isDir = items[key].type === 'folder';
          return `<span class="${isDir ? 'text-blue-400 font-bold' : 'text-green-300'}">${key}${isDir ? '/' : ''}</span>`;
        }).join('  ');
        setHistory(prev => [...prev, { type: 'html', content: fileList || 'Empty directory' }]);
        break;

      case 'cat':
        if (!args[1]) {
          setHistory(prev => [...prev, { type: 'error', content: 'Usage: cat [filename]' }]);
          break;
        }
        const file = (currentPath.length === 1 ? FILE_SYSTEM['~'] : dir)[args[1]];
        if (file && file.type === 'file') {
          setHistory(prev => [...prev, { type: 'output', content: file.content }]);
        } else {
          setHistory(prev => [...prev, { type: 'error', content: `File not found: ${args[1]}` }]);
        }
        break;
      
      case 'cd':
        if (!args[1] || args[1] === '~') {
          setCurrentPath(['~']);
        } else if (args[1] === '..') {
          if (currentPath.length > 1) setCurrentPath(prev => prev.slice(0, -1));
        } else {
          const target = (currentPath.length === 1 ? FILE_SYSTEM['~'] : dir)[args[1]];
          if (target && target.type === 'folder') {
            setCurrentPath(prev => [...prev, args[1]]);
          } else {
            setHistory(prev => [...prev, { type: 'error', content: `Directory not found: ${args[1]}` }]);
          }
        }
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: 'guest@shavin-portfolio' }]);
        break;

      case 'contact':
        setHistory(prev => [...prev, { type: 'component', component: <ContactCard /> }]);
        break;

      case 'sudo':
         setHistory(prev => [...prev, { type: 'error', content: 'Permission denied: You are not Shavin.' }]);
         break;

      default:
        if (trimmed) setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}` }]);
    }
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const QuickAction = ({ cmd }) => (
    <button 
      onClick={() => handleCommand(cmd)}
      className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs hover:bg-green-900 text-green-400 transition-colors font-mono mr-2 mb-2"
    >
      {cmd}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-green-500 font-mono p-4 flex items-center justify-center selection:bg-green-900 selection:text-white">
      
      {/* Main Container */}
      <div className="w-full max-w-4xl bg-black border border-gray-700 shadow-2xl rounded-lg overflow-hidden flex flex-col h-[85vh]">
        
        {/* Title Bar */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
            </div>
            <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
              <Terminal size={14} /> shavin@mrt-cse: ~
            </span>
          </div>
          <div className="text-gray-500 text-xs hidden sm:block">
            bash — 80x24
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black" 
          onClick={focusInput}
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-1">
              {entry.type === 'command' && (
                <div className="text-gray-400">
                  <span className="text-blue-400 font-bold">➜</span> 
                  <span className="text-cyan-400 ml-2">{entry.path}</span> 
                  <span className="text-gray-300 ml-2">$ {entry.content}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <div className="whitespace-pre-wrap ml-6 text-gray-300 leading-relaxed">{entry.content}</div>
              )}
              {entry.type === 'error' && (
                <div className="text-red-400 ml-6">{entry.content}</div>
              )}
              {entry.type === 'boot' && (
                <div className="text-gray-500">{entry.content}</div>
              )}
               {entry.type === 'ascii' && (
                <div className="text-green-400 font-bold whitespace-pre text-xs sm:text-base leading-none my-4">
                  {entry.content}
                </div>
              )}
              {entry.type === 'html' && (
                <div className="ml-6" dangerouslySetInnerHTML={{ __html: entry.content }} />
              )}
              {entry.type === 'component' && (
                <div className="ml-6 my-2">{entry.component}</div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          {!isBooting && (
            <div className="flex items-center mt-2 group">
              <span className="text-blue-400 font-bold">➜</span>
              <span className="text-cyan-400 ml-2">{currentPath.join('/')}</span>
              <span className="text-gray-500 ml-2">$</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-gray-100 ml-2 flex-1 font-mono"
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
              <span className="w-2 h-4 bg-gray-500 opacity-50 animate-pulse group-focus-within:bg-green-500"></span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Actions Footer */}
        {!isBooting && (
          <div className="bg-gray-900 p-2 border-t border-gray-800 flex flex-wrap gap-1">
            <span className="text-gray-500 text-xs mr-2 self-center hidden sm:inline">Try these:</span>
            <QuickAction cmd="ls" />
            <QuickAction cmd="cat about.txt" />
            <QuickAction cmd="cat experience.log" />
            <QuickAction cmd="cat skills.json" />
            <QuickAction cmd="ls projects" />
            <QuickAction cmd="contact" />
            <QuickAction cmd="clear" />
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-component for nicer contact display
const ContactCard = () => (
  <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-md max-w-md">
    <h3 className="text-green-400 font-bold mb-3 border-b border-gray-700 pb-2">Contact Information</h3>
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
        <Mail size={16} />
        <a href="mailto:shavin.21@cse.mrt.ac.lk">shavin.21@cse.mrt.ac.lk</a>
      </div>
      <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
        <Github size={16} />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/shavin</a>
      </div>
      <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
        <Linkedin size={16} />
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/shavin</a>
      </div>
      <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
        <Globe size={16} />
        <a href="https://shavinanjitha.me" target="_blank" rel="noopener noreferrer">shavinanjitha.me</a>
      </div>
    </div>
  </div>
);

export default FileSystemView;
