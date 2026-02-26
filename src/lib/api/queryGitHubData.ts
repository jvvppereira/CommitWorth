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

    repositories(
      first: 50
      ownerAffiliations: OWNER
      orderBy: { field: STARGAZERS, direction: DESC }
    ) {
      nodes {
        name
        stargazerCount
        forkCount
        isFork
        createdAt

        languages(first: 5) {
          nodes {
            name
          }
        }
      }
    }

    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
  }
}
`
