export interface Follower {
  id: string;
  username: string;
  avatarUrl: string;
}

export interface Liker extends Follower {
  likes: number;
}
