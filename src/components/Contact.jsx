import { useRef } from "react"
import emailjs from "emailjs-com"
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact(){

const form = useRef()

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm(
  "service_oc4u9cd",
  "template_1h2lhzg",   // 👈 template id
  form.current,
  "O_yrF7kt7kyFAm775"        // 👈 public key
).then(()=>{
alert("Message sent successfully!")
},()=>{
alert("Failed to send message")
})

e.target.reset()
}

return(

<section id="contact" className="contact container">

<h2 className="section-title">Let's Connect</h2>

<div className="contact-wrapper">

{/* LEFT SIDE */}

<motion.div
className="contact-left"
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<h3>Get in Touch</h3>

<p>
Have a project idea or opportunity?
Feel free to reach out. I'm always open
to discussing new work and collaborations.
</p>

<div className="contact-links">

<a href="mailto:nanihuthasun@gmail.com">
<FaEnvelope/>
<span>Email</span>
</a>

<a href="https://wa.me/916302665139" target="_blank">
<FaWhatsapp/>
<span>WhatsApp</span>
</a>

<a href="https://instagram.com/huthasun" target="_blank">
<FaInstagram/>
<span>Instagram</span>
</a>

</div>

</motion.div>


{/* RIGHT SIDE FORM */}

<motion.form
ref={form}
onSubmit={sendEmail}
className="contact-form"
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<input name="name" placeholder="Your Name" required/>

<input name="email" placeholder="Your Email" required/>

<textarea name="message" placeholder="Your Message" required/>

<button type="submit">Send Message</button>

</motion.form>

</div>

</section>

)

}

export default Contact