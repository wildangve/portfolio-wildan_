import { color, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "../hooks/use-toast";



// Hero Section Component
export function HeroSection() {
  const downloadCV = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "/CV_WILDAN SYAIFUL ISLAM.pdf");
    element.setAttribute("download", "CV_WILDAN SYAIFUL ISLAM.pdf");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };


  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.3,
          backgroundImage: `url('/image/Background.png')`,
        }}
        className="parallax-bg"
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6" >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-inter font-bold text-5xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient"> wildansfm</span>
          </motion.h1>
          <motion.p
            className="font-source font-light text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ dufration: 0.8, delay: 0.4 }}
          >
            Data Enthusiast | Front-End Developer | Mobile Programming
          </motion.p>
          <motion.p
            className="font-source text-lg text-gray-400 mb-12 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about technology consulting, information systems, data analysis, and digital solutions to support business decision-making.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="button-54"
              style={{ marginBottom: "0.5rem" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              My Projects
            </motion.button>

            <motion.button
              onClick={downloadCV}
              className="button-54"
              style={{ marginBottom: "0.5rem" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section Component
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className=" px-9 " ref={ref}>
      <div className="about-section ">
        <div className="grid lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >

            <div className="elegant-frame-wrapper">
              <img
                src="/image/wildan.png"
                alt="Wildan Profile Picture"
                className="elegant-frame-image"
                style={{ height: "auto", maxHeight: "500px", objectFit: 'cover' }}
              />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ padding: "10px" }}></div>
            <h2 className="font-inter font-bold text-4xl md:text-5xl">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-gray-300 text-lg text-justify leading-relaxed">
              Hello! I have a strong interest in technology consulting and information systems. With a background in Information Technology, I'm accustomed to bridging the gap between complex data and concrete business strategies.
            </p>
            <p className="text-gray-400 text-justify leading-relaxed mb-6">
              For me, technology isn't just about coding, but about how we create targeted digital solutions. That's why I enjoy combining data analysis skills with UI/UX design and front-end development. My focus is simple: helping businesses make better decisions through intuitive technology solutions that deliver measurable impact.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section with Progress Bar Component
function SkillBar({ skill, percentage, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill}</span>
        <span className="text-accent-gold">{percentage}%</span>
      </div>
      <div className="bg-medium-gray h-2 rounded-full overflow-hidden">
        <motion.div
          className="bg-accent-gold h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    frontend: [
      { name: "AngularJS & Next.js", percentage: 80 },
      { name: "JavaScript", percentage: 85 },
      { name: "CSS", percentage: 90 },
    ],
    data: [
      { name: "Python", percentage: 80 },
      { name: "SQL", percentage: 70 },
      { name: "PowerBI", percentage: 60 },
    ],
    design: [
      { name: "Flutter", percentage: 75 },
      { name: "Dart", percentage: 75 },
      { name: "Figma", percentage: 75 },
    ],

  };

  return (
    <section id="skills" className="py-20 px-1 lg:px-8 bg-dark-gray skills-section" ref={ref}>
      <div className="mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-inter font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg mx-auto">
            Connecting technology, data, and design to create real impact for business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="glass-morphism p-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-accent-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-database text-accent-gold text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-xl mb-6">Data Analyst</h3>
            <div className="space-y-4">
              {skills.data.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-morphism p-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-accent-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-desktop text-accent-gold text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-xl mb-6">Frontend Development</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-morphism p-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-accent-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-mobile text-accent-gold text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-xl mb-6">Mobile Programming</h3>
            <div className="space-y-4">
              {skills.design.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
export default HeroSection;

//ProjectModal Section Component

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <div className="modal-details">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-roles">{project.tech.join(' | ')}</p>
          <hr className="modal-divider" />
          <p>{project.description}</p>
          <div className="modal-tech-list">
            <p>Tech:</p>
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomProjectCard({ project, onClick, index }) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      data-title={project.title}
    >
      <img
        src={project.image}
        alt={`Cover for ${project.title}`}
        className="card-image"
      />
      <div className="card-info">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-roles">{project.tech.join(' | ')}</p>
      </div>
    </div>
  );
}

// Projects Section 
export function ProjectsSection() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Analysis of Climate Change Data in North Minahasa Regency for the Period 1990-1999",
      description: "From raw data excel and preprocessing use Python.",
      image: "/image/5.png",
      tech: ["Excel, Python, Jupyter Notebook"],
    },
    {
      title: "Website Taruma Travel",
      description: "Taruma Travel is a lifestyle-themed travel website designed to provide users with curated insights into Indonesian destinations, local culinary experiences, and practical travel tips.",
      image: "/image/6.png",
      tech: ["HTML, CSS, JavaScript, AngularJS, Node.js"],
    },
    {
      title: "Productivity Android Apps",
      description: "Created a productivity-themed Android app called T-Track with productivity checklists such as: plan tasks, set goals, take breaks, move and refresh, prioritize, break tasks down, no multitasking, minimize distractions, limit social media. The home screen features calendar navigation, task filters, and other implementations.",
      image: "/image/7.png",
      tech: ["Dart", "Flutter", "Android Studio"],
    },
    {
      title: "Customer Segmentation Analysis Automobile",
      description: " Data Preprocessing, Dimensionality Reduction (PCA), K-Medoids Clustering, Performance Evaluation",
      image: "/image/8.png",
      tech: ["MATLAB", "Excel", "Python"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="projects" className="projects-section" ref={ref}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="text-gradient">Projects</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Some projects I've worked on.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <CustomProjectCard
                key={project.title}
                project={project}
                onClick={() => openModal(project)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </>
  );
}

// Contact Section Component
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "wildansfm@gmail.com",
      href: "mailto:wildansfm@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      label: "Social",
      value: "Wildan S",
      href: "linkedin.com/in/wildansfm",
    },
    {
      icon: "fab fa-github",
      label: "More Projects",
      value: "wildangve",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/wildansfm" },
    { icon: "fab fa-github", href: "https://github.com/wildangve" },
    { icon: "fab fa-instagram", href: "https://instagram.com/wildangve" },
  ];
}