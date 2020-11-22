import { Commit } from "types";

const getCommits = async (username: string, resultCount: number) => {
  const maxResults = 30;
  const totalResults =
    resultCount <= 0 || resultCount > maxResults ? maxResults : resultCount;
  const response = await fetch(
    `https://api.github.com/users/${username}/events?per_page=${totalResults}`
  );

  if (!response)
    return "An unexpected error has occured retrieving your profile.";
  if (response.status === 404)
    return "This profile does not seem to have any commits.";

  const { name, avatar_url, html_url, bio } = await response.json();
  const profileData: Commit = {
    commitLink: null,
    date: null,
    id: null,
    message: null,
  };
  return profileData;
};

export default getCommits;
