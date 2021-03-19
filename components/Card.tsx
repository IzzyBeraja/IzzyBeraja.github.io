import styles from "../styles/Card.module.css";

interface Props {
  className?: string;
  title: string;
  description: string;
  logo?: string;
  color?: string;
}

const cardBackground = (logo: string, title: string) => {
  if (!logo) return <h3 className={styles.background_text}>{title}</h3>;
  return <img className={styles.background_logo} src={logo} alt={title} />;
};

const Card = ({ className, title, description, logo, color }: Props) => {
  return (
    <div className={[className, styles.card].join(" ")}>
      <h3 className={styles.foreground_text}>{title}</h3>
      {cardBackground(logo, title)}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
