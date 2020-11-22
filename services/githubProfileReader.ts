import { GitHubProfile } from "types";

const getProfile = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response)
    return "An unexpected error has occured retrieving your profile.";
  if (response.status === 404) return "This profile could not be found.";

  const { name, avatar_url, html_url, bio } = await response.json();
  const profileData: GitHubProfile = {
    name,
    image: avatar_url,
    bio,
    link: html_url,
  };
  return profileData;
};

export default getProfile;
