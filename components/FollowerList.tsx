import React from "react";
import { Follower } from "../types/instagram";

interface FollowerListProps {
  followers: Follower[];
}

export default function FollowerList({ followers }: FollowerListProps) {
  if (followers.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <ul>
      {followers.map((user) => (
        <li
          key={user.id}
          style={{ display: "flex", alignItems: "center", margin: "8px 0" }}
        >
          <img
            src={user.avatarUrl}
            alt={user.username}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              marginRight: 8,
            }}
          />
          <span>{user.username}</span>
        </li>
      ))}
    </ul>
  );
}
