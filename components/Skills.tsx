import Card from "../components/Card";

import styles from "../styles/Skills.module.css";

const Skills = () => {
  const skillInfo = [
    { title: "C#", description: "First programming language" },
    { title: "JavaScript", description: "Front end programming" },
    { title: "TypeScript", description: "The JavaScript we deserve" },
  ];

  return (
    <div className="container">
      <div>Skills</div>
      <div className={styles.grid}>
        {skillInfo.map(({ title, description }, i) => (
          <Card
            className={styles.card}
            key={i}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
