import { useEffect, useState } from "react"

function Navbar() {

const [active,setActive]=useState("about")

useEffect(()=>{

const sections=document.querySelectorAll("section")

const observer=new IntersectionObserver(

(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
setActive(entry.target.id)
}
})
},
{threshold:0.6}

)

sections.forEach(sec=>observer.observe(sec))

},[])

return (

<nav className="navbar">

<div className="nav-container">

{/* <div className="logo">
Huthasan
</div> */}

<div className="nav-links">

<a href="#about" className={active==="about" ? "active" : ""}>About</a>

<a href="#experience" className={active==="experience" ? "active" : ""}>Experience</a>

<a href="#projects" className={active==="projects" ? "active" : ""}>Projects</a>

<a href="#contact" className={active==="contact" ? "active" : ""}>Contact</a>

</div>

</div>

</nav>

)

}

export default Navbar