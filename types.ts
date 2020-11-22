export type GitHubCommit = {
  id: string;
  message: string;
  pushedDate: string;
  commitLink: string;
};

export type GitHubCommitPayload = {
  sha: string;
  message: string;
};

export type GitHubProfile = {
  name: string;
  image: string;
  link: string;
  bio: string;
};
