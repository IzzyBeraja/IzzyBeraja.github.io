import Box from "@material-ui/core/Box";
import { GHProfile } from "types";
import styles from "./profile.module.scss";

type Props = {
  profileData: GHProfile;
};

const Profile = ({ profileData: { name, image, link, bio } }: Props) => {
  return (
    <Box className={styles.profile}>
      <a href={link}>
        <img
          className={styles.profileImage}
          src={image}
          alt={"Profile Image"}
        />
      </a>
      <a className={styles.title} href={link || "www.github.com"}>
        {name || "GitHub username"}
      </a>
      <div className={styles.bio}>{bio || "Insert bio here..."}</div>
    </Box>
  );
};

export default Profile;
