import { gql } from "graphql-request";

export const queryGitHubData = gql`
query getUserStats($login: String!, $from: DateTime!, $to: DateTime!) {
  rateLimit {
    limit
    remaining
    resetAt
  }

  user(login: $login) {
    id
    login
    name
    avatarUrl
    createdAt

    repositories(first: 100, ownerAffiliations: OWNER) {
      nodes {
        name
        stargazerCount
        forkCount
        isFork
        description
        homepageUrl
        hasIssuesEnabled
        createdAt
        languages(first: 10) {
          nodes {
            name
          }
        }
      }
    }

    contributionsCollection(from: $from, to: $to) {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoryContributions
      contributionCalendar {
        totalContributions
      }
    }
  }
}
`
