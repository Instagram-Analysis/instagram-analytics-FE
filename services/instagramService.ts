// frontend/services/instagramService.ts
const API = process.env.NEXT_PUBLIC_API_URL!;

import { Follower, Liker } from "../types/instagram";

export async function fetchFollowers(): Promise<Follower[]> {
  const res = await fetch(`${API}/api/followers`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load followers");
  return res.json();
}

export async function fetchFollowing(): Promise<Follower[]> {
  const res = await fetch(`${API}/api/following`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load following");
  return res.json();
}

export async function fetchNonFollowers(): Promise<Follower[]> {
  const res = await fetch(`${API}/api/non-followers`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load non-followers");
  return res.json();
}

export async function fetchTopLikers(): Promise<Liker[]> {
  const res = await fetch(`${API}/api/top-likers`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to load top likers");
  return res.json();
}
