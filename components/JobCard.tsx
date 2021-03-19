import styles from "../styles/JobCard.module.css";

interface Props {
  label: string;
  logo: string;
  startDate: Date;
  endDate: Date;
}

const getDate = (date: Date) => {
  if (!date)
    return (
      <h3 className={styles.date}>
        <span>Present</span>
      </h3>
    );
  return (
    <h3 className={styles.date}>
      {`${date.toLocaleString("default", { month: "long" })} `}
      <span>{date.getFullYear()}</span>
    </h3>
  );
};

const JobCard = ({ label, logo, startDate, endDate }: Props) => {
  return (
    <div className={styles.card}>
      <img className={styles.logo} src={logo} alt={label} />
      <h1 className={styles.title}>{label}</h1>
      <div className={styles.timeFrame}>
        {getDate(startDate)}
        {" - "}
        {getDate(endDate)}
      </div>
      <p>
        This section is meant to describe what I did at this job. What were my
        duties? This section is meant to describe what I did at this job. What
        were my duties? This section is meant to describe what I did at this
        job. What were my duties?
      </p>
    </div>
  );
};

export default JobCard;
