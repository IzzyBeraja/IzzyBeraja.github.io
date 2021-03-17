import Card from "../components/Card";

import { skillInfo } from "../content/SkillsInfo";

import styles from "../styles/Skills.module.css";

export type SkillInfo = {
  title: string;
  description: string;
  color?: string;
  logo?: string;
};

const Skills = () => {
  return (
    <div id="Skills" className="container">
      <h1 className={styles.title}>
        My <span>Skillset</span>
      </h1>
      <div className={styles.grid}>
        {skillInfo.map(({ title, description, logo }, i) => (
          <Card key={i} title={title} description={description} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
