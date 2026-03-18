import { useState } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../ui/ProjectCard"
import ProjectModal from "../ui/ProjectModal"

function Projects(){

const [selected,setSelected]=useState(null)

return(

<section id="projects" className="container">

<h2 className="section-title">Projects</h2>

<div className="projects-grid">

{projects.map((p,i)=>(
<div key={i} onClick={()=>setSelected(p)}>
<ProjectCard {...p}/>
</div>
))}

</div>

<ProjectModal
project={selected}
onClose={()=>setSelected(null)}
/>

</section>

)

}

export default Projects