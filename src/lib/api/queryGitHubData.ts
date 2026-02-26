import { gql } from "graphql-request";

export const queryGitHubData = gql`
query getUserStats($login: String!) {
  user(login: $login) {
    login
    
    contributionsCollection(
      from: "2025-01-01T00:00:00Z"
      to: "2025-12-31T23:59:59Z"
    ) {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoryContributions
      totalRepositoriesWithContributedCommits
    }
  }
}
`
