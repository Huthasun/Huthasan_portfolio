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
I started my journey as a developer with a strong interest in building user-friendly and meaningful applications. 
Over time, I’ve grown into a Full Stack Developer who enjoys working on both frontend and backend systems.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
What excites me most is turning real-world problems into working solutions. 
I’ve built systems like hotel management platforms, real-time dashboards, and IoT-based applications that handle live data efficiently.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
I focus on writing clean, scalable code and creating smooth user experiences. 
I also enjoy working with real-time technologies like WebSockets and MQTT, which help bring applications to life.
</motion.p>

<motion.p variants={{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}>
Beyond coding, I’m someone who continuously learns, experiments, and improves. 
I believe in building applications that are not just functional, but also reliable and impactful.
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