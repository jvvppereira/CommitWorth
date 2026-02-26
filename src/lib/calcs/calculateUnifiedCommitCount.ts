import { GitHubStatsResponse } from "../types"

// calcula commits de forma mais precisa
export function calculateUnifiedCommitCount(
  data: GitHubStatsResponse
): number {
  return data.user.contributionsCollection.totalCommitContributions
}
