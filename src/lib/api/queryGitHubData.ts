import { gql } from "graphql-request";

export const queryGitHubData = gql`
query getUserStats($login: String!) {
  rateLimit {
    remaining
    resetAt
  }

  user(login: $login) {
    id
    login
    name
    avatarUrl
    createdAt

    repositories(first: 20, ownerAffiliations: OWNER) {
      nodes {
        name
        stargazerCount
        forkCount
        isFork
        description
        homepageUrl
        hasIssuesEnabled
        createdAt
        languages(first: 5) {
          nodes {
            name
          }
        }
      }
    }

    contributionsCollection(
      from: "2015-01-01T00:00:00Z"
      to: "2025-12-31T23:59:59Z"
    ) {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoryContributions
    }
  }
}
`
