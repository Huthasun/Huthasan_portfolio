import Particles from "react-tsparticles";

function ParticlesBackground() {

return (

<Particles
id="tsparticles"
options={{

background:{
color:"transparent"
},

fpsLimit:60,

particles:{
number:{
value:60,
density:{
enable:true,
area:800
}
},


color:{
value:"#38bdf8"
},


links:{
enable:true,
color:"#38bdf8",
distance:150,
opacity:0.2
},

move:{
enable:true,
speed:1
},

size:{
value:2
},

opacity:{
value:0.4
}

},

interactivity:{
events:{
onHover:{
enable:true,
mode:"repulse"
}
}
}

}}
/>

);

}

export default ParticlesBackground;