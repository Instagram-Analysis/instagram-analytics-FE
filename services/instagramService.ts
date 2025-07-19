import { Follower, Liker } from '../types/instagram';

// these return mock data for now
export async function fetchFollowers(): Promise<Follower[]> {
  return [
    { id: '1', username: 'alice', avatarUrl: '/favicon.ico' },
    { id: '2', username: 'bob',   avatarUrl: '/favicon.ico' },
  ];
}

export async function fetchFollowing(): Promise<Follower[]> {
  return [
    { id: '3', username: 'carol', avatarUrl: '/favicon.ico' },
    { id: '4', username: 'dave',  avatarUrl: '/favicon.ico' },
  ];
}

export async function fetchNonFollowers(): Promise<Follower[]> {
  // difference between following and followers
  return [
    { id: '3', username: 'carol', avatarUrl: '/favicon.ico' }
  ];
}

export async function fetchTopLikers(): Promise<Liker[]> {
  return [
    { id: '10', username: 'erin',  avatarUrl: '/favicon.ico', likes: 42 },
    { id: '11', username: 'frank', avatarUrl: '/favicon.ico', likes: 37 },
  ];
}
