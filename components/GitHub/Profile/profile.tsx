import { GitHubProfile } from "types";
import styles from "./profile.module.scss";

type Props = {
  profileData: GitHubProfile;
};

const Profile = ({ profileData: { name, image, link, bio } }: Props) => {
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
