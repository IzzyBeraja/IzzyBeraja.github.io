import styles from "../styles/Card.module.css";

interface Props {
  className?: string;
  link?: string;
  title: string;
  description: string;
}

const Card = ({ className, link, title, description }: Props) => {
  return (
    <a href={link} className={[className, styles.card].join(" ")}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default Card;
