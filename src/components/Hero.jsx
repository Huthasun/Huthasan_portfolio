import { TypeAnimation } from "react-type-animation";
import profile from "../assets/portfolio_image.jpeg";
import ParticlesBackground from "./ParticlesBackground";


function Hero() {
  return (
    <section className="hero container">
      <ParticlesBackground />

      <div className="hero-left fade-in">

        <h1 className="hero-title">
          Huthasan Odugu
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Node.js Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="hero-role"
        />

       <p className="hero-desc">
I’m a Full Stack Developer with 3+ years of hands-on experience building real-world applications from scratch to production. 

I enjoy working across the entire stack — from creating smooth, responsive UIs in React to designing scalable backend systems using Node.js and MongoDB.

Over the years, I’ve worked on projects in healthcare, hospitality, and IoT, including real-time systems using WebSockets and MQTT. I like solving practical problems, optimizing performance, and building applications that actually make a difference.

I’m always curious to learn new technologies and improve the way I build things.
</p>
       <button
  className="btn hero-btn"
  onClick={() => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }}
>
  View Projects
</button>
      </div>

      <div className="hero-right profile-animation">

        <img
          src={profile}
          alt="profile"
        />

      </div>

    </section>
  );
}

export default Hero;