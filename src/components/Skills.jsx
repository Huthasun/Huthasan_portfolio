import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: <FaReact />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Native",
      "Redux",
      "TypeScript",
    ],
  },

  {
    title: "Backend",
    icon: <FaNodeJs />,
    items: ["Node.js", "Express.js", "REST APIs", "Python"],
  },

  {
    title: "Database",
    icon: <SiMongodb />,
    items: ["MongoDB", "PostgreSQL"],
  },

  {
    title: "Deployment",
    icon: <FaAws />,
    items: ["AWS Amplify", "AWS EC2", "Vercel", "Render"],
  },

  {
    title: "Tools",
    icon: <FaGitAlt />,
    items: ["VS Code", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Skills</h2>

      <motion.div
        className="skills-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="skills-card"
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -12, scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skills-header">
              <div className="skills-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-items">
              {category.items.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;