import styles from "../styles/Work.module.css";
import JobCard from "./JobCard";

export type JobCard = {
  label: string;
  logo: string;
  startDate: Date;
  endDate: Date;
};

const jobs: JobCard[] = [
  {
    label: "Facebook",
    logo: "Facebook-logo.png",
    startDate: new Date("May 2021"),
    endDate: null,
  },
  {
    label: "Ibeza LLC",
    logo: "Ibeza-logo.png",
    startDate: new Date("June 2016"),
    endDate: new Date("Feb 2021"),
  },
];

const Work = () => {
  return (
    <div id="Work" className="container">
      <h1 className={styles.title}>Work</h1>
      <div className={styles.workCards}>
        {jobs.map(({ label, logo, startDate, endDate }) => (
          <JobCard
            label={label}
            logo={logo}
            startDate={startDate}
            endDate={endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
