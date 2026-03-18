import { motion } from "framer-motion"

function About(){

return(

<section id="about" className="about container">

<div className="about-grid">

<motion.div
className="about-left"
initial="hidden"
whileInView="visible"
viewport={{once:true}}
variants={{
hidden:{opacity:0,y:40},
visible:{
opacity:1,
y:0,
transition:{
staggerChildren:0.2
}
}
}}
>

<motion.h2 variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
About Me
</motion.h2>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
I’m a Full Stack Developer with over 3 years of experience building real-world web and mobile applications. 
I work comfortably across both frontend and backend, mainly using React, Node.js, and MongoDB.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
In my current role, I’ve worked on multiple projects in healthcare, hospitality, and IoT domains. 
From developing hotel management systems to building real-time dashboards and medical applications, 
I’ve been involved in creating complete end-to-end solutions.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
I enjoy working on real-time features using technologies like WebSocket and MQTT, and I focus on writing clean, 
maintainable code with good performance and user experience.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
I’m always looking to improve my skills, learn new technologies, and build applications that solve real-world problems.
</motion.p>

</motion.div>


<motion.div
className="about-right"
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<motion.div
className="skills-card"
whileHover={{scale:1.03}}
transition={{type:"spring", stiffness:200}}
>

<h3>Core Skills</h3>

<div className="skills-list">

<motion.span whileHover={{scale:1.1}}>React.js</motion.span>
<motion.span whileHover={{scale:1.1}}>React Native</motion.span>
<motion.span whileHover={{scale:1.1}}>JavaScript</motion.span>
<motion.span whileHover={{scale:1.1}}>Node.js</motion.span>
<motion.span whileHover={{scale:1.1}}>Express.js</motion.span>
<motion.span whileHover={{scale:1.1}}>MongoDB</motion.span>
<motion.span whileHover={{scale:1.1}}>WebSocket</motion.span>
<motion.span whileHover={{scale:1.1}}>MQTT</motion.span>
<motion.span whileHover={{scale:1.1}}>AWS</motion.span>
<motion.span whileHover={{scale:1.1}}>REST APIs</motion.span>

</div>

</motion.div>

</motion.div>

</div>

</section>

)

}

export default About