import styles from "../styles/Card.module.css";

interface Props {
  className?: string;
  title: string;
  description: string;
}

const Card = ({ className, title, description }: Props) => {
  return (
    <div className={[className, styles.card].join(" ")}>
      <h3 className={[styles.foreground_text].join(" ")}>{title}</h3>
      <h3 className={[styles.background_text].join(" ")}>{title}</h3>
      <p className={[styles.description].join(" ")}>{description}</p>
    </div>
  );
};

export default Card;
