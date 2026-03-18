import { FaTimes } from "react-icons/fa"

function ProjectModal({ project, onClose }) {

if(!project) return null

return(

<div className="modal-overlay" onClick={onClose}>

<div
className="modal-card"
onClick={(e)=>e.stopPropagation()}
>

<button className="modal-close" onClick={onClose}>
<FaTimes/>
</button>

<img src={project.image} alt={project.title}/>

<h3>{project.title}</h3>

<p className="modal-desc">{project.desc}</p>

<h4>Key Features</h4>
<ul className="modal-details">
{project.details.slice(0,5).map((d,i)=>(
<li key={i}>{d}</li>
))}
</ul>

<h4>Tech Stack</h4>
<div className="modal-tech">
{project.tech.map((t,i)=>(
<span key={i}>{t}</span>
))}


</div>

</div>

</div>

)

}

export default ProjectModal