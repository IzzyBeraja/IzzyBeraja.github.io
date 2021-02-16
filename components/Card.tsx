import React from "react";

interface Props {
  className: string;
  link: string;
  title: string;
  description: string;
}

const Card = ({ className, link, title, description }: Props) => {
  return (
    <a href={link} className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default Card;
