import useInstagramData from "../hooks/useInstagramData";
import FollowerList from "../components/FollowerList";

export default function FollowersPage() {
  const { followers } = useInstagramData();

  if (!followers) {
    return <p>Loading followers…</p>;
  }

  return (
    <div>
      <h2>Who Follows Me</h2>
      <FollowerList followers={followers.data} />
    </div>
  );
}
