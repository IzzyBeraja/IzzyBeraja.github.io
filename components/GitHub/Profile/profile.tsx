import styles from "./profile.module.scss";

type Props = {
  name: string;
  image: string;
  link: string;
  bio: string;
};

const Profile = ({ name, image, link, bio }: Props) => {
  return (
    <ul className={styles.profile}>
      <li>
        <a href={link}>
          <img
            className={styles.profileImage}
            src={image}
            alt={"Profile Image"}
          />
        </a>
      </li>
      <li>
        <a href={link}>{name}</a>
      </li>
      <li>
        <p>{bio}</p>
      </li>
    </ul>
  );
};

export default Profile;
