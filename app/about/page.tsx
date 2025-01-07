import Image from 'next/image'
import project1 from '../../public/images/project1.png'
import project2 from '../../public/images/project2.png'
import project3 from '../../public/images/project3.png'
import project4 from '../../public/images/project4.png'
import project5 from '../../public/images/project5.png'
const about = () => {
  return (
    <div className="about-container">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-description">
        Explore our diverse showcasing successful projects in web development,
        <br /> mobile app creation, and web design. Each project highlights our commitment to quality,
        <br /> creativity, and functionality, tailored to meet client needs and goals.
      </p>
      
      <div className="projects-wrapper">
        <div className="project-card">
          <h1 className="project-title">GIAIC Landing Page</h1>
          <Image className="project-image" src={project1} alt="project1" />
        </div>
        <div className="project-card">
          <h1 className="project-title">Portfolio</h1>
          <Image className="project-image" src={project2} alt="project2" />
        </div>
        <div className="project-card">
          <h1 className="project-title">Portfolio Figma</h1>
          <Image className="project-image" src={project3} alt="project3" />
        </div>
        <div className="project-card">
          <h1 className="project-title">Covid App</h1>
          <Image className="project-image" src={project4} alt="project4" />
        </div>
        <div className="project-card">
          <h1 className="project-title">Animated Web</h1>
          <Image className="project-image" src={project5} alt="project5" />
        </div>
      </div>

      <button className="see-more-button">See More</button>
    </div>
  );
}

export default about;