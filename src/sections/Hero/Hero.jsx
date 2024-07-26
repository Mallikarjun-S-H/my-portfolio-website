import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import behanceLight from "../../assets/behance-light.svg";
import behanceDark from "../../assets/behance-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Mallikarjunayya-S-Hiremath-(1.8years)(Backend dev).pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? behanceLight : behanceDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mallikarjunayya
          <br />S <br />
          Hiremath
        </h1>
        <h2>UI/UX Designer and Developer</h2>
        <span>
          <a href="https://www.behance.net/mallikhiremath" target="_blank">
            <img src={twitterIcon} alt="Behance icon" />
          </a>
          <a href="https://github.com/Mallikarjun-S-H" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mallikarjunayya-s-hiremath-1729a719b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Dynamic <strong>UI/UX designer and Developer</strong> with 1.8 years
          of hands-on experience creating visually appealing, user-centric
          digital experiences. a proven track record in fast-paced startup
          environments, collaborating across teams to deliver innovative
          solutions, and expertise in design tools,prototyping, and wireframing.
          I am actively transitioning to a front-end role, eager to apply design
          skills to coding and webdevelopment for seamless user interfaces.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
