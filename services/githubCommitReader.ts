import { GHCommit, GitHubCommitPayload } from "types";

const getCommits = async (
  username: string,
  resultCount: number
): Promise<GHCommit[] | string> => {
  const maxResults = 10; // Arbitrary number
  const totalEvents =
    resultCount <= 0 || resultCount > maxResults ? maxResults : resultCount;
  const response = await fetch(
    `https://api.github.com/users/${username}/events?per_page=${totalEvents}`
  );

  if (!response)
    return "An unexpected error has occured retrieving your profile.";
  if (response.status === 404)
    return "This profile does not seem to have any commits.";

  const results: any[] = await response.json();

  const commitData: GHCommit[] = [];
  results &&
    results.forEach(gitEvent => {
      const commitLink =
        gitEvent &&
        gitEvent.repo &&
        gitEvent.repo.name &&
        `https://www.github.com/${gitEvent.repo.name}/commit/`;
      const commits: GitHubCommitPayload[] =
        gitEvent && gitEvent.payload && gitEvent.payload.commits;
      commits &&
        // commits are output in reverse order
        commits.reverse().forEach(({ sha, message }) =>
          commitData.push({
            id: sha,
            commitLink: commitLink + sha,
            message,
            pushedDate: gitEvent.created_at,
          })
        );
    });
  return commitData.slice(0, totalEvents);
};

export default getCommits;
