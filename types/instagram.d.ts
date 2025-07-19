export interface Follower {
  /** Unique ID of the user */
  id: string
  /** Instagram handle (without @) */
  username: string
  /** URL to their avatar image */
  avatarUrl: string
}

export interface Liker extends Follower {
  /** Number of likes they've given you */
  likes: number
}
