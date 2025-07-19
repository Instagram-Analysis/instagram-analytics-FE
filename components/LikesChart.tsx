// frontend/components/LikesChart.tsx
import React from "react";
import { Liker } from "../types/instagram";

interface LikesChartProps {
  likers: Liker[];
}

export default function LikesChart({ likers }: LikesChartProps) {
  if (likers.length === 0) {
    return <p>No likes data available.</p>;
  }

  // Find the largest like count to normalize bar widths
  const maxLikes = Math.max(...likers.map((l) => l.likes));

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {likers.map((liker) => (
        <li
          key={liker.id}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "8px 0",
          }}
        >
          <img
            src={liker.avatarUrl}
            alt={liker.username}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              marginRight: 8,
            }}
          />
          <span style={{ width: 100 }}>{liker.username}</span>
          <div
            style={{
              flexGrow: 1,
              height: "1rem",
              background: "#ddd",
              margin: "0 8px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${(liker.likes / maxLikes) * 100}%`,
                background: "#888",
              }}
            />
          </div>
          <span>{liker.likes}</span>
        </li>
      ))}
    </ul>
  );
}
