import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Ract" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="MangoDB" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="UI Design" />
        <SkillList src={checkMarkIcon} skill="Responsive design" />
        <SkillList src={checkMarkIcon} skill="Wireframing" />
        <SkillList src={checkMarkIcon} skill="Prototyping" />
        <SkillList src={checkMarkIcon} skill="User research" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Junit" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="JDBC" />
        <SkillList src={checkMarkIcon} skill="Hibernate" />
        <SkillList src={checkMarkIcon} skill="JSP" />
        <SkillList src={checkMarkIcon} skill="JSTL" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
      </div>
    </section>
  );
}

export default Skills;
