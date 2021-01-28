import { GHCommit } from "types";

//> This code is a bit ugly
//> Should look to clean this but it works for now

interface PushEvent {
  id: string;
  repo: {
    id: string;
    name: string;
    url: string;
  };
  payload: {
    commits: {
      sha: string;
      author: { email: string; name: string };
      message: string;
      url: string;
    }[];
  };
  created_at: string;
}

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

  if (response && response.status === 200) {
    const results: PushEvent[] = await response.json();
    const commitData = results
      ?.map(gitEvent => {
        // commits are output in reverse order
        return gitEvent?.payload.commits?.map(({ sha: id, message }) => ({
          id,
          commitLink: `https://www.github.com/${gitEvent.repo.name}/commit/${id}`,
          message,
          pushedDate: gitEvent.created_at,
        }));
      })
      .flat()
      .filter(val => val);
    return commitData?.reverse().slice(0, totalEvents);
  }
  console.log(`Server returned a ${response.status}: ${response.statusText}`);
  return null;
};

const getCommitsFromEvent = (push: PushEvent) => {
  return;
};

export default getCommits;
