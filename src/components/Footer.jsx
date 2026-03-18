import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

function Footer(){

return(

<motion.footer
className="footer"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="footer-content">

<h3 className="footer-name">Huthasan Odugu</h3>

<p className="footer-tagline">
Full Stack Developer • React • Node.js • MongoDB
</p>

<div className="footer-socials">

<a href="https://github.com/Huthasun" target="_blank">
<FaGithub/>
</a>

<a href="https://www.linkedin.com/in/huthasun-odugu-476454252/" target="_blank">
<FaLinkedin/>
</a>

<a href="https://instagram.com/huthasun" target="_blank">
<FaInstagram/>
</a>

</div>

<p className="footer-copy">
© 2026 Huthasan Odugu. All rights reserved.
</p>

</div>

</motion.footer>

)

}

export default Footer