import styles from "./ProjectsStyles.module.css";
import dragonSlayer from "../../assets/Dragon_Slayer_RPG.jpeg";
import myMusicPlayer from "../../assets/My_music_player.jpeg";
import calorieCounter from "../../assets/Calorie_counter.jpeg";
import loginPage from "../../assets/Login_page_icon.jpeg";
import ippbCaseStudy from "../../assets/Frame 7ippb case study .png";
import korvageRedesign from "../../assets/FrameKorvage_redesign _images-1.jpg";
import growthCraftRedesign from "../../assets/FrameGrowthCraft_redesign _images-1.jpg";
import ralaProject from "../../assets/Frameralaportal design images.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={dragonSlayer}
            link="https://role-playing-game-app.netlify.app"
            h3="Dragon Slayer"
            p="A Text RPG App"
          />
          <ProjectCard
            src={myMusicPlayer}
            link="https://my-music-player-ap.netlify.app"
            h3="My Music Player"
            p="A Music Player"
          />
          <ProjectCard
            src={calorieCounter}
            link="https://calorie-conunter-app.netlify.app"
            h3="Calorie Counter"
            p="A Calorie Counter"
          />
          <ProjectCard
            src={loginPage}
            link="https://animated-panda-login-screeen.netlify.app"
            h3="Login page"
            p="Animated Login Page"
          />
        </div>
      </section>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">UI/UX Design</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={ippbCaseStudy}
            link="https://www.behance.net/gallery/199916321/IPPB-%28Indian-Post-Payment-Bank%29-application-redesign"
            h3="IPPB App"
            p="A Case Study"
          />
          <ProjectCard
            src={korvageRedesign}
            link="https://www.behance.net/gallery/202777385/Korvage-website-Redesign"
            h3="Korvage Website"
            p="Website Redign"
          />
          <ProjectCard
            src={growthCraftRedesign}
            link="https://www.behance.net/gallery/202777057/GrowthCraft-website-Redesign"
            h3="GrowthCraft"
            p="Website Redesign"
          />
          <ProjectCard
            src={ralaProject}
            link=""
            h3="Rala Interview Portal"
            p="Web Application"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
