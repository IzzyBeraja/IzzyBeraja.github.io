import Card from "../components/Card";

import styles from "../styles/Skills.module.css";

type SkillInfo = {
  title: string;
  description: string;
};

const Skills = () => {
  const skillInfo: SkillInfo[] = [
    {
      title: "C#",
      description:
        "My first programming language. I learned it in highschool and perfected it over the next few years.",
    },
    {
      title: "JS",
      description: "Front end programming that I use on a daily basis",
    },
    {
      title: "TS",
      description: "The JavaScript we deserve",
    },
    {
      title: "SQL",
      description: "The JavaScript we deserve",
    },
    { title: "Docker", description: "The JavaScript we deserve" },
    {
      title: "Mongo",
      description: "The JavaScript we deserve",
    },
    {
      title: "React",
      description: "The JavaScript we deserve",
    },
    {
      title: "NextJS",
      description: "The JavaScript we deserve",
    },
  ];

  return (
    <div id="Skills" className="container">
      <div className={styles.grid}>
        {skillInfo.map(({ title, description }, i) => (
          <Card key={i} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
