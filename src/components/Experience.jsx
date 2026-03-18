import { motion } from "framer-motion"

function Experience(){

return(

<section id="experience" className="experience container">

<h2 className="section-title">Professional Experience</h2>

<motion.div
className="experience-card"
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="exp-header">

<h3>Full Stack Developer</h3>

<div className="exp-company">
Automac Technologies
</div>

<span className="exp-date">
Jan 2023 — Present
</span>

</div>

<div className="exp-content">

<ul>

<li>
Developed and deployed scalable web and mobile applications
using React.js, React Native, Node.js and MongoDB.
</li>

<li>
Designed and implemented secure REST APIs supporting
enterprise level applications.
</li>

<li>
Built real-time monitoring systems using WebSocket
and MQTT for IoT platforms.
</li>

<li>
Developed dashboard and management systems
for healthcare and hospitality industries.
</li>

<li>
Integrated third-party services, optimized performance
and managed production deployments.
</li>

<li>
Collaborated with cross-functional teams to deliver
high quality software solutions.
</li>

</ul>

</div>

<div className="tech-stack">

<span>React.js</span>
<span>React Native</span>
<span>Node.js</span>
<span>Express.js</span>
<span>MongoDB</span>
<span>WebSocket</span>
<span>MQTT</span>

</div>

</motion.div>

</section>

)

}

export default Experience